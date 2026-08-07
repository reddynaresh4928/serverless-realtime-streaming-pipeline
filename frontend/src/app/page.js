"use client";

import { useEffect, useState } from "react";
import api from "../../lib/api";

import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import EventsTable from "../components/EventsTable";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

import TemperatureChart from "../components/TemperatureChart";
import HumidityChart from "../components/HumidityChart";
import DeviceChart from "../components/DeviceChart";

import {
  Cpu,
  Activity,
  Thermometer,
  Droplets,
} from "lucide-react";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [lastUpdated, setLastUpdated] = useState("--");

  const fetchData = async () => {
    try {
      const response = await api.get("/events");

      setEvents(response.data);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  const totalEvents = events.length;

  const totalDevices = new Set(
    events.map((e) => e.deviceId)
  ).size;

  const avgTemp =
    totalEvents > 0
      ? (
          events.reduce(
            (sum, e) => sum + Number(e.temperature),
            0
          ) / totalEvents
        ).toFixed(1)
      : 0;

  const avgHumidity =
    totalEvents > 0
      ? (
          events.reduce(
            (sum, e) => sum + Number(e.humidity),
            0
          ) / totalEvents
        ).toFixed(1)
      : 0;

  // Search + Sort
  const filteredEvents = events
    .filter((event) =>
      event.deviceId
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "latest") {
        return (
          new Date(b.timestamp) -
          new Date(a.timestamp)
        );
      }

      return (
        new Date(a.timestamp) -
        new Date(b.timestamp)
      );
    });

  // Chart Data
  const chartData = filteredEvents.map((event) => ({
    deviceId: event.deviceId,
    temperature: Number(event.temperature),
    humidity: Number(event.humidity),
  }));

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50 p-8">

      <Header lastUpdated={lastUpdated} />

      {/* KPI Cards */}

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Total Devices"
          value={totalDevices}
          subtitle="Connected Devices"
          icon={<Cpu size={35} />}
          gradient="bg-gradient-to-r from-blue-600 to-indigo-700"
        />

        <StatsCard
          title="Total Events"
          value={totalEvents}
          subtitle="Events Processed"
          icon={<Activity size={35} />}
          gradient="bg-gradient-to-r from-green-500 to-emerald-700"
        />

        <StatsCard
          title="Average Temperature"
          value={`${avgTemp}°C`}
          subtitle="Current Average"
          icon={<Thermometer size={35} />}
          gradient="bg-gradient-to-r from-orange-500 to-red-600"
        />

        <StatsCard
          title="Average Humidity"
          value={`${avgHumidity}%`}
          subtitle="Current Average"
          icon={<Droplets size={35} />}
          gradient="bg-gradient-to-r from-cyan-500 to-sky-700"
        />

      </div>

      {/* Analytics */}

      <section className="mb-10">

        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          📊 Analytics Dashboard
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          <TemperatureChart data={chartData} />

          <HumidityChart data={chartData} />

        </div>

        <div className="mt-6">

          <DeviceChart data={chartData} />

        </div>

      </section>

      {/* Search + Filter */}

      <div className="mb-6 grid gap-4 md:grid-cols-2">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <FilterBar
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

      </div>

      {/* Events Table */}

      <EventsTable events={filteredEvents} />

      <Footer />

    </main>
  );
}
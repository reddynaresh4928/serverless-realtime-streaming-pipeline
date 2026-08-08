"use client";

import { useMemo, useState } from "react";
import { useDashboard } from "../context/DashboardContext";

import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import EventsTable from "../components/EventsTable";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

import TemperatureChart from "../components/TemperatureChart";
import HumidityChart from "../components/HumidityChart";
import DeviceChart from "../components/DeviceChart";

import DeviceCard from "../components/DeviceCard";
import LiveActivity from "../components/LiveActivity";
import SystemHealth from "../components/SystemHealth";

import ExportButtons from "../components/ExportButtons";
import AIInsights from "../components/AIInsights";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorState from "../components/ErrorState";


import {
  Cpu,
  Activity,
  Thermometer,
  Droplets,
} from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

  const {
    events,
    loading,
    error,
    lastUpdated,
    fetchEvents,
  } = useDashboard();

  // -------------------------
  // Dashboard Statistics
  // -------------------------

  const totalEvents = events.length;

  const totalDevices = useMemo(() => {
    return new Set(
      events.map((event) => event.deviceId)
    ).size;
  }, [events]);

  const avgTemp = useMemo(() => {
    if (!events.length) return "0";

    return (
      events.reduce(
        (sum, event) =>
          sum + Number(event.temperature),
        0
      ) / events.length
    ).toFixed(1);
  }, [events]);

  const avgHumidity = useMemo(() => {
    if (!events.length) return "0";

    return (
      events.reduce(
        (sum, event) =>
          sum + Number(event.humidity),
        0
      ) / events.length
    ).toFixed(1);
  }, [events]);
  // -------------------------
  // Search + Sorting
  // -------------------------

  const filteredEvents = useMemo(() => {
  return [...events]
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
}, [events, search, sortOrder]);

  // -------------------------
  // Latest Event Per Device
  // -------------------------

  const latestDevices = useMemo(() => {
  return Object.values(
    [...events]
      .sort(
        (a, b) =>
          new Date(b.timestamp) -
          new Date(a.timestamp)
      )
      .reduce((acc, event) => {
        if (!acc[event.deviceId]) {
          acc[event.deviceId] = event;
        }

        return acc;
      }, {})
  );
}, [events]);

  // -------------------------
  // Charts
  // -------------------------

  const chartData = useMemo(() => {
  return filteredEvents.map((event) => ({
    deviceId: event.deviceId,
    temperature: Number(event.temperature),
    humidity: Number(event.humidity),
  }));
}, [filteredEvents]);

// Loading State
if (loading) {
  return (
    <main className="min-h-screen bg-slate-100 p-8 dark:bg-slate-950">
      <LoadingSkeleton />
    </main>
  );
}

// Error State
if (error) {
  return (
    <ErrorState retry={fetchEvents} />
  );
}

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-cyan-50 p-8 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

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

      {/* System Health */}

      <section className="mb-10">
        <SystemHealth />
        <AIInsights events={events} />
      </section>

      {/* Device Overview */}

      <section className="mb-10">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              📡 Device Overview
            </h2>

            <p className="mt-1 text-slate-500 dark:text-slate-400">
              Live status of all connected IoT devices
            </p>

          </div>

          <span className="text-sm text-slate-500 dark:text-slate-400">
            {latestDevices.length} Devices Connected
          </span>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {latestDevices.map((device) => (
            <DeviceCard
              key={device.deviceId}
              device={device}
            />
          ))}

        </div>

      </section>

      {/* Analytics */}

      <section className="mb-10">

        <h2 className="mb-6 text-3xl font-bold text-slate-800 dark:text-white">
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

      {/* Live Activity */}

      <section className="mb-10">

        <LiveActivity events={events} />

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

      {/* Export */}

<ExportButtons events={filteredEvents} />

      {/* Events Table */}

      <EventsTable events={filteredEvents} />

      {/* Footer */}

      <Footer />

    </main>
  );
}
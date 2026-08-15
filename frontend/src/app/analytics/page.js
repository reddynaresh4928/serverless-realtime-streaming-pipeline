"use client";

import { useMemo } from "react";
import {
  Activity,
  Cpu,
  Thermometer,
  Droplets,
} from "lucide-react";

import { useDashboard } from "../../context/DashboardContext";

import StatsCard from "../../components/StatsCard";
import TemperatureChart from "../../components/TemperatureChart";
import HumidityChart from "../../components/HumidityChart";
import DeviceChart from "../../components/DeviceChart";
import AIInsights from "../../components/AIInsights";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function AnalyticsPage() {
  const { events } = useDashboard();

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

  const chartData = useMemo(() => {
    return events.map((event) => ({
      deviceId: event.deviceId,
      temperature: Number(event.temperature),
      humidity: Number(event.humidity),
    }));
  }, [events]);

  return (
    <ProtectedRoute>
    <main className="min-h-screen bg-slate-100 p-8 dark:bg-slate-950">

      {/* Hero */}

      <div className="rounded-3xl bg-linear-to-r from-indigo-700 via-blue-700 to-cyan-600 p-10 text-white shadow-2xl">

        <h1 className="text-5xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="mt-4 text-lg text-blue-100">
          Real-time analytics and visualization of IoT sensor data.
        </p>

      </div>

      {/* KPI Cards */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Devices"
          value={totalDevices}
          subtitle="Connected Devices"
          icon={<Cpu size={35} />}
          gradient="bg-gradient-to-r from-blue-600 to-indigo-700"
        />

        <StatsCard
          title="Events"
          value={totalEvents}
          subtitle="Processed Events"
          icon={<Activity size={35} />}
          gradient="bg-gradient-to-r from-green-500 to-emerald-700"
        />

        <StatsCard
          title="Avg Temp"
          value={`${avgTemp}°C`}
          subtitle="Temperature"
          icon={<Thermometer size={35} />}
          gradient="bg-gradient-to-r from-orange-500 to-red-600"
        />

        <StatsCard
          title="Avg Humidity"
          value={`${avgHumidity}%`}
          subtitle="Humidity"
          icon={<Droplets size={35} />}
          gradient="bg-gradient-to-r from-cyan-500 to-sky-700"
        />

      </div>

      {/* Charts */}

      <section className="mt-10">

        <div className="grid gap-6 lg:grid-cols-2">

          <TemperatureChart data={chartData} />

          <HumidityChart data={chartData} />

        </div>

        <div className="mt-6">

          <DeviceChart data={chartData} />

        </div>

      </section>

      {/* AI */}

      <section className="mt-10">

        <AIInsights events={events} />

      </section>

    </main>
    </ProtectedRoute>
  );
}
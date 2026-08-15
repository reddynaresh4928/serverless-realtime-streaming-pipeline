"use client";

import { useMemo } from "react";
import { Cpu, Activity, Thermometer } from "lucide-react";

import { useDashboard } from "../../context/DashboardContext";
import DeviceCard from "../../components/DeviceCard";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function DevicesPage() {
  const { events } = useDashboard();

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

  return (
    <ProtectedRoute>
    <main className="min-h-screen bg-slate-100 p-8 dark:bg-slate-950">

      {/* Hero */}

      <div className="rounded-3xl bg-linear-to-r from-blue-700 via-indigo-700 to-cyan-600 p-10 text-white shadow-2xl">

        <h1 className="text-5xl font-bold">
          Device Management
        </h1>

        <p className="mt-4 text-lg text-blue-100">
          Monitor every connected IoT device in real time.
        </p>

      </div>

      {/* Summary */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">

          <div className="flex items-center gap-3">

            <Cpu className="text-blue-600" />

            <h2 className="text-xl font-semibold dark:text-white">
              Total Devices
            </h2>

          </div>

          <p className="mt-4 text-4xl font-bold text-blue-600">
            {latestDevices.length}
          </p>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">

          <div className="flex items-center gap-3">

            <Activity className="text-green-600" />

            <h2 className="text-xl font-semibold dark:text-white">
              Online Devices
            </h2>

          </div>

          <p className="mt-4 text-4xl font-bold text-green-600">
            {latestDevices.length}
          </p>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">

          <div className="flex items-center gap-3">

            <Thermometer className="text-orange-600" />

            <h2 className="text-xl font-semibold dark:text-white">
              Average Temperature
            </h2>

          </div>

          <p className="mt-4 text-4xl font-bold text-orange-600">
            {avgTemp}°C
          </p>

        </div>

      </div>

      {/* Device Grid */}

      <section className="mt-10">

        <h2 className="mb-6 text-3xl font-bold text-slate-800 dark:text-white">
          Connected Devices
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {latestDevices.map((device) => (
            <DeviceCard
              key={device.deviceId}
              device={device}
            />
          ))}

        </div>

      </section>

    </main>
    </ProtectedRoute>
  );
}
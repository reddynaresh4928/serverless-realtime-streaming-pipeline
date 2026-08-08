"use client";

import {
  Brain,
  Thermometer,
  Droplets,
  Cpu,
  TriangleAlert,
  BadgeCheck,
} from "lucide-react";

export default function AIInsights({ events }) {
  if (!events.length) {
    return (
      <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-800 dark:text-white">
          <Brain className="text-violet-600" />
          AI Insights
        </h2>

        <p className="text-slate-500 dark:text-slate-400">
          Waiting for incoming IoT events...
        </p>
      </div>
    );
  }

  const hottest = events.reduce((a, b) =>
    Number(a.temperature) > Number(b.temperature) ? a : b
  );

  const humid = events.reduce((a, b) =>
    Number(a.humidity) > Number(b.humidity) ? a : b
  );

  const avgTemp = (
    events.reduce(
      (sum, event) => sum + Number(event.temperature),
      0
    ) / events.length
  ).toFixed(1);

  const deviceCounts = {};

  events.forEach((event) => {
    deviceCounts[event.deviceId] =
      (deviceCounts[event.deviceId] || 0) + 1;
  });

  const mostActive = Object.keys(deviceCounts).reduce((a, b) =>
    deviceCounts[a] > deviceCounts[b] ? a : b
  );

  let recommendation = "System operating normally.";

  if (Number(hottest.temperature) >= 35) {
    recommendation = `Inspect ${hottest.deviceId} cooling system.`;
  } else if (Number(humid.humidity) >= 80) {
    recommendation = `Check humidity sensors on ${humid.deviceId}.`;
  }

  return (
    <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">

      <div className="mb-8 flex items-center gap-3">

        <Brain
          size={32}
          className="text-violet-600"
        />

        <div>

          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            AI Insights
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            Automatic analysis of real-time IoT events
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <div className="rounded-2xl bg-orange-50 p-6 dark:bg-orange-950/30">

          <div className="flex items-center gap-3">

            <Thermometer className="text-orange-600" />

            <h3 className="font-bold text-slate-800 dark:text-white">
              Hottest Device
            </h3>

          </div>

          <p className="mt-4 text-2xl font-bold text-orange-600">
            {hottest.deviceId}
          </p>

          <p className="text-slate-600 dark:text-slate-300">
            {hottest.temperature}°C
          </p>

        </div>

        <div className="rounded-2xl bg-cyan-50 p-6 dark:bg-cyan-950/30">

          <div className="flex items-center gap-3">

            <Droplets className="text-cyan-600" />

            <h3 className="font-bold text-slate-800 dark:text-white">
              Highest Humidity
            </h3>

          </div>

          <p className="mt-4 text-2xl font-bold text-cyan-600">
            {humid.deviceId}
          </p>

          <p className="text-slate-600 dark:text-slate-300">
            {humid.humidity}%
          </p>

        </div>

        <div className="rounded-2xl bg-indigo-50 p-6 dark:bg-indigo-950/30">

          <div className="flex items-center gap-3">

            <Cpu className="text-indigo-600" />

            <h3 className="font-bold text-slate-800 dark:text-white">
              Most Active Device
            </h3>

          </div>

          <p className="mt-4 text-2xl font-bold text-indigo-600">
            {mostActive}
          </p>

          <p className="text-slate-600 dark:text-slate-300">
            {deviceCounts[mostActive]} Events
          </p>

        </div>

        <div className="rounded-2xl bg-green-50 p-6 dark:bg-green-950/30">

          <div className="flex items-center gap-3">

            <BadgeCheck className="text-green-600" />

            <h3 className="font-bold text-slate-800 dark:text-white">
              Average Temperature
            </h3>

          </div>

          <p className="mt-4 text-3xl font-bold text-green-600">
            {avgTemp}°C
          </p>

        </div>

        <div className="rounded-2xl bg-yellow-50 p-6 dark:bg-yellow-950/30 md:col-span-2">

          <div className="flex items-center gap-3">

            <TriangleAlert className="text-yellow-600" />

            <h3 className="font-bold text-slate-800 dark:text-white">
              Recommendation
            </h3>

          </div>

          <p className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-300">
            {recommendation}
          </p>

        </div>

      </div>

    </section>
  );
}
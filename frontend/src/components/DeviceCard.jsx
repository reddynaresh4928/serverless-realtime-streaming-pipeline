"use client";

import {
  Cpu,
  Thermometer,
  Droplets,
  BatteryFull,
  Wifi,
  CheckCircle,
} from "lucide-react";

export default function DeviceCard({ device }) {

  // Stable hash based on deviceId
  const hash = [...device.deviceId].reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0
  );

  const battery = 70 + (hash % 31);

  const signalLevels = [
    "Excellent",
    "Good",
    "Fair",
  ];

  const signal = signalLevels[hash % signalLevels.length];

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative p-6">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>

            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white">

              <Cpu
                className="text-blue-600"
                size={22}
              />

              {device.deviceId}

            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Connected IoT Device
            </p>

          </div>

          <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">

            <CheckCircle size={16} />

            Online

          </span>

        </div>

        {/* Temperature */}

        <div className="mt-6 flex items-center gap-3">

          <div className="rounded-xl bg-orange-100 p-3 dark:bg-orange-900/30">

            <Thermometer
              className="text-orange-600"
              size={22}
            />

          </div>

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Temperature
            </p>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              {device.temperature}°C
            </h2>

          </div>

        </div>

        {/* Humidity */}

        <div className="mt-5 flex items-center gap-3">

          <div className="rounded-xl bg-cyan-100 p-3 dark:bg-cyan-900/30">

            <Droplets
              className="text-cyan-600"
              size={22}
            />

          </div>

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Humidity
            </p>

            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {device.humidity}%
            </h2>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex justify-between border-t border-slate-200 pt-4 dark:border-slate-700">

          <div className="flex items-center gap-2 text-green-600">

            <BatteryFull size={20} />

            <span className="font-semibold">
              {battery}%
            </span>

          </div>

          <div className="flex items-center gap-2 text-blue-600">

            <Wifi size={20} />

            <span className="font-semibold">
              {signal}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}
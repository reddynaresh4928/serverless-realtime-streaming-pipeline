"use client";

import { Cpu } from "lucide-react";

export default function EventsTable({ events }) {
  const getTempColor = (temp) => {
    if (temp >= 35)
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";

    if (temp >= 30)
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";

    return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
  };

  const getHumidityColor = (humidity) => {
    if (humidity >= 80)
      return "bg-blue-200 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300";

    if (humidity >= 60)
      return "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300";

    return "bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-gray-300";
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 px-6 py-5">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">
              📡 Recent IoT Events
            </h2>

            <p className="mt-1 text-sm text-blue-100">
              Live monitoring data from connected IoT devices
            </p>

          </div>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            {events.length} Events
          </span>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="sticky top-0 z-10 bg-slate-100 dark:bg-slate-800">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                Device
              </th>

              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                Temperature
              </th>

              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                Humidity
              </th>

              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                Timestamp
              </th>

            </tr>

          </thead>

          <tbody>

            {events.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-12 text-center text-slate-500 dark:text-slate-400"
                >
                  No IoT events found.
                </td>

              </tr>

            ) : (

              events.map((event, index) => (

                <tr
                  key={index}
                  className="
                    border-b
                    border-slate-100
                    transition-all
                    duration-300
                    hover:bg-blue-50
                    hover:shadow-md
                    dark:border-slate-800
                    dark:hover:bg-slate-800
                  "
                >

                  {/* Device */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">

                        <Cpu
                          size={18}
                          className="text-blue-600 dark:text-blue-300"
                        />

                      </div>

                      <div>

                        <p className="font-semibold text-slate-800 dark:text-white">
                          {event.deviceId}
                        </p>

                        <p className="text-xs text-slate-500">
                          Edge Sensor
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">

                      <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>

                      Online

                    </span>

                  </td>

                  {/* Temperature */}

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${getTempColor(
                        Number(event.temperature)
                      )}`}
                    >
                      🌡 {event.temperature}°C
                    </span>

                  </td>

                  {/* Humidity */}

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${getHumidityColor(
                        Number(event.humidity)
                      )}`}
                    >
                      💧 {event.humidity}%
                    </span>

                  </td>

                  {/* Timestamp */}

                  <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-300">

                    {new Date(event.timestamp).toLocaleString("en-IN")}

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
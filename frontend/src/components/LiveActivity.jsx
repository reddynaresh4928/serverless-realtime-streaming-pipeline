"use client";

import {
  Activity,
  Thermometer,
  Droplets,
  Clock,
} from "lucide-react";

export default function LiveActivity({ events }) {
  const latest = [...events]
    .sort(
      (a, b) =>
        new Date(b.timestamp) -
        new Date(a.timestamp)
    )
    .slice(0, 8);

  return (
    <div className="rounded-3xl bg-white border border-slate-200 shadow-xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <Activity
          className="text-green-600"
          size={28}
        />

        <div>

          <h2 className="text-2xl font-bold">
            Live Activity
          </h2>

          <p className="text-sm text-slate-500">
            Latest incoming IoT events
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {latest.map((event, index) => (

          <div
            key={index}
            className="flex justify-between items-center rounded-2xl bg-slate-50 p-4 hover:bg-blue-50 transition"
          >

            <div>

              <p className="font-semibold">
                {event.deviceId}
              </p>

              <div className="mt-1 flex gap-4 text-sm text-slate-600">

                <span className="flex items-center gap-1">

                  <Thermometer size={14} />

                  {event.temperature}°C

                </span>

                <span className="flex items-center gap-1">

                  <Droplets size={14} />

                  {event.humidity}%

                </span>

              </div>

            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">

              <Clock size={14} />

              {new Date(event.timestamp).toLocaleTimeString()}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
"use client";

import { Cpu } from "lucide-react";

export default function EventsTable({ events }) {
  const getTempColor = (temp) => {
    if (temp >= 35)
      return "bg-red-100 text-red-700";

    if (temp >= 30)
      return "bg-yellow-100 text-yellow-700";

    return "bg-green-100 text-green-700";
  };

  const getHumidityColor = (humidity) => {
    if (humidity >= 80)
      return "bg-blue-200 text-blue-900";

    if (humidity >= 60)
      return "bg-cyan-100 text-cyan-700";

    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

      <div className="border-b bg-gradient-to-r from-blue-600 to-indigo-700 p-5">

        <h2 className="text-2xl font-bold text-white">
          📡 Recent IoT Events
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="sticky top-0 bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left font-semibold">
                Device
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Temperature
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Humidity
              </th>

              <th className="px-6 py-4 text-left font-semibold">
                Timestamp
              </th>

            </tr>

          </thead>

          <tbody>

            {events.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-10 text-center text-gray-500"
                >
                  No events found.
                </td>

              </tr>

            ) : (

              events.map((event, index) => (

                <tr
                  key={index}
                  className={`transition hover:bg-blue-50 ${
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50"
                  }`}
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-full bg-blue-100 p-2">
                        <Cpu
                          size={18}
                          className="text-blue-600"
                        />
                      </div>

                      <span className="font-semibold">
                        {event.deviceId}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 py-4">

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">

                      ● Online

                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 font-semibold ${getTempColor(
                        event.temperature
                      )}`}
                    >
                      🌡 {event.temperature}°C
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 font-semibold ${getHumidityColor(
                        event.humidity
                      )}`}
                    >
                      💧 {event.humidity}%
                    </span>

                  </td>

                  <td className="px-6 py-4 text-gray-600">

                    {new Date(
                      event.timestamp
                    ).toLocaleString()}

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
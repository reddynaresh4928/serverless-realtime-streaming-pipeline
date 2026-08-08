"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

export default function TemperatureChart({ data }) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-xl
        transition-all
        duration-300
        hover:shadow-2xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          🌡 Temperature Trend
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Real-time temperature readings from connected IoT devices
        </p>

      </div>

      <ResponsiveContainer width="100%" height={360}>

        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >

          <defs>

            <linearGradient
              id="tempLine"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>

          </defs>

          <CartesianGrid
            strokeDasharray="4 4"
            strokeOpacity={0.25}
          />

          <XAxis
            dataKey="deviceId"
            tick={{
              fill: "#94a3b8",
              fontSize: 12,
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fill: "#94a3b8",
              fontSize: 12,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{
              stroke: "#3b82f6",
              strokeDasharray: "4 4",
            }}
            contentStyle={{
              backgroundColor: "#0f172a",
              color: "#fff",
              borderRadius: "16px",
              border: "none",
              boxShadow:
                "0 15px 40px rgba(0,0,0,.35)",
            }}
            labelStyle={{
              color: "#fff",
            }}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="temperature"
            name="Temperature (°C)"
            stroke="url(#tempLine)"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#ffffff",
              stroke: "#f97316",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 8,
              fill: "#ef4444",
            }}
            animationDuration={1200}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}
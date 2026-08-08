"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

export default function HumidityChart({ data }) {
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
          💧 Humidity Trend
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Real-time humidity levels collected from IoT devices
        </p>

      </div>

      <ResponsiveContainer width="100%" height={360}>

        <AreaChart
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
              id="humidityGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#06b6d4"
                stopOpacity={0.9}
              />

              <stop
                offset="100%"
                stopColor="#06b6d4"
                stopOpacity={0.05}
              />

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
              stroke: "#06b6d4",
              strokeDasharray: "4 4",
            }}
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "none",
              borderRadius: "16px",
              color: "#fff",
              boxShadow: "0 15px 40px rgba(0,0,0,.35)",
            }}
            labelStyle={{
              color: "#fff",
            }}
          />

          <Legend />

          <Area
            type="monotone"
            dataKey="humidity"
            name="Humidity (%)"
            stroke="#06b6d4"
            strokeWidth={4}
            fill="url(#humidityGradient)"
            animationDuration={1200}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}
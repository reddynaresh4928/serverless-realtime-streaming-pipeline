"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function HumidityChart({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700">
        💧 Humidity Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis
            dataKey="deviceId"
            tick={{ fontSize: 12 }}
          />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="humidity"
            stroke="#2196f3"
            fill="#90caf9"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
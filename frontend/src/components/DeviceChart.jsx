"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
];

export default function DeviceChart({ data }) {
  // Count events for each device
  const deviceCounts = data.reduce((acc, item) => {
    const existing = acc.find(
      (d) => d.deviceId === item.deviceId
    );

    if (existing) {
      existing.value += 1;
    } else {
      acc.push({
        deviceId: item.deviceId,
        value: 1,
      });
    }

    return acc;
  }, []);

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
          📡 Device Distribution
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Event distribution across connected IoT devices
        </p>

      </div>

      <ResponsiveContainer width="100%" height={400}>

        <PieChart>

          <Pie
            data={deviceCounts}
            dataKey="value"
            nameKey="deviceId"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={65}
            paddingAngle={4}
            animationDuration={1200}
            label
          >
            {deviceCounts.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "none",
              borderRadius: "16px",
              color: "#fff",
              boxShadow:
                "0 15px 40px rgba(0,0,0,.35)",
            }}
            labelStyle={{
              color: "#fff",
            }}
          />

          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
          />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}
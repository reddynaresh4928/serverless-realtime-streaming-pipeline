"use client";

import { useEffect, useState } from "react";
import api from "../../../lib/api";

import TemperatureChart from "../../components/TemperatureChart";
import HumidityChart from "../../components/HumidityChart";
import DeviceChart from "../../components/DeviceChart";

import {
  Thermometer,
  Droplets,
  TrendingUp,
  Cpu,
} from "lucide-react";

export default function Analytics() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/events");
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const chartData = events.map((event) => ({
    deviceId: event.deviceId,
    temperature: Number(event.temperature),
    humidity: Number(event.humidity),
  }));

  const temperatures = chartData.map((d) => d.temperature);
  const humidities = chartData.map((d) => d.humidity);

  const highestTemp =
    temperatures.length > 0
      ? Math.max(...temperatures)
      : 0;

  const lowestTemp =
    temperatures.length > 0
      ? Math.min(...temperatures)
      : 0;

  const avgTemp =
    temperatures.length > 0
      ? (
          temperatures.reduce((a, b) => a + b, 0) /
          temperatures.length
        ).toFixed(1)
      : 0;

  const avgHumidity =
    humidities.length > 0
      ? (
          humidities.reduce((a, b) => a + b, 0) /
          humidities.length
        ).toFixed(1)
      : 0;

  const cards = [
    {
      title: "Highest Temp",
      value: `${highestTemp}°C`,
      icon: <TrendingUp size={28} />,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Lowest Temp",
      value: `${lowestTemp}°C`,
      icon: <Thermometer size={28} />,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Average Temp",
      value: `${avgTemp}°C`,
      icon: <Cpu size={28} />,
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Average Humidity",
      value: `${avgHumidity}%`,
      icon: <Droplets size={28} />,
      color: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          📊 Analytics Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Visual insights from your real-time IoT monitoring platform.
        </p>
      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-3xl bg-gradient-to-r ${card.color} p-6 text-white shadow-xl`}
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-sm opacity-80">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              {card.icon}

            </div>
          </div>
        ))}

      </div>

      {/* Charts */}

      <div className="grid gap-8 xl:grid-cols-2">

        <TemperatureChart data={chartData} />

        <HumidityChart data={chartData} />

      </div>

      <DeviceChart data={chartData} />

    </div>
  );
}
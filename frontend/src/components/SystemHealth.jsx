"use client";

import {
  CheckCircle2,
  Cloud,
  Database,
  Server,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    name: "AWS Lambda",
    status: "Healthy",
    icon: Server,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    name: "API Gateway",
    status: "Healthy",
    icon: Cloud,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    name: "DynamoDB",
    status: "Connected",
    icon: Database,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    name: "CloudWatch",
    status: "Monitoring",
    icon: CheckCircle2,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    name: "Auto Refresh",
    status: "Every 5 Seconds",
    icon: RefreshCw,
    color: "text-cyan-600",
    bg: "bg-cyan-100",
  },
];

export default function SystemHealth() {
  return (
    <section className="mb-10">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-slate-800">
          ❤️ System Health
        </h2>

        <p className="text-slate-500 mt-1">
          Current health of all cloud services
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg}`}
              >
                <Icon
                  className={service.color}
                  size={28}
                />
              </div>

              <h3 className="text-lg font-bold text-slate-800">
                {service.name}
              </h3>

              <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {service.status}
              </span>
            </div>
          );
        })}

      </div>

    </section>
  );
}
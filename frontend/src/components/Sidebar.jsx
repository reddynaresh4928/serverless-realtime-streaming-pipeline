"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Cpu,
  BarChart3,
  FileText,
  Cloud,
  Settings,
  Info,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Devices",
    href: "/devices",
    icon: Cpu,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    name: "CloudWatch",
    href: "https://console.aws.amazon.com/cloudwatch/",
    icon: Cloud,
    external: true,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    name: "About",
    href: "/about",
    icon: Info,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-72 flex-col bg-slate-900 text-white shadow-2xl">

      <div className="border-b border-slate-700 p-8">

        <h1 className="text-2xl font-bold text-cyan-400">
          IoT Monitor
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Serverless Monitoring Platform
        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            !item.external &&
            pathname === item.href;

          return item.external ? (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-slate-800"
            >
              <Icon size={22} />
              <span>{item.name}</span>
            </a>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Icon size={22} />
              <span>{item.name}</span>
            </Link>
          );
        })}

      </nav>

      <div className="border-t border-slate-700 p-6 text-center text-xs text-slate-500">
        AWS Serverless Project
      </div>

    </aside>
  );
}
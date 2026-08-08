"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  RefreshCw,
  UserCircle2,
  CalendarDays,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import NotificationDrawer from "./NotificationDrawer";
import { useDashboard } from "../context/DashboardContext";

export default function TopNavbar() {
  const [currentDate, setCurrentDate] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {
    fetchEvents,
    loading,
    events,
  } = useDashboard();

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    );
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900/80">

        <div className="flex items-center justify-between px-8 py-5">

          {/* Left */}

          <div>

            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
              Serverless IoT Monitoring Platform
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              AWS Lambda • API Gateway • DynamoDB • CloudWatch
            </p>

          </div>

          {/* Right */}

          <div className="flex items-center gap-4">

            {/* LIVE Badge */}

            <div className="hidden lg:flex items-center gap-2 rounded-xl bg-green-100 px-4 py-2 dark:bg-green-900/30">

              <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

              <span className="font-semibold text-green-700 dark:text-green-400">
                LIVE
              </span>

            </div>

            {/* Date */}

            <div className="hidden xl:flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-800">

              <CalendarDays
                size={18}
                className="text-slate-700 dark:text-slate-300"
              />

              <span className="text-slate-700 dark:text-slate-300">
                {currentDate}
              </span>

            </div>

            {/* Refresh */}

            <button
              onClick={fetchEvents}
              disabled={loading}
              title="Refresh Dashboard"
              className="rounded-xl bg-slate-100 p-3 transition-all hover:scale-105 hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-800 dark:hover:bg-slate-700"
            >

              <RefreshCw
                size={20}
                className={`text-slate-700 dark:text-slate-300 ${
                  loading ? "animate-spin" : ""
                }`}
              />

            </button>

            {/* Notifications */}

            <button
              onClick={() => setDrawerOpen(true)}
              className="relative rounded-xl bg-slate-100 p-3 transition-all hover:scale-105 hover:bg-cyan-100 dark:bg-slate-800 dark:hover:bg-slate-700"
            >

              <Bell
                size={20}
                className="text-slate-700 dark:text-slate-300"
              />

              {events.length > 0 && (

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">

                  {events.length > 9 ? "9+" : events.length}

                </span>

              )}

            </button>

            {/* Theme Toggle */}

            <ThemeToggle />

            {/* User */}

            <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-800">

              <UserCircle2
                size={38}
                className="text-slate-700 dark:text-slate-300"
              />

              <div className="hidden md:block">

                <p className="font-semibold text-slate-800 dark:text-white">
                  Naresh Reddy
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Administrator
                </p>

              </div>

            </div>

          </div>

        </div>

      </header>

      {/* Notification Drawer */}

      <NotificationDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
      />

    </>
  );
}
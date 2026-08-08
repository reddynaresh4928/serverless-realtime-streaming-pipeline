"use client";

import { useMemo, useState } from "react";
import {
  Bell,
  X,
  AlertTriangle,
  Flame,
  Info,
  Search,
  Trash2,
} from "lucide-react";

import { useAlerts } from "../context/AlertContext";

export default function NotificationDrawer({
  open,
  setOpen,
}) {
  const { alerts } = useAlerts();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [hiddenAlerts, setHiddenAlerts] = useState([]);

  const visibleAlerts = alerts.filter(
    (alert) => !hiddenAlerts.includes(alert.timestamp)
  );

  const filteredAlerts = visibleAlerts.filter(
    (alert) => {
      const matchesSearch =
        alert.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        alert.message
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all"
          ? true
          : alert.type === filter;

      return matchesSearch && matchesFilter;
    }
  );

  const stats = useMemo(() => {
    return {
      critical: visibleAlerts.filter(
        (a) => a.type === "critical"
      ).length,

      warning: visibleAlerts.filter(
        (a) => a.type === "warning"
      ).length,

      info: visibleAlerts.filter(
        (a) => a.type === "info"
      ).length,
    };
  }, [visibleAlerts]);

  const clearAll = () => {
    setHiddenAlerts(
      alerts.map((a) => a.timestamp)
    );
  };

  const badge = (type) => {
    switch (type) {
      case "critical":
        return (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 dark:bg-red-900/40 dark:text-red-300">
            CRITICAL
          </span>
        );

      case "warning":
        return (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
            WARNING
          </span>
        );

      default:
        return (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            INFO
          </span>
        );
    }
  };

  const icon = (type) => {
    switch (type) {
      case "critical":
        return (
          <Flame
            size={22}
            className="text-red-600"
          />
        );

      case "warning":
        return (
          <AlertTriangle
            size={22}
            className="text-yellow-600"
          />
        );

      default:
        return (
          <Info
            size={22}
            className="text-blue-600"
          />
        );
    }
  };

  const relativeTime = (timestamp) => {
    const diff =
      Math.floor(
        (Date.now() -
          new Date(timestamp).getTime()) /
          1000
      );

    if (diff < 60) return "Just now";

    if (diff < 3600)
      return `${Math.floor(diff / 60)} min ago`;

    if (diff < 86400)
      return `${Math.floor(diff / 3600)} hr ago`;

    return `${Math.floor(diff / 86400)} day ago`;
  };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-96 border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 dark:border-slate-700 dark:bg-slate-900 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex h-full flex-col">

          {/* Header */}

          <div className="sticky top-0 z-10 border-b border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Bell
                  size={24}
                  className="text-blue-600"
                />

                <div>

                  <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                    Smart Alerts
                  </h2>

                  <p className="text-sm text-slate-500">
                    {visibleAlerts.length} Active Alerts
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                <button
                  onClick={clearAll}
                  className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <Trash2 size={16} />
                  Clear
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X />
                </button>

              </div>

            </div>

          </div>

          {/* Search */}

          <div className="border-b border-slate-200 p-4 dark:border-slate-700">

            <div className="flex items-center rounded-xl bg-slate-100 px-3 dark:bg-slate-800">

              <Search
                size={18}
                className="text-slate-500"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search alerts..."
                className="w-full bg-transparent p-3 outline-none dark:text-white"
              />

            </div>

            {/* Filter Chips */}

            <div className="mt-4 flex flex-wrap gap-2">

              {[
                "all",
                "critical",
                "warning",
                "info",
              ].map((type) => (

                <button
                  key={type}
                  onClick={() =>
                    setFilter(type)
                  }
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    filter === type
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                  }`}
                >
                  {type.charAt(0).toUpperCase() +
                    type.slice(1)}
                </button>

              ))}

            </div>

            {/* Alert Statistics */}

            <div className="mt-5 grid grid-cols-3 gap-3">

              <div className="rounded-xl bg-red-50 p-3 text-center dark:bg-red-900/20">

                <p className="text-2xl font-bold text-red-600">
                  {stats.critical}
                </p>

                <p className="text-xs text-red-500">
                  Critical
                </p>

              </div>

              <div className="rounded-xl bg-yellow-50 p-3 text-center dark:bg-yellow-900/20">

                <p className="text-2xl font-bold text-yellow-600">
                  {stats.warning}
                </p>

                <p className="text-xs text-yellow-600">
                  Warning
                </p>

              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">

                <p className="text-2xl font-bold text-blue-600">
                  {stats.info}
                </p>

                <p className="text-xs text-blue-600">
                  Info
                </p>

              </div>

            </div>

          </div>

          {/* Alerts */}

          <div className="flex-1 space-y-4 overflow-y-auto p-6">
                        {filteredAlerts.length === 0 ? (

              <div className="mt-16 flex flex-col items-center justify-center">

                <Bell
                  size={60}
                  className="mb-4 text-slate-300 dark:text-slate-600"
                />

                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  No Alerts Found
                </h3>

                <p className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
                  Try changing your search or filter.
                </p>

              </div>

            ) : (

              filteredAlerts.map((alert, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
                >

                  <div className="flex items-start gap-4">

                    <div className="mt-1">

                      {icon(alert.type)}

                    </div>

                    <div className="flex-1">

                      <div className="mb-3 flex items-center justify-between">

                        <h3 className="font-semibold text-slate-800 dark:text-white">
                          {alert.title}
                        </h3>

                        {badge(alert.type)}

                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {alert.message}
                      </p>

                      <div className="mt-4 flex items-center justify-between">

                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {relativeTime(alert.timestamp)}
                        </span>

                        <button
                          onClick={() =>
                            setHiddenAlerts((prev) => [
                              ...prev,
                              alert.timestamp,
                            ])
                          }
                          className="rounded-lg px-3 py-1 text-xs font-medium text-red-600 transition hover:bg-red-50 dark:hover:bg-red-900/30"
                        >
                          Dismiss
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </aside>

    </>
  );
}
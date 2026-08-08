"use client";

import { useMemo, useState } from "react";
import { FileText } from "lucide-react";

import { useDashboard } from "../../context/DashboardContext";

import ExportButtons from "../../components/ExportButtons";
import SearchBar from "../../components/SearchBar";
import FilterBar from "../../components/FilterBar";
import EventsTable from "../../components/EventsTable";

export default function ReportsPage() {
  const { events } = useDashboard();

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

  const filteredEvents = useMemo(() => {
    return [...events]
      .filter((event) =>
        event.deviceId
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOrder === "latest") {
          return (
            new Date(b.timestamp) -
            new Date(a.timestamp)
          );
        }

        return (
          new Date(a.timestamp) -
          new Date(b.timestamp)
        );
      });
  }, [events, search, sortOrder]);

  return (
    <main className="min-h-screen bg-slate-100 p-8 dark:bg-slate-950">

      {/* Hero */}

      <div className="rounded-3xl bg-linear-to-r from-emerald-600 via-green-600 to-teal-600 p-10 text-white shadow-2xl">

        <div className="flex items-center gap-4">

          <FileText size={46} />

          <div>

            <h1 className="text-5xl font-bold">
              Reports
            </h1>

            <p className="mt-2 text-lg text-green-100">
              Search, filter and export IoT event history.
            </p>

          </div>

        </div>

      </div>

      {/* Search & Filter */}

      <div className="mt-10 grid gap-4 md:grid-cols-2">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <FilterBar
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

      </div>

      {/* Export */}

      <div className="mt-6">

        <ExportButtons events={filteredEvents} />

      </div>

      {/* Table */}

      <div className="mt-6">

        <EventsTable events={filteredEvents} />

      </div>

    </main>
  );
}
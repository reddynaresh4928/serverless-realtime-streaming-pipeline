"use client";

import { useMemo, useState, useEffect } from "react";
import api from "../../../lib/api";
import { FileText } from "lucide-react";

import { useDashboard } from "../../context/DashboardContext";

import ExportButtons from "../../components/ExportButtons";
import SearchBar from "../../components/SearchBar";
import FilterBar from "../../components/FilterBar";
import EventsTable from "../../components/EventsTable";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function ReportsPage() {
  const { events } = useDashboard();

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [generating, setGenerating] = useState(false);

  const [reportKey, setReportKey] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const [reports, setReports] = useState([]);
  const [loadingReports, setLoadingReports] = useState(false);

  const filteredEvents = useMemo(() => {
    return [...events]
      .filter((event) =>
        event.deviceId.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOrder === "latest") {
          return new Date(b.timestamp) - new Date(a.timestamp);
        }

        return new Date(a.timestamp) - new Date(b.timestamp);
      });
  }, [events, search, sortOrder]);

  const loadReports = async () => {
    try {
      setLoadingReports(true);

      const response = await api.get("/reports");

      const result =
        typeof response.data.body === "string"
          ? JSON.parse(response.data.body)
          : response.data;

      setReports(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingReports(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  const generateReport = async () => {
    try {
      setGenerating(true);

      const response = await api.post("/reports");

      const result =
        typeof response.data.body === "string"
          ? JSON.parse(response.data.body)
          : response.data;

      setReportKey(result.reportKey);
      setDownloadUrl(result.downloadUrl);

      await loadReports();

      alert("Report generated successfully.");
    } catch (error) {
      console.error(error);

      alert("Failed to generate report.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <ProtectedRoute>
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

      <div className="mt-6 flex flex-wrap items-center gap-4">

        <ExportButtons events={filteredEvents} />

        <button
          onClick={generateReport}
          disabled={generating}
          className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {generating
            ? "Generating..."
            : "Generate AWS Report"}
        </button>

      </div>

      {/* Latest Report */}

      {reportKey && (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-700 dark:bg-emerald-900/20">

          <h3 className="font-semibold text-emerald-700 dark:text-emerald-300">
            Report Generated Successfully
          </h3>

          <p className="mt-2 break-all text-sm">
            {reportKey}
          </p>

          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            ⬇ Download Report
          </a>

        </div>
      )}

      {/* Report History */}

      <div className="mt-8 rounded-2xl bg-white p-6 shadow dark:bg-slate-900">

        <h2 className="mb-4 text-2xl font-bold">
          Generated Reports
        </h2>

        {loadingReports ? (
          <p>Loading...</p>
        ) : reports.length === 0 ? (
          <p>No reports found.</p>
        ) : (
          <div className="space-y-3">

            {reports.map((report) => (

              <div
                key={report.key}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <div>

                  <p className="font-medium">
                    {report.key.replace("reports/", "")}
                  </p>

                  <p className="text-sm text-gray-500">
                    {new Date(report.lastModified).toLocaleString()}
                  </p>

                </div>

                <a
                  href={report.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Download
                </a>

              </div>

            ))}

          </div>
        )}

      </div>

      {/* Table */}

      <div className="mt-6">

        <EventsTable events={filteredEvents} />

      </div>

    </main>
    </ProtectedRoute>
  );
}
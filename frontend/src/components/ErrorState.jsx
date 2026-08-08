"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorState({ retry }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-950">

      <div className="rounded-3xl bg-white p-10 shadow-xl dark:bg-slate-900">

        <AlertTriangle
          size={60}
          className="mx-auto text-red-500"
        />

        <h2 className="mt-6 text-center text-2xl font-bold dark:text-white">
          Unable to load dashboard
        </h2>

        <p className="mt-2 text-center text-slate-500 dark:text-slate-400">
          Please check your API connection.
        </p>

        <button
          onClick={retry}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700"
        >
          <RefreshCw size={18} />
          Retry
        </button>

      </div>

    </main>
  );
}
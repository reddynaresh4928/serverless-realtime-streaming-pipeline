"use client";

import { useSettings } from "../../context/SettingsContext";
import { useTheme } from "next-themes";
import {
  Settings,
  Moon,
  RefreshCw,
  Bell,
  Thermometer,
  Droplets,
  Save,
} from "lucide-react";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function SettingsPage() {


  const { settings, updateSettings } = useSettings();

  const { theme, setTheme } = useTheme();

  const saveSettings = () => {
  alert("Settings saved successfully.");
};

  return (
    <ProtectedRoute>
    <main className="min-h-screen bg-slate-100 p-8 dark:bg-slate-950">

      {/* Hero */}

      <div className="rounded-3xl bg-linear-to-r from-slate-700 via-slate-800 to-slate-900 p-10 text-white shadow-2xl">

        <div className="flex items-center gap-4">

          <Settings size={46} />

          <div>

            <h1 className="text-5xl font-bold">
              Settings
            </h1>

            <p className="mt-2 text-lg text-slate-300">
              Customize your dashboard preferences.
            </p>

          </div>

        </div>

      </div>

      <div className="mt-10 space-y-8">

        {/* Appearance */}

        <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

          <div className="mb-6 flex items-center gap-3">

            <Moon className="text-indigo-600" />

            <h2 className="text-2xl font-bold dark:text-white">
              Appearance
            </h2>

          </div>

          <label className="flex items-center justify-between">

            <span className="dark:text-white">
              Dark Mode
            </span>

            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => {
              updateSettings({
                darkMode: !settings.darkMode,
              });

                setTheme(
                  settings.darkMode ? "light" : "dark"
                );
              }}
            />

          </label>

        </div>

        {/* Dashboard */}

        <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

          <div className="mb-6 flex items-center gap-3">

            <RefreshCw className="text-cyan-600" />

            <h2 className="text-2xl font-bold dark:text-white">
              Dashboard
            </h2>

          </div>

          <label className="flex items-center justify-between">

            <span className="dark:text-white">
              Auto Refresh
            </span>

            <input
              type="checkbox"
              checked={settings.autoRefresh}
              onChange={() =>
                updateSettings({
                  autoRefresh: !settings.autoRefresh,
                })
              }
            />

          </label>

          <div className="mt-6">

            <label className="dark:text-white">
              Refresh Interval
            </label>

            <select
              value={settings.refreshInterval}
              onChange={(e) =>
                updateSettings({
                  refreshInterval: Number(e.target.value),
                })
              }
              className="mt-2 w-full rounded-xl border p-3 dark:bg-slate-800 dark:text-white"
            >
              <option value={5}>5 Seconds</option>
              <option value={10}>10 Seconds</option>
              <option value={30}>30 Seconds</option>
            </select>

          </div>

        </div>

        {/* Alerts */}

        <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

          <div className="mb-6 flex items-center gap-3">

            <Bell className="text-yellow-600" />

            <h2 className="text-2xl font-bold dark:text-white">
              Alerts
            </h2>

          </div>

          <label className="flex items-center justify-between">

            <span className="dark:text-white">
              Enable Notifications
            </span>

            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() =>
               updateSettings({
                  notifications:
                    !settings.notifications,
                })
              }
            />

          </label>

          <div className="mt-6">

            <label className="flex items-center gap-2 dark:text-white">

              <Thermometer size={18} />

              Temperature Threshold

            </label>

            <input
              type="number"
              value={settings.tempThreshold}
              onChange={(e) =>
                updateSettings({
                    tempThreshold: Number(e.target.value),
                  })
              }
              className="mt-2 w-full rounded-xl border p-3 dark:bg-slate-800 dark:text-white"
            />

          </div>

          <div className="mt-6">

            <label className="flex items-center gap-2 dark:text-white">

              <Droplets size={18} />

              Humidity Threshold

            </label>

            <input
              type="number"
              value={settings.humidityThreshold}
              onChange={(e) =>
                updateSettings({
                  humidityThreshold:
                    Number(e.target.value),
                })
              }
              className="mt-2 w-full rounded-xl border p-3 dark:bg-slate-800 dark:text-white"
            />

          </div>

        </div>

        {/* Save */}

        <button
          onClick={saveSettings}
          className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
        >

          <Save size={20} />

          Save Settings

        </button>

      </div>

    </main>
    </ProtectedRoute>
  );
}
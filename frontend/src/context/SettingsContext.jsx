"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    darkMode: true,
    autoRefresh: true,
    refreshInterval: 5,
    notifications: true,
    tempThreshold: 35,
    humidityThreshold: 80,
  });

  // Load settings once
  useEffect(() => {
    const saved = localStorage.getItem("dashboard-settings");

    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  // Save whenever settings change
  useEffect(() => {
    localStorage.setItem(
      "dashboard-settings",
      JSON.stringify(settings)
    );
  }, [settings]);

  const updateSettings = (newSettings) => {
    setSettings((prev) => ({
      ...prev,
      ...newSettings,
    }));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
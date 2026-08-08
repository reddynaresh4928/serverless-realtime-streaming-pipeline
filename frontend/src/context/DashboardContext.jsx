"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../../lib/api";
import { useSettings } from "./SettingsContext";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("--");

  // Get settings from SettingsContext
  const { settings } = useSettings();

  // Refresh interval (milliseconds)
  const refreshInterval =
    settings.refreshInterval * 1000;

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("/events");

      setEvents(response.data);

      setLastUpdated(
        new Date().toLocaleTimeString()
      );
    } catch (err) {
      console.error(err);
      setError("Unable to load events.");
    } finally {
      setLoading(false);
    }
  };

  // Auto Refresh
  useEffect(() => {
    fetchEvents();

    const interval = setInterval(
      fetchEvents,
      refreshInterval
    );

    return () => clearInterval(interval);
  }, [refreshInterval]);

  return (
    <DashboardContext.Provider
      value={{
        events,
        loading,
        error,
        lastUpdated,
        fetchEvents,
        refreshInterval,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}
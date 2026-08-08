"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../../lib/api";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  // ✅ New state
  const [lastUpdated, setLastUpdated] = useState("--");

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("/events");

      setEvents(response.data);

      // ✅ Update only after successful fetch
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      console.error(err);
      setError("Unable to load events.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();

    const interval = setInterval(fetchEvents, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        events,
        loading,
        error,
        lastUpdated,   // ✅ Export it
        fetchEvents,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}
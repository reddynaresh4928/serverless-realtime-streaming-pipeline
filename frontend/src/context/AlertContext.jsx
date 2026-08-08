"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useDashboard } from "./DashboardContext";

const AlertContext = createContext();

export function AlertProvider({ children }) {
  const { events } = useDashboard();

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (!events.length) return;

    const generatedAlerts = [];

    const seenDevices = new Set();

    events.forEach((event) => {
      // High Temperature
      if (Number(event.temperature) >= 35) {
        generatedAlerts.push({
          type: "critical",
          title: "High Temperature",
          message: `${event.deviceId} reached ${event.temperature}°C`,
          timestamp: event.timestamp,
        });
      }

      // High Humidity
      if (Number(event.humidity) >= 80) {
        generatedAlerts.push({
          type: "warning",
          title: "High Humidity",
          message: `${event.deviceId} humidity is ${event.humidity}%`,
          timestamp: event.timestamp,
        });
      }

      // New Device
      if (!seenDevices.has(event.deviceId)) {
        generatedAlerts.push({
          type: "info",
          title: "New Device Connected",
          message: `${event.deviceId} joined the network`,
          timestamp: event.timestamp,
        });

        seenDevices.add(event.deviceId);
      }
    });

    generatedAlerts.sort(
      (a, b) =>
        new Date(b.timestamp) -
        new Date(a.timestamp)
    );

    setAlerts(generatedAlerts);
  }, [events]);

  return (
    <AlertContext.Provider value={{ alerts }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlerts() {
  return useContext(AlertContext);
}
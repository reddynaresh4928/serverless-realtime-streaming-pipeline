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

    // Read user settings
    const settings = JSON.parse(
      localStorage.getItem("dashboard-settings")
    );

    const temperatureLimit =
      settings?.tempThreshold || 35;

    const humidityLimit =
      settings?.humidityThreshold || 80;

    const notificationsEnabled =
      settings?.notifications ?? true;

    // Notifications disabled
    if (!notificationsEnabled) {
      setAlerts([]);
      return;
    }

    const generatedAlerts = [];

    const seenDevices = new Set();

    events.forEach((event) => {

      // High Temperature
      if (
        Number(event.temperature) >=
        temperatureLimit
      ) {
        generatedAlerts.push({
          type: "critical",
          title: "High Temperature",
          message: `${event.deviceId} reached ${event.temperature}°C (Limit: ${temperatureLimit}°C)`,
          timestamp: event.timestamp,
        });
      }

      // High Humidity
      if (
        Number(event.humidity) >=
        humidityLimit
      ) {
        generatedAlerts.push({
          type: "warning",
          title: "High Humidity",
          message: `${event.deviceId} humidity is ${event.humidity}% (Limit: ${humidityLimit}%)`,
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
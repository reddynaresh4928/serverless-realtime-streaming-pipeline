"use client";

import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api
      .get("/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main style={{ padding: "30px" }}>
      <h1>IoT Events Dashboard</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Device</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.deviceId}</td>
              <td>{event.temperature}</td>
              <td>{event.humidity}</td>
              <td>{event.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
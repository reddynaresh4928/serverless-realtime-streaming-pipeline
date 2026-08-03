import Event from "../models/event.js";

export function generateEvent() {
  const deviceId = `device-${Math.floor(Math.random() * 5) + 1}`;

  const temperature = (
    Math.random() * (40 - 20) + 20
  ).toFixed(2);

  const humidity = (
    Math.random() * (90 - 40) + 40
  ).toFixed(2);

  const timestamp = new Date().toISOString();

  return new Event(
    deviceId,
    Number(temperature),
    Number(humidity),
    timestamp
  );
}
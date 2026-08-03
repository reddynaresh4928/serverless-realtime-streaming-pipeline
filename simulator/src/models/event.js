export default class Event {
  constructor(deviceId, temperature, humidity, timestamp) {
    this.deviceId = deviceId;
    this.temperature = temperature;
    this.humidity = humidity;
    this.timestamp = timestamp;
  }
}
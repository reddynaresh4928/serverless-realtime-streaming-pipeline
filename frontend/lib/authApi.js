import axios from "axios";

console.log(
  "AUTH_API_URL =",
  process.env.NEXT_PUBLIC_AUTH_API_URL
);

const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL,
});

export default authApi;
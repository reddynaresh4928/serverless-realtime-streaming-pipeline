"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import authApi from "../../../lib/authApi";
import { useAuth } from "../../context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();

  const { isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await authApi.post("/auth/register", formData);

      alert("Registration successful!");

      router.push("/login");
    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
          "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">

        <h1 className="mb-6 text-center text-3xl font-bold text-emerald-600">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-3 outline-none focus:border-emerald-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-3 outline-none focus:border-emerald-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-3 outline-none focus:border-emerald-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <span
            className="cursor-pointer font-semibold text-emerald-600 hover:underline"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>

      </div>
    </main>
  );
}
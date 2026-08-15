"use client";

import { useRouter } from "next/navigation";
import { Cpu, ShieldCheck, BarChart3, Cloud } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">

      {/* Hero Section */}

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full bg-emerald-600/20 px-4 py-2 text-sm font-semibold text-emerald-300">
          Serverless IoT Monitoring Platform
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight">
          Monitor IoT Devices
          <br />
          <span className="text-emerald-400">
            In Real Time
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-slate-300">
          A cloud-native IoT monitoring platform built with
          Next.js, AWS Lambda, API Gateway, DynamoDB, S3,
          MongoDB Atlas and real-time analytics.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button
            onClick={() => router.push("/login")}
            className="rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold transition hover:bg-emerald-700"
          >
            Login
          </button>

          <button
            onClick={() => router.push("/register")}
            className="rounded-xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-slate-900"
          >
            Register
          </button>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <h2 className="mb-14 text-center text-4xl font-bold">
          Platform Features
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl bg-slate-800 p-8 shadow-xl">
            <Cpu
              size={48}
              className="mb-5 text-emerald-400"
            />
            <h3 className="text-2xl font-bold">
              Device Monitoring
            </h3>
            <p className="mt-4 text-slate-300">
              Monitor connected IoT devices with
              real-time telemetry.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-800 p-8 shadow-xl">
            <BarChart3
              size={48}
              className="mb-5 text-blue-400"
            />
            <h3 className="text-2xl font-bold">
              Analytics
            </h3>
            <p className="mt-4 text-slate-300">
              Interactive charts and live
              performance dashboards.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-800 p-8 shadow-xl">
            <Cloud
              size={48}
              className="mb-5 text-cyan-400"
            />
            <h3 className="text-2xl font-bold">
              AWS Serverless
            </h3>
            <p className="mt-4 text-slate-300">
              Powered by Lambda, API Gateway,
              DynamoDB and S3.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-800 p-8 shadow-xl">
            <ShieldCheck
              size={48}
              className="mb-5 text-green-400"
            />
            <h3 className="text-2xl font-bold">
              Secure Login
            </h3>
            <p className="mt-4 text-slate-300">
              JWT authentication with MongoDB
              Atlas user management.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-slate-700 py-8 text-center text-slate-400">

        © 2026 Serverless IoT Monitoring Platform

      </footer>

    </main>
  );
}
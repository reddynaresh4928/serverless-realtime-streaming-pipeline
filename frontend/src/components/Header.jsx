"use client";

import {
  Activity,
  Cloud,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

export default function Header({ lastUpdated }) {
  return (
    <header className="mb-10">

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          bg-linear-to-r
          from-blue-700
          via-indigo-700
          to-cyan-600
          p-8
          text-white
          shadow-2xl
        "
      >

        {/* Background Glow */}

        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-125"></div>

        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

        {/* Animated Shine */}

        <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left Side */}

          <div>

            <div className="flex items-center gap-5">

              <div className="rounded-3xl bg-white/15 p-5 backdrop-blur-xl">

                <Cloud size={46} />

              </div>

              <div>

                <h1 className="text-5xl font-extrabold tracking-tight">
                  IoT Monitoring Dashboard
                </h1>

                <p className="mt-3 text-lg text-blue-100">
                  Real-Time Serverless IoT Monitoring Platform
                </p>

                <p className="mt-2 text-sm tracking-wide text-blue-200">
                  AWS Lambda • API Gateway • DynamoDB • CloudWatch
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="grid gap-4 md:grid-cols-3">

            {/* Status */}

            <div className="rounded-3xl border border-white/10 bg-white/15 p-5 backdrop-blur-xl transition hover:bg-white/20">

              <div className="flex items-center gap-2">

                <Activity
                  className="text-green-300"
                  size={18}
                />

                <span className="font-semibold">
                  System Status
                </span>

              </div>

              <p className="mt-3 flex items-center gap-2 text-2xl font-bold text-green-300">

                <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>

                LIVE

              </p>

            </div>

            {/* Last Update */}

            <div className="rounded-3xl border border-white/10 bg-white/15 p-5 backdrop-blur-xl transition hover:bg-white/20">

              <div className="flex items-center gap-2">

                <RefreshCw size={18} />

                <span className="font-semibold">
                  Last Updated
                </span>

              </div>

              <p className="mt-3 text-xl font-bold">
                {lastUpdated}
              </p>

            </div>

            {/* Cloud Health */}

            <div className="rounded-3xl border border-white/10 bg-white/15 p-5 backdrop-blur-xl transition hover:bg-white/20">

              <div className="flex items-center gap-2">

                <ShieldCheck
                  className="text-cyan-300"
                  size={18}
                />

                <span className="font-semibold">
                  Cloud Health
                </span>

              </div>

              <p className="mt-3 text-xl font-bold text-cyan-200">
                100%
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}
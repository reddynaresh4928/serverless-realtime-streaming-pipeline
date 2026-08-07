"use client";

import { Activity, Cloud, RefreshCw } from "lucide-react";

export default function Header({ lastUpdated }) {
  return (
    <header className="mb-8">
      <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-2xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="flex items-center gap-3">
              <Cloud size={40} />
              <div>
                <h1 className="text-4xl font-bold">
                  IoT Monitoring Dashboard
                </h1>

                <p className="mt-2 text-blue-100">
                  Real-Time Serverless IoT Monitoring Platform
                </p>

                <p className="mt-1 text-sm text-blue-200">
                  AWS Lambda • API Gateway • DynamoDB • CloudWatch
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">

            <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <Activity className="text-green-300" size={18} />
                <span className="font-semibold">System Status</span>
              </div>

              <p className="mt-2 text-green-300 font-bold">
                ● LIVE
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <RefreshCw size={18} />
                <span className="font-semibold">
                  Last Updated
                </span>
              </div>

              <p className="mt-2 font-bold">
                {lastUpdated}
              </p>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}
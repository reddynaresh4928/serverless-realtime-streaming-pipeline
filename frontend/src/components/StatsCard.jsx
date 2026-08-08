"use client";

import CountUp from "react-countup";

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  gradient,
}) {
  // Extract numeric value
  const numericValue = parseFloat(
    String(value).replace(/[^\d.-]/g, "")
  );

  // Extract unit (°C, %, etc.)
  const suffix =
    String(value).replace(/[\d.-]/g, "").trim();

  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${gradient}`}
    >
      {/* Background Circle */}

      <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-white/10" />

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-sm font-medium opacity-90">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">

            {isNaN(numericValue) ? (
              value
            ) : (
              <>
                <CountUp
                  end={numericValue}
                  duration={2}
                  decimals={
                    String(numericValue).includes(".")
                      ? 1
                      : 0
                  }
                />

                {suffix}
              </>
            )}

          </h2>

          <p className="mt-2 text-sm opacity-80">
            {subtitle}
          </p>

        </div>

        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-md">

          {icon}

        </div>

      </div>

    </div>
  );
}
"use client";

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  gradient,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${gradient}`}
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10"></div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">{title}</p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

          <p className="mt-2 text-sm opacity-80">
            {subtitle}
          </p>
        </div>

        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
          {icon}
        </div>
      </div>
    </div>
  );
}
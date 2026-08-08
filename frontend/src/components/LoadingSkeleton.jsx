"use client";

export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-8">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1,2,3,4].map((i)=>(
          <div
            key={i}
            className="h-36 rounded-3xl bg-slate-200 dark:bg-slate-800"
          />
        ))}
      </div>

      <div className="h-96 rounded-3xl bg-slate-200 dark:bg-slate-800" />

      <div className="h-96 rounded-3xl bg-slate-200 dark:bg-slate-800" />

    </div>
  );
}
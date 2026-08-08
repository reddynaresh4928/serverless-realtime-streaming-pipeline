"use client";

export default function Footer() {
  return (
    <footer className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-900">

      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">

        <div>

          <h3 className="font-bold text-slate-800 dark:text-white">
            Serverless IoT Monitoring Platform
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built using Next.js, AWS Lambda, API Gateway, DynamoDB & CloudWatch
          </p>

        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400">
          © 2026 All Rights Reserved
        </div>

      </div>

    </footer>
  );
}
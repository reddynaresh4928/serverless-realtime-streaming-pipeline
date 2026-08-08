export default function About() {
  return (
    <main className="min-h-screen bg-slate-100 p-8 dark:bg-slate-950">

      <div className="mx-auto max-w-6xl">

        <div className="rounded-3xl bg-linear-to-r from-blue-700 via-indigo-700 to-cyan-600 p-10 text-white shadow-2xl">

          <h1 className="text-5xl font-bold">
            About This Project
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-blue-100">
            A modern real-time IoT Monitoring Dashboard built using
            Next.js, React, Tailwind CSS and AWS Serverless services.
          </p>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Project Overview */}

          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

            <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-white">
              Project Overview
            </h2>

            <p className="leading-8 text-slate-600 dark:text-slate-300">
              This platform continuously monitors IoT devices and
              visualizes temperature, humidity and device activity
              in real time. It provides analytics, alerts, charts,
              reporting and cloud monitoring using a serverless
              architecture.
            </p>

          </div>

          {/* Tech Stack */}

          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

            <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-white">
              Technology Stack
            </h2>

            <ul className="space-y-3 text-slate-600 dark:text-slate-300">

              <li>• Next.js 16</li>
              <li>• React</li>
              <li>• Tailwind CSS</li>
              <li>• Context API</li>
              <li>• Recharts</li>
              <li>• Lucide Icons</li>
              <li>• Axios</li>

            </ul>

          </div>

          {/* AWS Services */}

          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

            <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-white">
              AWS Services
            </h2>

            <ul className="space-y-3 text-slate-600 dark:text-slate-300">

              <li>• AWS Lambda</li>
              <li>• API Gateway</li>
              <li>• DynamoDB</li>
              <li>• CloudWatch</li>
              <li>• Amazon Cognito (Upcoming)</li>
              <li>• API Gateway WebSocket (Upcoming)</li>

            </ul>

          </div>

          {/* Features */}

          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

            <h2 className="mb-5 text-2xl font-bold text-slate-800 dark:text-white">
              Features
            </h2>

            <ul className="space-y-3 text-slate-600 dark:text-slate-300">

              <li>✅ Live Dashboard</li>
              <li>✅ Device Monitoring</li>
              <li>✅ Analytics Charts</li>
              <li>✅ AI Insights</li>
              <li>✅ Smart Notifications</li>
              <li>✅ Export CSV / PDF</li>
              <li>✅ Dark Mode</li>
              <li>✅ Responsive Design</li>

            </ul>

          </div>

        </div>

        {/* Footer Card */}

        <div className="mt-10 rounded-3xl bg-blue-600 p-8 text-center text-white shadow-xl">

          <h2 className="text-2xl font-bold">
            Serverless IoT Monitoring Platform
          </h2>

          <p className="mt-3 text-blue-100">
            Developed as an academic cloud computing project using
            AWS Serverless Architecture.
          </p>

          <p className="mt-5 text-sm text-blue-200">
            Version 1.0 • 2026
          </p>

        </div>

      </div>

    </main>
  );
}
"use client";

export default function Footer() {
  return (
    <footer className="mt-10 rounded-3xl bg-white p-6 shadow">
      <div className="text-center">

        <h2 className="text-lg font-bold text-gray-700">
          Serverless IoT Monitoring Pipeline
        </h2>

        <p className="mt-2 text-gray-500">
          Built with Next.js • AWS Lambda • API Gateway •
          DynamoDB • Amazon SQS • CloudWatch
        </p>

        <p className="mt-4 text-sm text-gray-400">
          © 2026 • Real-Time Serverless Monitoring Dashboard
        </p>

      </div>
    </footer>
  );
}
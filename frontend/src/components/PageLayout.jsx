"use client";

import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function PageLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-slate-100">
        <TopNavbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
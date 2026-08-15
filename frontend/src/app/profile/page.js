"use client";

import ProtectedRoute from "../../components/ProtectedRoute";
import { useAuth } from "../../context/AuthContext";
import {
  User,
  Mail,
  BadgeCheck,
  KeyRound,
} from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-100 p-8 dark:bg-slate-950">

        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl dark:bg-slate-900">

          <h1 className="mb-8 text-4xl font-bold text-emerald-600">
            My Profile
          </h1>

          <div className="space-y-6">

            <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
              <User className="text-emerald-600" />
              <div>
                <p className="text-sm text-slate-500">
                  Full Name
                </p>
                <h2 className="text-xl font-bold">
                  {user?.name}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
              <Mail className="text-blue-600" />
              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>
                <h2 className="text-xl font-bold">
                  {user?.email}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
              <BadgeCheck className="text-cyan-600" />
              <div>
                <p className="text-sm text-slate-500">
                  User ID
                </p>
                <h2 className="text-lg font-bold break-all">
                  {user?.id}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
              <KeyRound className="text-green-600" />
              <div>
                <p className="text-sm text-slate-500">
                  Authentication
                </p>
                <h2 className="text-xl font-bold text-green-600">
                  Authenticated
                </h2>
              </div>
            </div>

          </div>

        </div>

      </main>
    </ProtectedRoute>
  );
}
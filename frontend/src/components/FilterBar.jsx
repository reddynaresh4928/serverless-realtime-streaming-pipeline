"use client";

import { ArrowUpDown } from "lucide-react";

export default function FilterBar({
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="relative">

      <ArrowUpDown
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <select
        value={sortOrder}
        onChange={(e) =>
          setSortOrder(e.target.value)
        }
        className="
          w-full
          appearance-none
          rounded-2xl
          border
          border-slate-200
          bg-white
          py-4
          pl-12
          pr-4
          text-slate-800
          shadow-lg
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:focus:ring-blue-900/40
        "
      >
        <option value="latest">
          Latest First
        </option>

        <option value="oldest">
          Oldest First
        </option>

      </select>

    </div>
  );
}
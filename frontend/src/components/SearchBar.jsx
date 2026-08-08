"use client";

import { Search } from "lucide-react";

export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="relative">

      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search device..."
        className="
          w-full
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
          dark:placeholder:text-slate-400
          dark:focus:ring-blue-900/40
        "
      />

    </div>
  );
}
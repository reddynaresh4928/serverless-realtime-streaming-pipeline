export default function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="🔍 Search by Device ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          px-5
          py-3
          text-gray-700
          shadow-sm
          outline-none
          transition
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-200
        "
      />
    </div>
  );
}
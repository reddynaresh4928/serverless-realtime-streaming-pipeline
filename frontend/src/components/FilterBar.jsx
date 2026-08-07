export default function FilterBar({ sortOrder, setSortOrder }) {
  return (
    <div className="flex justify-end">
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-3
          shadow-sm
          outline-none
          transition
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-200
        "
      >
        <option value="latest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
}
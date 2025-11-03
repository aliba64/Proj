interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="border-b bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-8 py-4">
          <button 
            className={`${activeFilter === "all" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-600 hover:text-gray-900"} pb-1`}
            onClick={() => onFilterChange("all")}
          >
            Рецепты
          </button>
          <button 
            className={`${activeFilter === "popular" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-600 hover:text-gray-900"} pb-1`}
            onClick={() => onFilterChange("popular")}
          >
            По популярности
          </button>
          <button 
            className={`${activeFilter.startsWith("time") ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-600 hover:text-gray-900"} pb-1`}
            onClick={() => onFilterChange(activeFilter === "time-asc" ? "time-desc" : "time-asc")}
          >
            По времени приготовления
            {activeFilter === "time-asc" && " ↑"}
            {activeFilter === "time-desc" && " ↓"}
          </button>
          <button 
            className={`${activeFilter.startsWith("difficulty") ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-600 hover:text-gray-900"} pb-1`}
            onClick={() => onFilterChange(activeFilter === "difficulty-asc" ? "difficulty-desc" : "difficulty-asc")}
          >
            По сложности
            {activeFilter === "difficulty-asc" && " ↑"}
            {activeFilter === "difficulty-desc" && " ↓"}
          </button>
        </nav>
      </div>
    </div>
  );
}

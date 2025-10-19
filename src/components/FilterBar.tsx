export function FilterBar() {
  return (
    <div className="border-b bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-8 py-4">
          <button className="text-gray-900 border-b-2 border-gray-900 pb-1">
            Рецепты
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            По популярности
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            По времени приготовления
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            По сложности
          </button>
        </nav>
      </div>
    </div>
  );
}

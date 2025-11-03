import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
  description?: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Первые блюда",
    image: "https://images.unsplash.com/photo-1698262617534-f7baa431b14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXR1bW4lMjBzb3VwJTIwcHVtcGtpbnxlbnwxfHx8fDE3NjA4NTQ4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 45,
    description: "Супы, борщи, бульоны",
  },
  {
    id: 2,
    name: "Салаты",
    image: "https://images.unsplash.com/photo-1589041611454-fd81bb39c3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBzYWxhZCUyMGZyZXNofGVufDF8fHx8MTc2MDg1NDg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 67,
    description: "Свежие и сытные салаты",
  },
  {
    id: 3,
    name: "Основные блюда",
    image: "https://images.unsplash.com/photo-1603227441582-d076c3836f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzdGV3JTIwbWVhdHxlbnwxfHx8fDE3NjA4NTQ4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 123,
    description: "Мясные и рыбные блюда",
  },
  {
    id: 4,
    name: "Гарниры",
    image: "https://images.unsplash.com/photo-1519590350802-eb212e2ea536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjB2ZWdldGFibGVzfGVufDF8fHx8MTc2MDg1NDg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 34,
    description: "Овощи, каши, рис",
  },
  {
    id: 5,
    name: "Паста",
    image: "https://images.unsplash.com/photo-1747852628136-e612ace24a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW58ZW58MXx8fHwxNzYwODAxMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 56,
    description: "Итальянская паста",
  },
  {
    id: 6,
    name: "Азиатская кухня",
    image: "https://images.unsplash.com/photo-1536540166989-ad5334cee5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZXN8ZW58MXx8fHwxNzYwNzk3NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 78,
    description: "Японская, китайская, тайская",
  },
  {
    id: 7,
    name: "Десерты",
    image: "https://images.unsplash.com/photo-1680090966824-eb9e8500bc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NjA4MDA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 89,
    description: "Торты, пирожные, мороженое",
  },
  {
    id: 8,
    name: "Завтраки",
    image: "https://images.unsplash.com/photo-1636743713732-125909a35dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwYW5jYWtlc3xlbnwxfHx8fDE3NjA4MDg5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 42,
    description: "Быстрый и вкусный завтрак",
  },
  {
    id: 9,
    name: "Выпечка",
    image: "https://images.unsplash.com/photo-1476240070072-d734bba9f6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW1wbGluZ3MlMjBwbGF0ZSUyMGZvb2R8ZW58MXx8fHwxNzYwODU0Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 61,
    description: "Пироги, булочки, хлеб",
  },
  {
    id: 10,
    name: "Напитки",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGRyaW5rfGVufDF8fHx8MTczMjM4NDY3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    count: 35,
    description: "Коктейли, смузи, напитки",
  },
  {
    id: 11,
    name: "Закуски",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXIlMjBmb29kfGVufDF8fHx8MTczMjM4NDY3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    count: 52,
    description: "Быстрые закуски и снеки",
  },
  {
    id: 12,
    name: "Вегетарианское",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwYm93bHxlbnwxfHx8fDE3MzIzODQ2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    count: 48,
    description: "Блюда без мяса",
  },
];

export function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (categoryName: string) => {
    console.log("Выбрана категория:", categoryName);
    // Здесь можно добавить логику фильтрации рецептов по категории
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4">Каталог рецептов</h1>
        <p className="text-gray-600 mb-6">
          Выберите категорию, чтобы найти идеальный рецепт
        </p>

        {/* Search */}
        <div className="max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Поиск по категориям..."
              className="pl-10 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredCategories.map((category) => (
          <Card
            key={category.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow bg-white"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="relative aspect-video bg-gray-100">
              <ImageWithFallback
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-white mb-1 text-sm">{category.name}</h3>
                <p className="text-xs text-white/90 mb-1">
                  {category.count} рецептов
                </p>
                {category.description && (
                  <p className="text-xs text-white/80">
                    {category.description}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg shadow">
          <p className="text-gray-600">
            Категории не найдены по запросу "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
}

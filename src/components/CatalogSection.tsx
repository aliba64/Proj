import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Первые блюда",
    image: "https://images.unsplash.com/photo-1698262617534-f7baa431b14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXR1bW4lMjBzb3VwJTIwcHVtcGtpbnxlbnwxfHx8fDE3NjA4NTQ4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 45,
  },
  {
    id: 2,
    name: "Салаты",
    image: "https://images.unsplash.com/photo-1589041611454-fd81bb39c3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBzYWxhZCUyMGZyZXNofGVufDF8fHx8MTc2MDg1NDg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 67,
  },
  {
    id: 3,
    name: "Основные блюда",
    image: "https://images.unsplash.com/photo-1603227441582-d076c3836f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzdGV3JTIwbWVhdHxlbnwxfHx8fDE3NjA4NTQ4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 123,
  },
  {
    id: 4,
    name: "Гарниры",
    image: "https://images.unsplash.com/photo-1519590350802-eb212e2ea536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjB2ZWdldGFibGVzfGVufDF8fHx8MTc2MDg1NDg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 34,
  },
  {
    id: 5,
    name: "Паста",
    image: "https://images.unsplash.com/photo-1747852628136-e612ace24a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW58ZW58MXx8fHwxNzYwODAxMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 56,
  },
  {
    id: 6,
    name: "Азиатская кухня",
    image: "https://images.unsplash.com/photo-1536540166989-ad5334cee5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZXN8ZW58MXx8fHwxNzYwNzk3NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 78,
  },
  {
    id: 7,
    name: "Десерты",
    image: "https://images.unsplash.com/photo-1680090966824-eb9e8500bc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NjA4MDA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 89,
  },
  {
    id: 8,
    name: "Завтраки",
    image: "https://images.unsplash.com/photo-1636743713732-125909a35dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwYW5jYWtlc3xlbnwxfHx8fDE3NjA4MDg5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 42,
  },
  {
    id: 9,
    name: "Выпечка",
    image: "https://images.unsplash.com/photo-1476240070072-d734bba9f6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW1wbGluZ3MlMjBwbGF0ZSUyMGZvb2R8ZW58MXx8fHwxNzYwODU0Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 61,
  },
];

export function CatalogSection() {
  const handleCategoryClick = (categoryName: string) => {
    console.log("Выбрана категория:", categoryName);
    // Здесь можно добавить логику фильтрации рецептов по категории
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6">Категории рецептов</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {categories.map((category) => (
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
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <h3 className="text-white mb-0.5 text-sm">{category.name}</h3>
                <p className="text-xs text-white/90">
                  {category.count} рецептов
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

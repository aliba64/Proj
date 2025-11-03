import { Card } from "./ui/card";
import { Calendar } from "lucide-react";
import { Badge } from "./ui/badge";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Новая коллекция весенних рецептов",
    date: "3 ноября 2025",
    category: "Обновления",
    excerpt:
      "Мы добавили более 50 новых рецептов весенних блюд с сезонными ингредиентами.",
  },
  {
    id: 2,
    title: "ZHEVAKA отмечает первую годовщину",
    date: "1 ноября 2025",
    category: "Новости",
    excerpt:
      "Спасибо всем нашим пользователям за этот невероятный год! Празднуем вместе.",
  },
  {
    id: 3,
    title: "Новые функции: планировщик меню",
    date: "28 октября 2025",
    category: "Функции",
    excerpt:
      "Теперь вы можете планировать меню на неделю вперед прямо на нашем сайте.",
  },
];

export function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">Новости</h1>
        <p className="text-gray-600 mb-8">
          Будьте в курсе последних обновлений и новостей ZHEVAKA
        </p>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="secondary">{item.category}</Badge>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  {item.date}
                </div>
              </div>
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.excerpt}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 text-center mt-8 bg-white">
          <p className="text-gray-600">
            Больше новостей скоро появится здесь
          </p>
        </Card>
      </div>
    </div>
  );
}

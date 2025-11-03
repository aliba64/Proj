import { Card } from "./ui/card";
import { Users, Heart, BookOpen, Award } from "lucide-react";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">О нас</h1>

        <Card className="p-8 mb-6 bg-white">
          <h2 className="mb-4">Добро пожаловать в ZHEVAKA</h2>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              ZHEVAKA — это современная платформа для любителей кулинарии, где каждый может найти вдохновение для создания вкусных блюд.
            </p>
            <p>
              Мы собрали коллекцию лучших рецептов со всего мира, чтобы сделать готовку простой и приятной для всех.
            </p>
            <p>
              Наша миссия — объединить людей через любовь к еде и помочь каждому открыть в себе талант кулинара.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6 bg-white">
            <Users className="w-10 h-10 mb-4 text-gray-700" />
            <h3 className="mb-2">Сообщество</h3>
            <p className="text-sm text-gray-600">
              Тысячи пользователей делятся своими рецептами и находят новые идеи каждый день
            </p>
          </Card>

          <Card className="p-6 bg-white">
            <BookOpen className="w-10 h-10 mb-4 text-gray-700" />
            <h3 className="mb-2">Рецепты</h3>
            <p className="text-sm text-gray-600">
              Более 1000 проверенных рецептов с подробными инструкциями и фотографиями
            </p>
          </Card>

          <Card className="p-6 bg-white">
            <Heart className="w-10 h-10 mb-4 text-gray-700" />
            <h3 className="mb-2">С любовью к деталям</h3>
            <p className="text-sm text-gray-600">
              Каждый рецепт тщательно проверен и содержит все необходимые детали для успеха
            </p>
          </Card>

          <Card className="p-6 bg-white">
            <Award className="w-10 h-10 mb-4 text-gray-700" />
            <h3 className="mb-2">Качество</h3>
            <p className="text-sm text-gray-600">
              Мы гарантируем высокое качество контента и удобство использования платформы
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

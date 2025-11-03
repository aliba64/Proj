import { User, Heart, BookOpen, Settings, LogOut } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function UserPage() {
  // Заглушка для будущих данных пользователя
  const user = {
    name: "Пользователь",
    email: "user@example.com",
    avatar: "",
    joinDate: "Январь 2025",
    recipesCount: 0,
    favoritesCount: 0,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* User Profile Header */}
        <Card className="p-8 mb-8 bg-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-2xl">
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <h2 className="mb-2">{user.name}</h2>
              <p className="text-sm text-gray-600 mb-1">{user.email}</p>
              <p className="text-xs text-gray-500">
                На сайте с {user.joinDate}
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Настройки
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Выход
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t">
            <div className="text-center">
              <div className="mb-1">{user.recipesCount}</div>
              <p className="text-sm text-gray-600">Рецептов</p>
            </div>
            <div className="text-center">
              <div className="mb-1">{user.favoritesCount}</div>
              <p className="text-sm text-gray-600">Избранное</p>
            </div>
            <div className="text-center">
              <div className="mb-1">0</div>
              <p className="text-sm text-gray-600">Комментариев</p>
            </div>
            <div className="text-center">
              <div className="mb-1">0</div>
              <p className="text-sm text-gray-600">Подписок</p>
            </div>
          </div>
        </Card>

        {/* Tabs with content */}
        <Tabs defaultValue="favorites" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="favorites">
              <Heart className="w-4 h-4 mr-2" />
              Избранное
            </TabsTrigger>
            <TabsTrigger value="myrecipes">
              <BookOpen className="w-4 h-4 mr-2" />
              Мои рецепты
            </TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="space-y-4">
            <Card className="p-8 text-center bg-white">
              <Heart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <h3 className="mb-2">Избранное пока пусто</h3>
              <p className="text-sm text-gray-600 mb-4">
                Добавляйте рецепты в избранное, чтобы быстро находить их позже
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="myrecipes" className="space-y-4">
            <Card className="p-8 text-center bg-white">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <h3 className="mb-2">У вас еще нет рецептов</h3>
              <p className="text-sm text-gray-600 mb-4">
                Создайте свой первый рецепт и поделитесь им с сообществом
              </p>
              <Button>Добавить рецепт</Button>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card className="p-8 text-center bg-white">
              <div className="text-gray-300 mb-4">
                <BookOpen className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="mb-2">История просмотров пуста</h3>
              <p className="text-sm text-gray-600">
                Здесь будут отображаться рецепты, которые вы просматривали
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

import { User, Heart, BookOpen, Settings, LogOut, Plus, History, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState, useMemo } from "react";
import { toast } from "sonner@2.0.3";
import { recipes } from "../data/recipes";
import { RecipeCard } from "./RecipeCard";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface UserPageProps {
  favoriteRecipes: Set<number>;
  onToggleFavorite: (recipeId: number) => void;
  onTagClick: (tag: string) => void;
}

export function UserPage({ favoriteRecipes, onToggleFavorite, onTagClick }: UserPageProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAddRecipeOpen, setIsAddRecipeOpen] = useState(false);
  
  // User state
  const [user, setUser] = useState({
    name: "Алексей Смирнов",
    email: "alexey.smirnov@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    joinDate: "Январь 2025",
    recipesCount: 3,
    favoritesCount: 12,
  });

  // Mock data for "My Recipes"
  const myRecipes = recipes.slice(0, 3);
  
  // Mock data for "History"
  const historyRecipes = recipes.slice(3, 10);
  
  // Get actual favorite recipes from the passed set
  const favoriteRecipesList = useMemo(() => {
    return recipes.filter(recipe => favoriteRecipes.has(recipe.id));
  }, [favoriteRecipes]);

  const handleLogout = () => {
    toast.success("Вы успешно вышли из системы");
    // In a real app, this would clear auth tokens
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Настройки сохранены");
    setIsSettingsOpen(false);
  };

  const handleAddRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Рецепт отправлен на модерацию");
    setIsAddRecipeOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* User Profile Header */}
        <Card className="p-8 mb-8 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-24 h-24 border-2 border-white shadow-md">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-2xl bg-gray-100 text-gray-500">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{user.email}</p>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-0">
                Активный кулинар
              </Badge>
              <p className="text-xs text-gray-400 mt-2">
                На сайте с {user.joinDate}
              </p>
            </div>

            <div className="flex gap-3 mt-4 md:mt-0">
              <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Настройки
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Настройки профиля</DialogTitle>
                    <DialogDescription>
                      Измените информацию о себе здесь. Нажмите сохранить, когда закончите.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSaveSettings} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Имя
                      </Label>
                      <Input id="name" defaultValue={user.name} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input id="email" defaultValue={user.email} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="bio" className="text-right">
                        О себе
                      </Label>
                      <Textarea id="bio" placeholder="Люблю готовить..." className="col-span-3" />
                    </div>
                    <Button type="submit" className="ml-auto mt-4">Сохранить изменения</Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" size="sm" onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                <LogOut className="w-4 h-4 mr-2" />
                Выход
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
            <div className="text-center p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="text-2xl font-bold text-gray-900 mb-1">{myRecipes.length}</div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Рецептов</p>
            </div>
            <div className="text-center p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="text-2xl font-bold text-gray-900 mb-1">{favoriteRecipesList.length}</div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Избранное</p>
            </div>
            <div className="text-center p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="text-2xl font-bold text-gray-900 mb-1">142</div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Лайков</p>
            </div>
            <div className="text-center p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="text-2xl font-bold text-gray-900 mb-1">28</div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Подписчиков</p>
            </div>
          </div>
        </Card>

        {/* Tabs with content */}
        <Tabs defaultValue="favorites" className="space-y-8">
          <TabsList className="w-full justify-start h-auto p-1 bg-transparent border-b rounded-none gap-8">
            <TabsTrigger 
              value="favorites"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:shadow-none px-4 py-3 text-base"
            >
              <Heart className="w-4 h-4 mr-2" />
              Избранное
            </TabsTrigger>
            <TabsTrigger 
              value="myrecipes"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:shadow-none px-4 py-3 text-base"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Мои рецепты
            </TabsTrigger>
            <TabsTrigger 
              value="history"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:shadow-none px-4 py-3 text-base"
            >
              <History className="w-4 h-4 mr-2" />
              История просмотров
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="space-y-6 animate-in fade-in-50 duration-300">
            {favoriteRecipesList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favoriteRecipesList.map(recipe => (
                  <RecipeCard 
                    key={recipe.id} 
                    {...recipe}
                    isFavorite={true}
                    onToggleFavorite={() => onToggleFavorite(recipe.id)}
                    onTagClick={onTagClick}
                  />
                ))}
              </div>
            ) : (
              <Card className="p-16 text-center bg-gray-50 border-dashed">
                <Heart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="mb-2 text-lg font-medium">Избранное пока пусто</h3>
                <p className="text-gray-500 mb-6">
                  Добавляйте рецепты в избранное, чтобы быстро находить их позже
                </p>
                <Button variant="outline" onClick={() => document.getElementById('catalog')?.scrollIntoView()}>
                  Перейти в каталог
                </Button>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="myrecipes" className="space-y-6 animate-in fade-in-50 duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Мои публикации</h3>
              <Dialog open={isAddRecipeOpen} onOpenChange={setIsAddRecipeOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Добавить рецепт
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Новый рецепт</DialogTitle>
                    <DialogDescription>
                      Поделитесь своим кулинарным шедевром с миром
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleAddRecipe} className="grid gap-6 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Название блюда</Label>
                      <Input id="title" placeholder="Например: Борщ по-домашнему" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="time">Время приготовления</Label>
                        <Input id="time" placeholder="Например: 1 ч 30 мин" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="servings">Порции</Label>
                        <Input id="servings" type="number" placeholder="4" required />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="ingredients">Ингредиенты</Label>
                      <Textarea id="ingredients" placeholder="Перечислите ингредиенты..." className="h-24" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="instructions">Способ приготовления</Label>
                      <Textarea id="instructions" placeholder="Опишите процесс приготовления по шагам..." className="h-32" required />
                    </div>
                    <Button type="submit" className="w-full">Опубликовать рецепт</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {myRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {myRecipes.map(recipe => (
                  <RecipeCard 
                    key={recipe.id} 
                    {...recipe}
                    isFavorite={favoriteRecipes.has(recipe.id)}
                    onToggleFavorite={() => onToggleFavorite(recipe.id)}
                    onTagClick={onTagClick}
                  />
                ))}
              </div>
            ) : (
              <Card className="p-16 text-center bg-gray-50 border-dashed">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="mb-2 text-lg font-medium">У вас еще нет рецептов</h3>
                <p className="text-gray-500 mb-6">
                  Создайте свой первый рецепт и поделитесь им с сообществом
                </p>
                <Button onClick={() => setIsAddRecipeOpen(true)}>Добавить рецепт</Button>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-6 animate-in fade-in-50 duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-gray-500" />
              <h3 className="text-lg font-semibold">Вы недавно смотрели</h3>
            </div>
            
            {historyRecipes.length > 0 ? (
              <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-gray-50/50 p-4">
                <div className="flex w-max space-x-4 p-1">
                  {historyRecipes.map((recipe) => (
                    <div key={recipe.id} className="w-[280px] shrink-0">
                      <RecipeCard 
                        {...recipe}
                        isFavorite={favoriteRecipes.has(recipe.id)}
                        onToggleFavorite={() => onToggleFavorite(recipe.id)}
                        onTagClick={onTagClick}
                      />
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            ) : (
              <Card className="p-16 text-center bg-white">
                <div className="text-gray-300 mb-4">
                  <History className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="mb-2">История просмотров пуста</h3>
                <p className="text-sm text-gray-600">
                  Здесь будут отображаться рецепты, которые вы просматривали
                </p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

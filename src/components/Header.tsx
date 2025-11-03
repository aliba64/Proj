import { Search, User, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type PageType = "home" | "catalog" | "seasonal" | "recipe" | "user" | "about" | "news" | "contacts" | "faq" | "support" | "feedback" | "ingredients";

interface HeaderProps {
  onNavigate: (page: PageType) => void;
  onLoginClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCategorySelect?: (category: string) => void;
}

export function Header({ onNavigate, onLoginClick, searchQuery, onSearchChange, onCategorySelect }: HeaderProps) {
  const categories = [
    "Первые блюда",
    "Салаты",
    "Основные блюда",
    "Гарниры",
    "Паста",
    "Азиатская кухня",
    "Десерты",
    "Завтраки",
    "Выпечка",
    "Напитки",
    "Закуски",
    "Вегетарианское",
  ];

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate("home")}>
            <h1 className="text-2xl">ZHEVAKA</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                  Каталог
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem onClick={() => onNavigate("catalog")}>
                  <span className="font-medium">Все категории</span>
                </DropdownMenuItem>
                <div className="border-t my-1" />
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => {
                      onNavigate("home");
                      if (onCategorySelect) {
                        setTimeout(() => onCategorySelect(category), 100);
                      }
                    }}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => onNavigate("seasonal")}
              className="text-gray-700 hover:text-gray-900"
            >
              Сезонное меню
            </button>
            <button
              onClick={() => onNavigate("ingredients")}
              className="text-gray-700 hover:text-gray-900"
            >
              Поиск по ингредиентам
            </button>
          </nav>

          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Поиск: название, категория, теги..."
                className="pl-10 bg-gray-50 border-gray-300"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          {/* User / Login */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex-shrink-0"
              onClick={() => onNavigate("user")}
            >
              <User className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="flex-shrink-0"
              onClick={onLoginClick}
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  onNavigate: (page: "home" | "catalog" | "seasonal") => void;
  onLoginClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ onNavigate, onLoginClick, searchQuery, onSearchChange }: HeaderProps) {
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
            <button
              onClick={() => onNavigate("catalog")}
              className="text-gray-700 hover:text-gray-900"
            >
              Каталог
            </button>
            <button
              onClick={() => onNavigate("seasonal")}
              className="text-gray-700 hover:text-gray-900"
            >
              Сезонное меню
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Поиск по ингредиентам
            </a>
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

          {/* Login */}
          <Button
            variant="ghost"
            className="flex-shrink-0"
            onClick={onLoginClick}
          >
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
}

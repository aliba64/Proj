import { useState, useMemo, useRef, useEffect } from "react";
import { RecipeCard } from "./RecipeCard";
import { recipes, Recipe } from "../data/recipes";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Search, Plus, Minus, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { PaginationControls } from "./PaginationControls";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Collect all unique ingredients
const allIngredients = Array.from(
  new Set(
    recipes.flatMap(recipe => 
      recipe.ingredientsList.map(ing => ing.name.toLowerCase())
    )
  )
).sort();

interface IngredientSearchPageProps {
  onRecipeClick: (recipe: Recipe) => void;
  favoriteRecipes: Set<number>;
  onToggleFavorite: (recipeId: number) => void;
  onTagClick: (tag: string) => void;
}

export function IngredientSearchPage({ onRecipeClick, favoriteRecipes, onToggleFavorite, onTagClick }: IngredientSearchPageProps) {
  const [includedIngredients, setIncludedIngredients] = useState<string[]>([]);
  const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter suggestions based on search query
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allIngredients
      .filter(ing => 
        ing.includes(query) && 
        !includedIngredients.includes(ing) && 
        !excludedIngredients.includes(ing)
      )
      .slice(0, 10);
  }, [searchQuery, includedIngredients, excludedIngredients]);

  // Filter recipes based on selected ingredients
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const recipeIngredients = recipe.ingredientsList.map(ing => ing.name.toLowerCase());
      
      // Check if recipe contains all included ingredients
      const hasAllIncluded = includedIngredients.length === 0 || 
        includedIngredients.every(ing => recipeIngredients.some(rIng => rIng.includes(ing)));
      
      // Check if recipe doesn't contain excluded ingredients
      const hasNoExcluded = excludedIngredients.length === 0 ||
        !excludedIngredients.some(ing => recipeIngredients.some(rIng => rIng.includes(ing)));
      
      return hasAllIncluded && hasNoExcluded;
    });
  }, [includedIngredients, excludedIngredients]);

  const displayRecipes = useMemo(() => {
    return filteredRecipes.slice(
      (currentPageNum - 1) * itemsPerPage, 
      currentPageNum * itemsPerPage
    );
  }, [filteredRecipes, itemsPerPage, currentPageNum]);

  const addIncludedIngredient = (ingredient: string) => {
    setIncludedIngredients(prev => [...prev, ingredient]);
    setSearchQuery("");
    setShowSuggestions(false);
    setCurrentPageNum(1);
  };

  const addExcludedIngredient = (ingredient: string) => {
    setExcludedIngredients(prev => [...prev, ingredient]);
    setSearchQuery("");
    setShowSuggestions(false);
    setCurrentPageNum(1);
  };

  const removeIncludedIngredient = (ingredient: string) => {
    setIncludedIngredients(prev => prev.filter(ing => ing !== ingredient));
  };

  const removeExcludedIngredient = (ingredient: string) => {
    setExcludedIngredients(prev => prev.filter(ing => ing !== ingredient));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-2xl font-bold">Поиск по ингредиентам</h1>
        
        {/* Search Input */}
        <div className="relative max-w-4xl mb-6" ref={searchContainerRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Введите продукт (например: картофель)..."
              className="pl-10 h-12 text-base bg-gray-50 border-gray-200 rounded-xl"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
            />
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <Card className="absolute z-10 w-full mt-2 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
              <ScrollArea className="max-h-80">
                <div className="p-2">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group transition-colors"
                    >
                      <span className="capitalize font-medium">{suggestion}</span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3 text-green-600 hover:text-green-700 hover:bg-green-50"
                          onClick={() => addIncludedIngredient(suggestion)}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Добавить
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3 text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => addExcludedIngredient(suggestion)}
                        >
                          <Minus className="w-4 h-4 mr-1" />
                          Исключить
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          )}
        </div>

        {/* Ingredients Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Included Ingredients - Green Block */}
          <div className="bg-green-50 rounded-xl p-6 min-h-[160px] border border-green-100">
            <div className="flex items-center gap-2 mb-3 text-green-800 font-medium">
              <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center">
                <Plus className="w-4 h-4 text-green-700" />
              </div>
              Что есть в холодильнике?
            </div>
            
            {includedIngredients.length === 0 ? (
              <p className="text-green-600/60 italic text-sm">
                Добавьте ингредиенты для поиска...
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {includedIngredients.map((ingredient) => (
                  <Badge
                    key={ingredient}
                    className="pl-3 pr-1 py-1.5 bg-white text-green-800 hover:bg-white/80 border border-green-200 shadow-sm text-sm"
                  >
                    <span className="capitalize">{ingredient}</span>
                    <button
                      onClick={() => removeIncludedIngredient(ingredient)}
                      className="ml-2 hover:bg-green-100 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Excluded Ingredients - Red Block */}
          <div className="bg-red-50 rounded-xl p-6 min-h-[160px] border border-red-100">
            <div className="flex items-center gap-2 mb-3 text-red-800 font-medium">
              <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center">
                <Minus className="w-4 h-4 text-red-700" />
              </div>
              Чего не должно быть?
            </div>
            
            {excludedIngredients.length === 0 ? (
              <p className="text-red-600/60 italic text-sm">
                Список исключений пуст
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {excludedIngredients.map((ingredient) => (
                  <Badge
                    key={ingredient}
                    className="pl-3 pr-1 py-1.5 bg-white text-red-800 hover:bg-white/80 border border-red-200 shadow-sm text-sm"
                  >
                    <span className="capitalize">{ingredient}</span>
                    <button
                      onClick={() => removeExcludedIngredient(ingredient)}
                      className="ml-2 hover:bg-red-100 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <p className="text-sm text-gray-600">
            Найдено рецептов: <span className="font-medium">{filteredRecipes.length}</span>
          </p>

          {(includedIngredients.length > 0 || excludedIngredients.length > 0) && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setIncludedIngredients([]);
                setExcludedIngredients([]);
                setSearchQuery("");
                setCurrentPageNum(1);
              }}
              className="ml-auto"
            >
              Сбросить все фильтры
            </Button>
          )}
        </div>
      </div>

      {/* Results Grid */}
      {displayRecipes.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                {...recipe}
                isFavorite={favoriteRecipes.has(recipe.id)}
                onToggleFavorite={() => onToggleFavorite(recipe.id)}
                onClick={() => onRecipeClick(recipe)}
                onTagClick={onTagClick}
              />
            ))}
          </div>
          
          {filteredRecipes.length > itemsPerPage && (
            <PaginationControls
              currentPage={currentPageNum}
              totalPages={Math.ceil(filteredRecipes.length / itemsPerPage)}
              itemsPerPage={itemsPerPage}
              totalItems={filteredRecipes.length}
              onPageChange={setCurrentPageNum}
              onItemsPerPageChange={(value) => {
                setItemsPerPage(value);
                setCurrentPageNum(1);
              }}
            />
          )}
        </>
      ) : (
        <Card className="p-16 text-center bg-white border-dashed">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Рецепты не найдены</h3>
          <p className="text-gray-500 max-w-xs mx-auto">
            Попробуйте изменить список ингредиентов или убрать некоторые фильтры
          </p>
        </Card>
      )}
    </div>
  );
}

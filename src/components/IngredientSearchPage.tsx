import { useState, useMemo, useRef, useEffect } from "react";
import { RecipeCard } from "./RecipeCard";
import { recipes, Recipe } from "../data/recipes";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Search, Plus, Minus, X } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

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
}

export function IngredientSearchPage({ onRecipeClick }: IngredientSearchPageProps) {
  const [includedIngredients, setIncludedIngredients] = useState<string[]>([]);
  const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
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

  const addIncludedIngredient = (ingredient: string) => {
    setIncludedIngredients(prev => [...prev, ingredient]);
    setSearchQuery("");
    setShowSuggestions(false);
  };

  const addExcludedIngredient = (ingredient: string) => {
    setExcludedIngredients(prev => [...prev, ingredient]);
    setSearchQuery("");
    setShowSuggestions(false);
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
        <h1 className="mb-4">Поиск по ингредиентам</h1>
        <p className="text-gray-600 mb-6">
          Найдите рецепты, добавив нужные ингредиенты или исключив ненужные
        </p>

        {/* Search Input */}
        <div className="relative max-w-2xl" ref={searchContainerRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Начните вводить ингредиент..."
              className="pl-10 bg-white"
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
            <Card className="absolute z-10 w-full mt-2 bg-white max-h-80 overflow-hidden">
              <ScrollArea className="h-80">
                <div className="p-2 pr-6">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion}
                      className="flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer group"
                    >
                      <span className="capitalize text-sm">{suggestion}</span>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 px-2"
                          onClick={() => addIncludedIngredient(suggestion)}
                          title="Добавить в поиск"
                        >
                          <Plus className="w-3 h-3 text-green-600" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 px-2"
                          onClick={() => addExcludedIngredient(suggestion)}
                          title="Исключить из поиска"
                        >
                          <Minus className="w-3 h-3 text-red-600" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          )}
        </div>

        {/* Selected Ingredients */}
        <div className="mt-6 space-y-4">
          {includedIngredients.length > 0 && (
            <div>
              <p className="text-sm text-gray-600 mb-2">Должны содержать:</p>
              <div className="flex flex-wrap gap-2">
                {includedIngredients.map((ingredient) => (
                  <Badge
                    key={ingredient}
                    variant="default"
                    className="pl-3 pr-1 py-1 bg-green-100 text-green-800 hover:bg-green-200"
                  >
                    <span className="capitalize">{ingredient}</span>
                    <button
                      onClick={() => removeIncludedIngredient(ingredient)}
                      className="ml-2 hover:bg-green-300 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {excludedIngredients.length > 0 && (
            <div>
              <p className="text-sm text-gray-600 mb-2">Не должны содержать:</p>
              <div className="flex flex-wrap gap-2">
                {excludedIngredients.map((ingredient) => (
                  <Badge
                    key={ingredient}
                    variant="default"
                    className="pl-3 pr-1 py-1 bg-red-100 text-red-800 hover:bg-red-200"
                  >
                    <span className="capitalize">{ingredient}</span>
                    <button
                      onClick={() => removeExcludedIngredient(ingredient)}
                      className="ml-2 hover:bg-red-300 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {(includedIngredients.length > 0 || excludedIngredients.length > 0) && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setIncludedIngredients([]);
                setExcludedIngredients([]);
                setSearchQuery("");
              }}
            >
              Сбросить все фильтры
            </Button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Найдено рецептов: <span className="font-medium">{filteredRecipes.length}</span>
        </p>
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              {...recipe}
              onClick={() => onRecipeClick(recipe)}
            />
          ))}
        </div>
      ) : (
        <Card className="p-16 text-center bg-white">
          <p className="text-gray-600 mb-2">
            Рецепты не найдены
          </p>
          <p className="text-sm text-gray-500">
            Попробуйте изменить выбранные ингредиенты
          </p>
        </Card>
      )}
    </div>
  );
}

import { useState, useMemo } from "react";
import { RecipeCard } from "./RecipeCard";
import { recipes, Recipe } from "../data/recipes";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { PaginationControls } from "./PaginationControls";
import { Snowflake, Leaf, Sun, Cloud } from "lucide-react";
import { cn } from "./ui/utils";

// Get recipes by season
const getSeasonalRecipes = (season: string) => {
  return recipes.filter(recipe => 
    recipe.tags.some(tag => tag.toLowerCase().includes(season.toLowerCase()))
  );
};

const springRecipes = getSeasonalRecipes("весна").length > 0 
  ? getSeasonalRecipes("весна")
  : recipes.filter(r => r.category === "Салаты" || r.category === "Гарниры").slice(0, 8);

const summerRecipes = getSeasonalRecipes("лето").length > 0
  ? getSeasonalRecipes("лето")
  : recipes.filter(r => r.category === "Салаты" || r.tags.includes("свежее")).slice(0, 8);

const autumnRecipes = getSeasonalRecipes("осень").length > 0
  ? getSeasonalRecipes("осень")
  : recipes.filter(r => r.category === "Первые блюда" || r.category === "Десерты").slice(0, 8);

const winterRecipes = getSeasonalRecipes("зима").length > 0
  ? getSeasonalRecipes("зима")
  : recipes.filter(r => r.category === "Основные блюда" || r.tags.includes("тушеное")).slice(0, 8);

interface SeasonalPageProps {
  onRecipeClick: (recipe: Recipe) => void;
  favoriteRecipes: Set<number>;
  onToggleFavorite: (recipeId: number) => void;
  onTagClick: (tag: string) => void;
}

export function SeasonalPage({ onRecipeClick, favoriteRecipes, onToggleFavorite, onTagClick }: SeasonalPageProps) {
  const [activeSeason, setActiveSeason] = useState("winter");
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const seasonData = {
    winter: { 
      name: "Зима", 
      recipes: winterRecipes, 
      description: "Согревающие супы, сытные рагу и ароматная выпечка. Лучшие рецепты для этого времени года.",
      icon: Snowflake,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    spring: { 
      name: "Весна", 
      recipes: springRecipes, 
      description: "Легкие салаты, свежая зелень и первые овощи. Заряжайтесь витаминами после зимы.",
      icon: Leaf,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    summer: { 
      name: "Лето", 
      recipes: summerRecipes, 
      description: "Прохладительные напитки, блюда на гриле и ягодные десерты. Наслаждайтесь солнцем и вкусом.",
      icon: Sun,
      color: "text-yellow-500",
      bg: "bg-yellow-50"
    },
    autumn: { 
      name: "Осень", 
      recipes: autumnRecipes, 
      description: "Блюда из тыквы, грибные супы и согревающие чаи. Уютные рецепты для дождливых дней.",
      icon: Cloud,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
  };

  const currentSeasonRecipes = useMemo(() => {
    const seasonKey = activeSeason as keyof typeof seasonData;
    return seasonData[seasonKey].recipes;
  }, [activeSeason]);

  const displayRecipes = useMemo(() => {
    return currentSeasonRecipes.slice(
      (currentPageNum - 1) * itemsPerPage,
      currentPageNum * itemsPerPage
    );
  }, [currentSeasonRecipes, currentPageNum, itemsPerPage]);

  const Icon = seasonData[activeSeason as keyof typeof seasonData].icon;
  const seasonInfo = seasonData[activeSeason as keyof typeof seasonData];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Season Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => { setActiveSeason("winter"); setCurrentPageNum(1); }}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeSeason === "winter"
              ? "bg-black text-white shadow-md scale-105"
              : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
          )}
        >
          Зима
        </button>
        <button
          onClick={() => { setActiveSeason("spring"); setCurrentPageNum(1); }}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeSeason === "spring"
              ? "bg-black text-white shadow-md scale-105"
              : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
          )}
        >
          Весна
        </button>
        <button
          onClick={() => { setActiveSeason("summer"); setCurrentPageNum(1); }}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeSeason === "summer"
              ? "bg-black text-white shadow-md scale-105"
              : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
          )}
        >
          Лето
        </button>
        <button
          onClick={() => { setActiveSeason("autumn"); setCurrentPageNum(1); }}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeSeason === "autumn"
              ? "bg-black text-white shadow-md scale-105"
              : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
          )}
        >
          Осень
        </button>
      </div>

      {/* Banner */}
      <div className={cn("rounded-3xl p-8 md:p-12 text-center mb-10 transition-colors duration-500", seasonInfo.bg)}>
        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Icon className={cn("w-8 h-8", seasonInfo.color)} />
        </div>
        <h2 className="text-3xl font-bold mb-4">Сезонное меню: {seasonInfo.name}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          {seasonInfo.description}
        </p>
      </div>

      {/* Recipes Grid */}
      {displayRecipes.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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

          {currentSeasonRecipes.length > itemsPerPage && (
            <PaginationControls
              currentPage={currentPageNum}
              totalPages={Math.ceil(currentSeasonRecipes.length / itemsPerPage)}
              itemsPerPage={itemsPerPage}
              totalItems={currentSeasonRecipes.length}
              onPageChange={setCurrentPageNum}
              onItemsPerPageChange={(value) => {
                setItemsPerPage(value);
                setCurrentPageNum(1);
              }}
            />
          )}
        </>
      ) : (
        <Card className="p-8 text-center bg-white">
          <p className="text-gray-600">
            Рецепты для этого сезона скоро появятся
          </p>
        </Card>
      )}
    </div>
  );
}

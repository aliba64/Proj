import { useState, useMemo } from "react";
import { RecipeCard } from "./RecipeCard";
import { recipes, Recipe } from "../data/recipes";
import { cn } from "./ui/utils";
import { Snowflake, Sun, Cloud, Leaf } from "lucide-react";

type Season = "Зима" | "Весна" | "Лето" | "Осень";

const SEASONS: Season[] = ["Зима", "Весна", "Лето", "Осень"];

const getSeasonByDate = (): Season => {
  const month = new Date().getMonth(); // 0-11
  if (month >= 2 && month <= 4) return "Весна";
  if (month >= 5 && month <= 7) return "Лето";
  if (month >= 8 && month <= 10) return "Осень";
  return "Зима";
};

const SEASON_CONFIG = {
  "Зима": {
    icon: Snowflake,
    description: "Согревающие супы, сытные рагу и ароматная выпечка. Лучшие рецепты для этого времени года.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    tags: ["зима", "сытное", "супы", "горячее", "выпечка"]
  },
  "Весна": {
    icon: Leaf,
    description: "Легкие салаты, свежая зелень и первые овощи. Заряжайтесь витаминами после зимы.",
    color: "text-green-500",
    bg: "bg-green-50",
    tags: ["весна", "легкое", "зелень", "салаты", "овощи"]
  },
  "Лето": {
    icon: Sun,
    description: "Прохладительные напитки, блюда на гриле и ягодные десерты. Наслаждайтесь солнцем и вкусом.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    tags: ["лето", "гриль", "ягоды", "напитки", "мороженое"]
  },
  "Осень": {
    icon: Cloud,
    description: "Блюда из тыквы, грибные супы и согревающие чаи. Уютные рецепты для дождливых дней.",
    color: "text-orange-500",
    bg: "bg-orange-50",
    tags: ["осень", "тыква", "грибы", "чай", "уютное"]
  }
};

interface SeasonalSectionProps {
  onRecipeClick: (recipe: Recipe) => void;
  favoriteRecipes: Set<number>;
  onToggleFavorite: (recipeId: number) => void;
  onTagClick: (tag: string) => void;
}

export function SeasonalSection({ 
  onRecipeClick, 
  favoriteRecipes, 
  onToggleFavorite,
  onTagClick
}: SeasonalSectionProps) {
  const [activeSeason, setActiveSeason] = useState<Season>(getSeasonByDate());

  const seasonData = SEASON_CONFIG[activeSeason];
  const Icon = seasonData.icon;

  // Filter recipes based on season tags
  const seasonalRecipes = useMemo(() => {
    const seasonTags = seasonData.tags;
    return recipes.filter(recipe => 
      recipe.tags.some(tag => seasonTags.includes(tag.toLowerCase()))
    ).slice(0, 4); // Show top 4 for the season
  }, [activeSeason, seasonData]);

  // Fallback if no specific seasonal recipes found, show some random ones but try to be relevant
  const displayRecipes = seasonalRecipes.length > 0 ? seasonalRecipes : recipes.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Season Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {SEASONS.map((season) => (
          <button
            key={season}
            onClick={() => setActiveSeason(season)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeSeason === season
                ? "bg-black text-white shadow-md scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            )}
          >
            {season}
          </button>
        ))}
      </div>

      {/* Banner */}
      <div className={cn("rounded-3xl p-8 md:p-12 text-center mb-10 transition-colors duration-500", seasonData.bg)}>
        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Icon className={cn("w-8 h-8", seasonData.color)} />
        </div>
        <h2 className="text-3xl font-bold mb-4">Сезонное меню: {activeSeason}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          {seasonData.description}
        </p>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
}

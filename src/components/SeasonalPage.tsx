import { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import { recipes, Recipe } from "../data/recipes";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

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
}

export function SeasonalPage({ onRecipeClick }: SeasonalPageProps) {
  const [activeSeason, setActiveSeason] = useState("winter");

  const seasonData = {
    spring: { name: "Весна", recipes: springRecipes, description: "Свежие салаты и легкие блюда" },
    summer: { name: "Лето", recipes: summerRecipes, description: "Освежающие блюда и сезонные овощи" },
    autumn: { name: "Осень", recipes: autumnRecipes, description: "Согревающие супы и выпечка" },
    winter: { name: "Зима", recipes: winterRecipes, description: "Сытные горячие блюда" },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4">Сезонное меню</h1>
        <p className="text-gray-600">
          Рецепты из свежих сезонных продуктов на каждое время года
        </p>
      </div>

      <Tabs defaultValue="winter" value={activeSeason} onValueChange={setActiveSeason} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="winter">❄️ Зима</TabsTrigger>
          <TabsTrigger value="spring">🌸 Весна</TabsTrigger>
          <TabsTrigger value="summer">☀️ Лето</TabsTrigger>
          <TabsTrigger value="autumn">🍂 Осень</TabsTrigger>
        </TabsList>

        {(Object.keys(seasonData) as Array<keyof typeof seasonData>).map((season) => (
          <TabsContent key={season} value={season} className="space-y-4">
            <Card className="p-6 bg-white">
              <h2 className="mb-2">{seasonData[season].name}</h2>
              <p className="text-gray-600 text-sm">{seasonData[season].description}</p>
            </Card>

            {seasonData[season].recipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {seasonData[season].recipes.map((recipe) => (
                  <RecipeCard 
                    key={recipe.id} 
                    {...recipe}
                    onClick={() => onRecipeClick(recipe)}
                  />
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center bg-white">
                <p className="text-gray-600">
                  Рецепты для этого сезона скоро появятся
                </p>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

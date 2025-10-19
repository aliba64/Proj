import { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import { RecipeDetailDialog } from "./RecipeDetailDialog";
import { recipes } from "../data/recipes";

// Get seasonal recipes (recipes with specific tags)
const seasonalRecipes = recipes.filter(recipe => 
  recipe.tags.some(tag => 
    ['сезонные', 'осень', 'зима', 'весна', 'лето', 'свежее'].includes(tag.toLowerCase())
  )
).slice(0, 12);

export function SeasonalSection() {
  const [selectedRecipe, setSelectedRecipe] = useState<typeof seasonalRecipes[0] | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="mb-2">Сезонное меню</h2>
        <p className="text-gray-600 text-sm">
          Рецепты из свежих сезонных продуктов
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {seasonalRecipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            {...recipe}
            onClick={() => setSelectedRecipe(recipe)}
          />
        ))}
      </div>
      
      <RecipeDetailDialog 
        open={!!selectedRecipe} 
        onOpenChange={(open) => !open && setSelectedRecipe(null)}
        recipe={selectedRecipe}
      />
    </div>
  );
}

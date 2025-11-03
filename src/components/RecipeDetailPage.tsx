import { ArrowLeft, Heart, ChefHat, Clock, Flame, Users, Share2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Recipe } from "../data/recipes";

interface RecipeDetailPageProps {
  recipe: Recipe;
  onBack: () => void;
}

export function RecipeDetailPage({ recipe, onBack }: RecipeDetailPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад к рецептам</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="mb-4">{recipe.title}</h1>
          <div className="flex gap-2 flex-wrap">
            <Badge className="text-xs">{recipe.category}</Badge>
            {recipe.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
          <ImageWithFallback
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-50">
              <Heart className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-50">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-white p-4 rounded-lg border text-center">
            <ChefHat className="w-5 h-5 mx-auto mb-2 text-gray-600" />
            <p className="text-xs text-gray-600 mb-1">Сложность</p>
            <p className="text-sm">{recipe.difficulty}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border text-center">
            <Clock className="w-5 h-5 mx-auto mb-2 text-gray-600" />
            <p className="text-xs text-gray-600 mb-1">Время</p>
            <p className="text-sm">{recipe.time}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border text-center">
            <Users className="w-5 h-5 mx-auto mb-2 text-gray-600" />
            <p className="text-xs text-gray-600 mb-1">Порций</p>
            <p className="text-sm">{recipe.servings}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border text-center">
            <Flame className="w-5 h-5 mx-auto mb-2 text-gray-600" />
            <p className="text-xs text-gray-600 mb-1">Калории</p>
            <p className="text-sm">{recipe.calories} ккал</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg border sticky top-24">
              <h2 className="mb-4 text-lg">Ингредиенты</h2>
              <ul className="space-y-3 text-sm">
                {recipe.ingredientsList.map((ingredient, index) => (
                  <li key={index} className="flex justify-between pb-2 border-b last:border-0">
                    <span>{ingredient.name}</span>
                    <span className="text-gray-600">{ingredient.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="mb-4 text-lg">Приготовление</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <p className="text-sm pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

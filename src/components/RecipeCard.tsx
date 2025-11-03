import { Heart, ChefHat, Clock, Flame, ChevronDown } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Ingredient } from "../data/recipes";

interface RecipeCardProps {
  image: string;
  title: string;
  difficulty: string;
  time: string;
  ingredients: number;
  category?: string;
  tags?: string[];
  ingredientsList?: Ingredient[];
  onClick?: () => void;
}

export function RecipeCard({
  image,
  title,
  difficulty,
  time,
  ingredients,
  category,
  tags,
  ingredientsList,
  onClick,
}: RecipeCardProps) {
  const displayTags = tags?.slice(0, 3) || ["Тег", "Тег", "Тег"];
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow bg-white cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative w-full h-0 pb-[100%] bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <button 
          className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-50"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Heart className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Tags */}
        <div className="flex gap-1.5 flex-wrap">
          {displayTags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs px-2 py-0">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-sm">{title}</h3>

        {/* Info */}
        <div className="flex items-center gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <ChefHat className="w-3.5 h-3.5" />
            <span>{difficulty}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{time}</span>
          </div>
          <Flame className="w-3.5 h-3.5" />
        </div>

        {/* Ingredients */}
        <Popover>
          <PopoverTrigger asChild>
            <button 
              className="w-full flex items-center justify-center gap-2 py-1.5 border rounded-md hover:bg-gray-50 text-xs"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span>{ingredients} ингредиентов</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="center" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-2">
              <h4 className="text-sm">Ингредиенты</h4>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {ingredientsList && ingredientsList.length > 0 ? (
                  ingredientsList.map((ingredient, index) => (
                    <div key={index} className="flex justify-between text-xs pb-1.5 border-b last:border-0">
                      <span>{ingredient.name}</span>
                      <span className="text-gray-600">{ingredient.amount}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-gray-500">Список ингредиентов недоступен</p>
                )}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </Card>
  );
}

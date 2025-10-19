import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { ChefHat, Clock, Flame, Users } from "lucide-react";
import { Button } from "./ui/button";

interface RecipeDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recipe: {
    image: string;
    title: string;
    difficulty: string;
    time: string;
    ingredients: number;
    category?: string;
    tags?: string[];
  } | null;
}

export function RecipeDetailDialog({
  open,
  onOpenChange,
  recipe,
}: RecipeDetailDialogProps) {
  if (!recipe) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{recipe.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Image */}
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Category & Tags */}
          <div className="flex gap-2 flex-wrap">
            {recipe.category && (
              <Badge className="text-xs">
                {recipe.category}
              </Badge>
            )}
            {recipe.tags?.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Info */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <ChefHat className="w-4 h-4" />
              <span>{recipe.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{recipe.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>4 порции</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4" />
              <span>450 ккал</span>
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h3 className="mb-3 text-sm">Ингредиенты ({recipe.ingredients})</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Мука пшеничная</span>
                <span className="text-gray-600">500 г</span>
              </li>
              <li className="flex justify-between">
                <span>Вода</span>
                <span className="text-gray-600">250 мл</span>
              </li>
              <li className="flex justify-between">
                <span>Яйцо</span>
                <span className="text-gray-600">1 шт</span>
              </li>
              <li className="flex justify-between">
                <span>Соль</span>
                <span className="text-gray-600">1 ч.л.</span>
              </li>
              <li className="flex justify-between">
                <span>Фарш мясной</span>
                <span className="text-gray-600">400 г</span>
              </li>
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="mb-3 text-sm">Приготовление</h3>
            <ol className="space-y-3 text-sm list-decimal list-inside">
              <li>Замесите тесто из муки, воды, яйца и соли. Дайте отдохнуть 30 минут.</li>
              <li>Приготовьте начинку, смешав фарш с мелко нарезанным луком, солью и перцем.</li>
              <li>Раскатайте тесто тонким слоем и вырежьте кружочки.</li>
              <li>Положите начинку в центр каждого кружочка и слепите края.</li>
              <li>Варите в подсоленной кипящей воде 7-10 минут до готовности.</li>
              <li>Подавайте со сметаной и свежей зеленью.</li>
            </ol>
          </div>

          {/* Action Button */}
          <Button className="w-full">Начать готовить</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

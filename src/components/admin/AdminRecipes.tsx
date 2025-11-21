import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  CheckCircle,
  XCircle,
  Eye,
  Search,
  Clock,
  FileText,
  Edit,
  Trash2,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { toast } from "sonner@2.0.3";

interface UserRecipe {
  id: number;
  title: string;
  author: string;
  category: string;
  difficulty: string;
  time: string;
  description: string;
  ingredients: string;
  instructions: string;
  date: string;
  status: "pending" | "approved" | "rejected";
  views: number;
  image?: string;
}

export function AdminRecipes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState<UserRecipe | null>(null);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [showActionDialog, setShowActionDialog] = useState(false);
  const [actionType, setActionType] = useState<
    "approve" | "reject" | "delete" | null
  >(null);

  const [recipes, setRecipes] = useState<UserRecipe[]>([
    {
      id: 1,
      title: "Хинкали по-грузински",
      author: "user_georgiev",
      category: "Основные блюда",
      difficulty: "Сложно",
      time: "2ч 30 мин",
      description: "Традиционные грузинские хинкали с мясной начинкой",
      ingredients: "Мука, вода, яйца, говядина, свинина, лук, специи",
      instructions:
        "1. Замесить тесто. 2. Приготовить начинку. 3. Слепить хинкали...",
      date: "2025-11-10 14:00",
      status: "pending",
      views: 45,
    },
    {
      id: 2,
      title: "Суши роллы домашние",
      author: "user_tanaka",
      category: "Закуски",
      difficulty: "Средне",
      time: "1ч 15 мин",
      description: "Простой рецепт приготовления суши дома",
      ingredients: "Рис, нори, рыба, авокадо, огурец",
      instructions: "1. Сварить рис. 2. Подготовить начинку. 3. Свернуть роллы...",
      date: "2025-11-10 12:30",
      status: "pending",
      views: 128,
    },
    {
      id: 3,
      title: "Чизкейк без выпечки",
      author: "user_baker_anna",
      category: "Десерты",
      difficulty: "Легко",
      time: "30 мин + 4ч",
      description: "Нежный чизкейк без использования духовки",
      ingredients: "Печенье, сливочное масло, сливочный сыр, сахар, сливки",
      instructions:
        "1. Приготовить основу. 2. Сделать крем. 3. Охладить в холодильнике...",
      date: "2025-11-10 11:00",
      status: "approved",
      views: 342,
    },
    {
      id: 4,
      title: "Плов узбекский настоящий",
      author: "user_rashidov",
      category: "Основные блюда",
      difficulty: "Средне",
      time: "2ч",
      description: "Классический узбекский плов в казане",
      ingredients: "Рис, баранина, морковь, лук, растительное масло, специи",
      instructions:
        "1. Обжарить мясо. 2. Добавить овощи. 3. Засыпать рис и томить...",
      date: "2025-11-09 16:45",
      status: "approved",
      views: 567,
    },
    {
      id: 5,
      title: "Спам рецепт - купить товары",
      author: "user_spammer",
      category: "Другое",
      difficulty: "Легко",
      time: "10 мин",
      description: "Ссылка на сайт с товарами [удалено]",
      ingredients: "Спам контент",
      instructions: "Спам ссылки...",
      date: "2025-11-09 14:20",
      status: "rejected",
      views: 12,
    },
  ]);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || recipe.status === statusFilter;

    const matchesCategory =
      categoryFilter === "all" || recipe.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleAction = (
    recipe: UserRecipe,
    action: "approve" | "reject" | "delete"
  ) => {
    setSelectedRecipe(recipe);
    setActionType(action);
    setShowActionDialog(true);
  };

  const handleView = (recipe: UserRecipe) => {
    setSelectedRecipe(recipe);
    setShowViewDialog(true);
  };

  const confirmAction = () => {
    if (!selectedRecipe || !actionType) return;

    if (actionType === "delete") {
      setRecipes((prev) => prev.filter((r) => r.id !== selectedRecipe.id));
      toast.success("Рецепт удален");
    } else {
      setRecipes((prev) =>
        prev.map((r) =>
          r.id === selectedRecipe.id
            ? {
                ...r,
                status: actionType === "approve" ? "approved" : "rejected",
              }
            : r
        )
      );
      toast.success(
        actionType === "approve" ? "Рецепт одобрен" : "Рецепт отклонен"
      );
    }

    setShowActionDialog(false);
    setSelectedRecipe(null);
    setActionType(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline">На модерации</Badge>;
      case "approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Одобрен</Badge>;
      case "rejected":
        return <Badge variant="destructive">Отклонен</Badge>;
      default:
        return null;
    }
  };

  const stats = {
    total: recipes.length,
    pending: recipes.filter((r) => r.status === "pending").length,
    approved: recipes.filter((r) => r.status === "approved").length,
    rejected: recipes.filter((r) => r.status === "rejected").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl text-gray-900">{stats.total}</p>
            <p className="text-xs text-gray-600">Всего рецептов</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
            <p className="text-2xl text-gray-900">{stats.pending}</p>
            <p className="text-xs text-gray-600">На модерации</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <p className="text-2xl text-gray-900">{stats.approved}</p>
            <p className="text-xs text-gray-600">Одобрено</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <XCircle className="w-6 h-6 mx-auto mb-2 text-red-600" />
            <p className="text-2xl text-gray-900">{stats.rejected}</p>
            <p className="text-xs text-gray-600">Отклонено</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Модерация рецептов от пользователей</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Поиск по названию, автору или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="Основные блюда">Основные блюда</SelectItem>
                <SelectItem value="Закуски">Закуски</SelectItem>
                <SelectItem value="Десерты">Десерты</SelectItem>
                <SelectItem value="Супы">Супы</SelectItem>
                <SelectItem value="Выпечка">Выпечка</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="pending">На модерации</SelectItem>
                <SelectItem value="approved">Одобренные</SelectItem>
                <SelectItem value="rejected">Отклоненные</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Recipes Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Название</TableHead>
                  <TableHead>Автор</TableHead>
                  <TableHead>Категория</TableHead>
                  <TableHead>Сложность</TableHead>
                  <TableHead>Время</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Просмотры</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRecipes.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8">
                      <p className="text-gray-500">Рецепты не найдены</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRecipes.map((recipe) => (
                    <TableRow key={recipe.id}>
                      <TableCell className="font-medium">
                        {recipe.title}
                      </TableCell>
                      <TableCell>{recipe.author}</TableCell>
                      <TableCell>{recipe.category}</TableCell>
                      <TableCell>{recipe.difficulty}</TableCell>
                      <TableCell>{recipe.time}</TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {recipe.date}
                      </TableCell>
                      <TableCell>{recipe.views}</TableCell>
                      <TableCell>{getStatusBadge(recipe.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleView(recipe)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          {recipe.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleAction(recipe, "approve")}
                                className="text-green-600 hover:text-green-700 hover:bg-green-50"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleAction(recipe, "reject")}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleAction(recipe, "delete")}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* View Recipe Dialog */}
      <Dialog open={showViewDialog} onOpenChange={setShowViewDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Просмотр рецепта</DialogTitle>
            <DialogDescription>
              Подробная информация о рецепте
            </DialogDescription>
          </DialogHeader>
          {selectedRecipe && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Название</h3>
                <p>{selectedRecipe.title}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-1">Автор</h3>
                  <p>{selectedRecipe.author}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Категория</h3>
                  <p>{selectedRecipe.category}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-1">Сложность</h3>
                  <p>{selectedRecipe.difficulty}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Время</h3>
                  <p>{selectedRecipe.time}</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-1">Описание</h3>
                <p>{selectedRecipe.description}</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Ингредиенты</h3>
                <p>{selectedRecipe.ingredients}</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Инструкции</h3>
                <p className="whitespace-pre-line">{selectedRecipe.instructions}</p>
              </div>
              <div className="flex gap-2 pt-4">
                {selectedRecipe.status === "pending" && (
                  <>
                    <Button
                      onClick={() => {
                        setShowViewDialog(false);
                        handleAction(selectedRecipe, "approve");
                      }}
                      className="gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Одобрить
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        setShowViewDialog(false);
                        handleAction(selectedRecipe, "reject");
                      }}
                      className="gap-2"
                    >
                      <XCircle className="w-4 h-4" />
                      Отклонить
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Action Confirmation Dialog */}
      <AlertDialog open={showActionDialog} onOpenChange={setShowActionDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {actionType === "approve" && "Одобрить рецепт?"}
              {actionType === "reject" && "Отклонить рецепт?"}
              {actionType === "delete" && "Удалить рецепт?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {selectedRecipe && (
                <div className="mt-2 space-y-2">
                  <p>
                    <strong>Название:</strong> {selectedRecipe.title}
                  </p>
                  <p>
                    <strong>Автор:</strong> {selectedRecipe.author}
                  </p>
                  {actionType === "delete" && (
                    <p className="text-red-600 mt-4">
                      Это действие нельзя отменить!
                    </p>
                  )}
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction onClick={confirmAction}>
              Подтвердить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

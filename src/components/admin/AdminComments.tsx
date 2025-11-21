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
  AlertTriangle,
  MessageSquare,
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
import { toast } from "sonner@2.0.3";

interface Comment {
  id: number;
  author: string;
  recipe: string;
  content: string;
  date: string;
  status: "pending" | "approved" | "rejected";
  reports: number;
  rating: number;
}

export function AdminComments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [actionType, setActionType] = useState<"approve" | "reject" | null>(
    null
  );

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "user_ivanov",
      recipe: "Пельмени домашние",
      content: "Отличный рецепт! Получились очень вкусные пельмени.",
      date: "2025-11-10 14:30",
      status: "approved",
      reports: 0,
      rating: 5,
    },
    {
      id: 2,
      author: "user_petrov",
      recipe: "Борщ классический",
      content:
        "Это полный бред! Кто так готовит борщ??? [содержит нецензурную лексику]",
      date: "2025-11-10 13:45",
      status: "pending",
      reports: 3,
      rating: 1,
    },
    {
      id: 3,
      author: "user_sidorova",
      recipe: "Салат Цезарь",
      content: "Попробовала рецепт, все понравилось. Спасибо за подсказки!",
      date: "2025-11-10 12:20",
      status: "pending",
      reports: 0,
      rating: 5,
    },
    {
      id: 4,
      author: "user_smirnov",
      recipe: "Паста Карбонара",
      content: "Спам ссылка: купите лучшие товары на [удалено]",
      date: "2025-11-10 11:15",
      status: "pending",
      reports: 5,
      rating: 1,
    },
    {
      id: 5,
      author: "user_kuznetsova",
      recipe: "Пирог с яблоками",
      content: "Идеальный рецепт для начинающих. Пирог получился воздушным.",
      date: "2025-11-10 10:30",
      status: "approved",
      reports: 0,
      rating: 5,
    },
    {
      id: 6,
      author: "user_popov",
      recipe: "Оливье",
      content: "Не понравилось совсем. Пропорции неправильные.",
      date: "2025-11-10 09:45",
      status: "rejected",
      reports: 1,
      rating: 2,
    },
  ]);

  const filteredComments = comments.filter((comment) => {
    const matchesSearch =
      comment.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comment.recipe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comment.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || comment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleAction = (comment: Comment, action: "approve" | "reject") => {
    setSelectedComment(comment);
    setActionType(action);
    setShowDialog(true);
  };

  const confirmAction = () => {
    if (!selectedComment || !actionType) return;

    setComments((prev) =>
      prev.map((c) =>
        c.id === selectedComment.id
          ? { ...c, status: actionType === "approve" ? "approved" : "rejected" }
          : c
      )
    );

    toast.success(
      actionType === "approve"
        ? "Комментарий одобрен"
        : "Комментарий отклонен"
    );

    setShowDialog(false);
    setSelectedComment(null);
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
    total: comments.length,
    pending: comments.filter((c) => c.status === "pending").length,
    approved: comments.filter((c) => c.status === "approved").length,
    rejected: comments.filter((c) => c.status === "rejected").length,
    reported: comments.filter((c) => c.reports > 0).length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <MessageSquare className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl text-gray-900">{stats.total}</p>
            <p className="text-xs text-gray-600">Всего</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
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
        <Card>
          <CardContent className="p-4 text-center">
            <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-orange-600" />
            <p className="text-2xl text-gray-900">{stats.reported}</p>
            <p className="text-xs text-gray-600">С жалобами</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Модерация комментариев</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Поиск по автору, рецепту или содержанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
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

          {/* Comments Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Автор</TableHead>
                  <TableHead>Рецепт</TableHead>
                  <TableHead>Комментарий</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Жалобы</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredComments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      <p className="text-gray-500">Комментарии не найдены</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredComments.map((comment) => (
                    <TableRow key={comment.id}>
                      <TableCell className="font-medium">
                        {comment.author}
                      </TableCell>
                      <TableCell>{comment.recipe}</TableCell>
                      <TableCell className="max-w-xs">
                        <p className="truncate" title={comment.content}>
                          {comment.content}
                        </p>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {comment.date}
                      </TableCell>
                      <TableCell>
                        {comment.reports > 0 && (
                          <Badge variant="destructive">{comment.reports}</Badge>
                        )}
                      </TableCell>
                      <TableCell>{getStatusBadge(comment.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          {comment.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleAction(comment, "approve")}
                                className="text-green-600 hover:text-green-700 hover:bg-green-50"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleAction(comment, "reject")}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          <Button size="sm" variant="ghost">
                            <Eye className="w-4 h-4" />
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

      {/* Confirmation Dialog */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {actionType === "approve"
                ? "Одобрить комментарий?"
                : "Отклонить комментарий?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {selectedComment && (
                <div className="mt-2 space-y-2">
                  <p>
                    <strong>Автор:</strong> {selectedComment.author}
                  </p>
                  <p>
                    <strong>Рецепт:</strong> {selectedComment.recipe}
                  </p>
                  <p>
                    <strong>Комментарий:</strong> {selectedComment.content}
                  </p>
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

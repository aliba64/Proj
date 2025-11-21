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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Users,
  Search,
  Shield,
  Ban,
  CheckCircle,
  Eye,
  Mail,
  Crown,
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

interface User {
  id: number;
  username: string;
  email: string;
  role: "user" | "moderator" | "admin";
  status: "active" | "banned" | "suspended";
  joinDate: string;
  recipesCount: number;
  commentsCount: number;
  favoritesCount: number;
  lastActive: string;
}

export function AdminUsers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [showActionDialog, setShowActionDialog] = useState(false);
  const [actionType, setActionType] = useState<"ban" | "unban" | "promote" | null>(null);

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      username: "admin_user",
      email: "admin@zhevaka.su",
      role: "admin",
      status: "active",
      joinDate: "2025-01-01",
      recipesCount: 150,
      commentsCount: 450,
      favoritesCount: 320,
      lastActive: "2025-11-10 15:30",
    },
    {
      id: 2,
      username: "moderator_anna",
      email: "anna@zhevaka.su",
      role: "moderator",
      status: "active",
      joinDate: "2025-02-15",
      recipesCount: 45,
      commentsCount: 890,
      favoritesCount: 120,
      lastActive: "2025-11-10 14:20",
    },
    {
      id: 3,
      username: "user_ivanov",
      email: "ivanov@example.com",
      role: "user",
      status: "active",
      joinDate: "2025-03-20",
      recipesCount: 12,
      commentsCount: 78,
      favoritesCount: 45,
      lastActive: "2025-11-10 12:00",
    },
    {
      id: 4,
      username: "user_petrov",
      email: "petrov@example.com",
      role: "user",
      status: "banned",
      joinDate: "2025-04-10",
      recipesCount: 3,
      commentsCount: 156,
      favoritesCount: 8,
      lastActive: "2025-11-08 10:30",
    },
    {
      id: 5,
      username: "user_sidorova",
      email: "sidorova@example.com",
      role: "user",
      status: "active",
      joinDate: "2025-05-05",
      recipesCount: 28,
      commentsCount: 234,
      favoritesCount: 67,
      lastActive: "2025-11-10 13:45",
    },
    {
      id: 6,
      username: "user_smirnov",
      email: "smirnov@example.com",
      role: "user",
      status: "suspended",
      joinDate: "2025-06-12",
      recipesCount: 5,
      commentsCount: 42,
      favoritesCount: 12,
      lastActive: "2025-11-09 16:20",
    },
  ]);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleAction = (user: User, action: "ban" | "unban" | "promote") => {
    setSelectedUser(user);
    setActionType(action);
    setShowActionDialog(true);
  };

  const confirmAction = () => {
    if (!selectedUser || !actionType) return;

    if (actionType === "ban") {
      setUsers(
        users.map((u) =>
          u.id === selectedUser.id ? { ...u, status: "banned" } : u
        )
      );
      toast.success("Пользователь заблокирован");
    } else if (actionType === "unban") {
      setUsers(
        users.map((u) =>
          u.id === selectedUser.id ? { ...u, status: "active" } : u
        )
      );
      toast.success("Пользователь разблокирован");
    } else if (actionType === "promote") {
      setUsers(
        users.map((u) =>
          u.id === selectedUser.id
            ? { ...u, role: u.role === "user" ? "moderator" : "user" }
            : u
        )
      );
      toast.success("Роль пользователя изменена");
    }

    setShowActionDialog(false);
    setSelectedUser(null);
    setActionType(null);
  };

  const handleView = (user: User) => {
    setSelectedUser(user);
    setShowViewDialog(true);
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
          <Crown className="w-3 h-3 mr-1" />
          Админ
        </Badge>;
      case "moderator":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
          <Shield className="w-3 h-3 mr-1" />
          Модератор
        </Badge>;
      case "user":
        return <Badge variant="outline">Пользователь</Badge>;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Активен</Badge>;
      case "banned":
        return <Badge variant="destructive">Заблокирован</Badge>;
      case "suspended":
        return <Badge variant="outline">Приостановлен</Badge>;
      default:
        return null;
    }
  };

  const stats = {
    total: users.length,
    active: users.filter((u) => u.status === "active").length,
    banned: users.filter((u) => u.status === "banned").length,
    admins: users.filter((u) => u.role === "admin").length,
    moderators: users.filter((u) => u.role === "moderator").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl text-gray-900">{stats.total}</p>
            <p className="text-xs text-gray-600">Всего</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <p className="text-2xl text-gray-900">{stats.active}</p>
            <p className="text-xs text-gray-600">Активных</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Ban className="w-6 h-6 mx-auto mb-2 text-red-600" />
            <p className="text-2xl text-gray-900">{stats.banned}</p>
            <p className="text-xs text-gray-600">Заблокировано</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Crown className="w-6 h-6 mx-auto mb-2 text-red-600" />
            <p className="text-2xl text-gray-900">{stats.admins}</p>
            <p className="text-xs text-gray-600">Админов</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Shield className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl text-gray-900">{stats.moderators}</p>
            <p className="text-xs text-gray-600">Модераторов</p>
          </CardContent>
        </Card>
      </div>

      {/* Users Management */}
      <Card>
        <CardHeader>
          <CardTitle>Управление пользователями</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Поиск по имени или email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Роль" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все роли</SelectItem>
                <SelectItem value="admin">Админы</SelectItem>
                <SelectItem value="moderator">Модераторы</SelectItem>
                <SelectItem value="user">Пользователи</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="active">Активные</SelectItem>
                <SelectItem value="banned">Заблокированные</SelectItem>
                <SelectItem value="suspended">Приостановленные</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Пользователь</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Роль</TableHead>
                  <TableHead>Рецептов</TableHead>
                  <TableHead>Комментариев</TableHead>
                  <TableHead>Дата регистрации</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8">
                      <p className="text-gray-500">Пользователи не найдены</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">
                        {user.username}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {user.email}
                      </TableCell>
                      <TableCell>{getRoleBadge(user.role)}</TableCell>
                      <TableCell>{user.recipesCount}</TableCell>
                      <TableCell>{user.commentsCount}</TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {user.joinDate}
                      </TableCell>
                      <TableCell>{getStatusBadge(user.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleView(user)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          {user.role !== "admin" && (
                            <>
                              {user.status === "banned" ? (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleAction(user, "unban")}
                                  className="text-green-600 hover:text-green-700 hover:bg-green-50"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleAction(user, "ban")}
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Ban className="w-4 h-4" />
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleAction(user, "promote")}
                                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                              >
                                <Shield className="w-4 h-4" />
                              </Button>
                            </>
                          )}
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

      {/* View User Dialog */}
      <Dialog open={showViewDialog} onOpenChange={setShowViewDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Информация о пользователе</DialogTitle>
            <DialogDescription>
              Подробные данные и статистика пользователя
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-1">Имя пользователя</h3>
                  <p>{selectedUser.username}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-sm">{selectedUser.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-1">Роль</h3>
                  {getRoleBadge(selectedUser.role)}
                </div>
                <div>
                  <h3 className="font-medium mb-1">Статус</h3>
                  {getStatusBadge(selectedUser.status)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-1">Дата регистрации</h3>
                  <p>{selectedUser.joinDate}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Последняя активность</h3>
                  <p>{selectedUser.lastActive}</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Статистика активности</h3>
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <p className="text-2xl text-gray-900">
                      {selectedUser.recipesCount}
                    </p>
                    <p className="text-xs text-gray-600">Рецептов</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-gray-900">
                      {selectedUser.commentsCount}
                    </p>
                    <p className="text-xs text-gray-600">Комментариев</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-gray-900">
                      {selectedUser.favoritesCount}
                    </p>
                    <p className="text-xs text-gray-600">Избранное</p>
                  </div>
                </div>
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
              {actionType === "ban" && "Заблокировать пользователя?"}
              {actionType === "unban" && "Разблокировать пользователя?"}
              {actionType === "promote" && "Изменить роль пользователя?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {selectedUser && (
                <div className="mt-2 space-y-2">
                  <p>
                    <strong>Пользователь:</strong> {selectedUser.username}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedUser.email}
                  </p>
                  {actionType === "promote" && (
                    <p className="mt-4">
                      Новая роль:{" "}
                      {selectedUser.role === "user" ? "Модератор" : "Пользователь"}
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

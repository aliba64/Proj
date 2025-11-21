import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Users,
  FileText,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
} from "lucide-react";

export function AdminDashboard() {
  const stats = [
    {
      title: "Всего рецептов",
      value: "847",
      change: "+23 за неделю",
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Активных пользователей",
      value: "3,542",
      change: "+185 за неделю",
      icon: Users,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Комментариев",
      value: "12,847",
      change: "+412 за неделю",
      icon: MessageSquare,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Просмотров за месяц",
      value: "127,493",
      change: "+15.3%",
      icon: Eye,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  const pendingItems = [
    {
      title: "На модерации рецептов",
      count: 15,
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "На модерации комментариев",
      count: 28,
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "Жалобы пользователей",
      count: 7,
      icon: AlertCircle,
      color: "text-red-600",
    },
    {
      title: "Завершенные задачи",
      count: 142,
      icon: CheckCircle,
      color: "text-green-600",
    },
  ];

  const recentActivity = [
    {
      action: "Новый рецепт добавлен",
      user: "user_123",
      recipe: "Борщ классический",
      time: "5 минут назад",
    },
    {
      action: "Комментарий требует модерации",
      user: "user_456",
      recipe: "Пельмени домашние",
      time: "12 минут назад",
    },
    {
      action: "Рецепт одобрен",
      user: "user_789",
      recipe: "Салат Цезарь",
      time: "25 минут назад",
    },
    {
      action: "Новая жалоба",
      user: "user_321",
      recipe: "Паста Карбонара",
      time: "1 час назад",
    },
    {
      action: "Пользователь заблокирован",
      user: "user_654",
      recipe: "-",
      time: "2 часа назад",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-xs text-green-600">{stat.change}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Items */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Задачи модерации</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm">{item.title}</span>
                </div>
                <span className="text-lg">{item.count}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Последняя активность</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-3 border-l-4 border-gray-300 bg-gray-50 rounded"
                >
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Пользователь: {activity.user}
                      {activity.recipe !== "-" && ` • ${activity.recipe}`}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Быстрые действия</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-colors text-center">
              <FileText className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <span className="text-sm">Модерация рецептов</span>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-colors text-center">
              <MessageSquare className="w-6 h-6 mx-auto mb-2 text-purple-600" />
              <span className="text-sm">Модерация комментариев</span>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-colors text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <span className="text-sm">Просмотр аналитики</span>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-colors text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-orange-600" />
              <span className="text-sm">Управление пользователями</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

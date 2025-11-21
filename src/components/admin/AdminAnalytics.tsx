import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MessageSquare,
  Heart,
  Clock,
  Calendar,
} from "lucide-react";
import { useState } from "react";

export function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState("week");

  // Mock data for charts
  const visitorsData = [
    { date: "Пн", visitors: 1250, views: 3420 },
    { date: "Вт", visitors: 1380, views: 3680 },
    { date: "Ср", visitors: 1520, views: 4120 },
    { date: "Чт", visitors: 1420, views: 3890 },
    { date: "Пт", visitors: 1680, views: 4560 },
    { date: "Сб", visitors: 2150, views: 5890 },
    { date: "Вс", visitors: 1980, views: 5320 },
  ];

  const categoriesData = [
    { name: "Основные блюда", value: 245, color: "#3b82f6" },
    { name: "Десерты", value: 189, color: "#f59e0b" },
    { name: "Закуски", value: 156, color: "#10b981" },
    { name: "Супы", value: 134, color: "#8b5cf6" },
    { name: "Выпечка", value: 123, color: "#ef4444" },
  ];

  const engagementData = [
    { metric: "Просмотры", value: 127493, change: 15.3, trend: "up" },
    { metric: "Уникальные посетители", value: 34521, change: 8.7, trend: "up" },
    { metric: "Новые рецепты", value: 847, change: 23.1, trend: "up" },
    { metric: "Комментарии", value: 12847, change: -3.2, trend: "down" },
    { metric: "Лайки", value: 45678, change: 12.4, trend: "up" },
    { metric: "Поделились", value: 8934, change: 18.9, trend: "up" },
  ];

  const topRecipes = [
    { title: "Пельмени домашние", views: 8934, likes: 1234, comments: 234 },
    { title: "Борщ классический", views: 7823, likes: 1089, comments: 198 },
    { title: "Салат Цезарь", views: 6745, likes: 945, comments: 167 },
    { title: "Паста Карбонара", views: 5678, likes: 823, comments: 145 },
    { title: "Пирог с яблоками", views: 4892, likes: 712, comments: 123 },
  ];

  const activeUsers = [
    { username: "user_ivanov", recipes: 45, comments: 234, likes: 567 },
    { username: "user_petrov", recipes: 38, comments: 189, likes: 423 },
    { username: "user_sidorova", recipes: 32, comments: 156, likes: 389 },
    { username: "user_kuznetsova", recipes: 28, comments: 145, likes: 312 },
    { username: "user_smirnov", recipes: 24, comments: 134, likes: 278 },
  ];

  const deviceData = [
    { name: "Десктоп", value: 45, color: "#3b82f6" },
    { name: "Мобильные", value: 42, color: "#10b981" },
    { name: "Планшеты", value: 13, color: "#f59e0b" },
  ];

  const trafficSources = [
    { source: "Прямые заходы", visitors: 12450, percentage: 36 },
    { source: "Поисковые системы", visitors: 9340, percentage: 27 },
    { source: "Социальные сети", visitors: 7820, percentage: 23 },
    { source: "Реферальные ссылки", visitors: 4890, percentage: 14 },
  ];

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-gray-900">Аналитика платформы</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Сегодня</SelectItem>
            <SelectItem value="week">За неделю</SelectItem>
            <SelectItem value="month">За месяц</SelectItem>
            <SelectItem value="year">За год</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {engagementData.map((item) => (
          <Card key={item.metric}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">{item.metric}</p>
                  <p className="text-3xl text-gray-900 mb-2">
                    {item.value.toLocaleString()}
                  </p>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      item.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.trend === "up" ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{Math.abs(item.change)}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <Tabs defaultValue="visitors" className="w-full">
        <TabsList>
          <TabsTrigger value="visitors">Посетители</TabsTrigger>
          <TabsTrigger value="categories">Категории</TabsTrigger>
          <TabsTrigger value="devices">Устройства</TabsTrigger>
          <TabsTrigger value="traffic">Источники трафика</TabsTrigger>
        </TabsList>

        <TabsContent value="visitors">
          <Card>
            <CardHeader>
              <CardTitle>Посетители и просмотры</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={visitorsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Посетители"
                  />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#10b981"
                    strokeWidth={2}
                    name="Просмотры"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <CardTitle>Популярность категорий</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoriesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => entry.name}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoriesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {categoriesData.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: category.color }}
                        />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-gray-900">
                        {category.value} рецептов
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices">
          <Card>
            <CardHeader>
              <CardTitle>Распределение по устройствам</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name}: ${entry.value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {deviceData.map((device) => (
                    <div
                      key={device.name}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: device.color }}
                        />
                        <span>{device.name}</span>
                      </div>
                      <span className="text-gray-900">{device.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic">
          <Card>
            <CardHeader>
              <CardTitle>Источники трафика</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={trafficSources}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="source" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="visitors"
                    fill="#3b82f6"
                    name="Посетители"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Top Content and Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Recipes */}
        <Card>
          <CardHeader>
            <CardTitle>Топ рецептов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topRecipes.map((recipe, index) => (
                <div
                  key={recipe.title}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{recipe.title}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {recipe.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {recipe.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {recipe.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Users */}
        <Card>
          <CardHeader>
            <CardTitle>Самые активные пользователи</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {activeUsers.map((user, index) => (
                <div
                  key={user.username}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{user.username}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                        <span>{user.recipes} рецептов</span>
                        <span>{user.comments} комм.</span>
                        <span>{user.likes} лайков</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

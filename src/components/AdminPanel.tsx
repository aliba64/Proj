import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { AdminDashboard } from "./admin/AdminDashboard";
import { AdminComments } from "./admin/AdminComments";
import { AdminRecipes } from "./admin/AdminRecipes";
import { AdminAdvertising } from "./admin/AdminAdvertising";
import { AdminUsers } from "./admin/AdminUsers";
import { AdminAnalytics } from "./admin/AdminAnalytics";
import { AdminSettings } from "./admin/AdminSettings";

interface AdminPanelProps {
  onBack: () => void;
}

export function AdminPanel({ onBack }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Назад на сайт
              </Button>
              <div>
                <h1 className="text-2xl text-gray-900">
                  Админ-панель ZHEVAKA
                </h1>
                <p className="text-sm text-gray-500">
                  Управление платформой рецептов
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Админ: <span className="font-medium">admin@zhevaka.su</span>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Content */}
      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 bg-white p-1">
            <TabsTrigger value="dashboard">Главная</TabsTrigger>
            <TabsTrigger value="recipes">Рецепты</TabsTrigger>
            <TabsTrigger value="comments">Комментарии</TabsTrigger>
            <TabsTrigger value="users">Пользователи</TabsTrigger>
            <TabsTrigger value="advertising">Реклама</TabsTrigger>
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <AdminDashboard />
          </TabsContent>

          <TabsContent value="recipes">
            <AdminRecipes />
          </TabsContent>

          <TabsContent value="comments">
            <AdminComments />
          </TabsContent>

          <TabsContent value="users">
            <AdminUsers />
          </TabsContent>

          <TabsContent value="advertising">
            <AdminAdvertising />
          </TabsContent>

          <TabsContent value="analytics">
            <AdminAnalytics />
          </TabsContent>

          <TabsContent value="settings">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

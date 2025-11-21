import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Settings,
  Save,
  Mail,
  Globe,
  Shield,
  Database,
  Bell,
  Palette,
} from "lucide-react";
import { toast } from "sonner@2.0.3";

export function AdminSettings() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "ZHEVAKA",
    siteDescription: "Лучшие рецепты для вашего стола",
    contactEmail: "info@zhevaka.su",
    supportEmail: "support@zhevaka.su",
    phone1: "+7 747 512 7024",
    phone2: "+7 777 952 1649",
    address: "Астана, Казахстан",
  });

  const [featureFlags, setFeatureFlags] = useState({
    allowUserRecipes: true,
    requireModeration: true,
    allowComments: true,
    allowRatings: true,
    enableAnalytics: true,
    enableAdvertising: true,
    maintenanceMode: false,
  });

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: "smtp.zhevaka.su",
    smtpPort: "587",
    smtpUser: "noreply@zhevaka.su",
    smtpPassword: "••••••••",
    enableEmailNotifications: true,
    enableNewsletters: true,
  });

  const [moderationSettings, setModerationSettings] = useState({
    autoApproveRecipes: false,
    autoApproveComments: false,
    minRecipeLength: 100,
    maxRecipeLength: 5000,
    spamFilterEnabled: true,
    bannedWords: "спам, реклама, купить",
  });

  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "ZHEVAKA - Лучшие рецепты для вашего стола",
    metaDescription:
      "Откройте для себя тысячи проверенных рецептов. Кулинарные идеи на каждый день.",
    metaKeywords: "рецепты, кулинария, еда, готовка, блюда",
    googleAnalyticsId: "UA-XXXXXXXXX-X",
    yandexMetrikaId: "XXXXXXXX",
  });

  const handleSaveGeneral = () => {
    toast.success("Общие настройки сохранены");
  };

  const handleSaveFeatures = () => {
    toast.success("Настройки функций сохранены");
  };

  const handleSaveEmail = () => {
    toast.success("Настройки почты сохранены");
  };

  const handleSaveModeration = () => {
    toast.success("Настройки модерации сохранены");
  };

  const handleSaveSeo = () => {
    toast.success("SEO настройки сохранены");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Settings className="w-6 h-6" />
        <h2 className="text-xl text-gray-900">Настройки платформы</h2>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">Общие</TabsTrigger>
          <TabsTrigger value="features">Функции</TabsTrigger>
          <TabsTrigger value="email">Почта</TabsTrigger>
          <TabsTrigger value="moderation">Модерация</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Общие настройки</CardTitle>
              <CardDescription>
                Основная информация о платформе
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Название сайта</Label>
                  <Input
                    id="siteName"
                    value={generalSettings.siteName}
                    onChange={(e) =>
                      setGeneralSettings({
                        ...generalSettings,
                        siteName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Контактный email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={generalSettings.contactEmail}
                    onChange={(e) =>
                      setGeneralSettings({
                        ...generalSettings,
                        contactEmail: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="siteDescription">Описание сайта</Label>
                <Textarea
                  id="siteDescription"
                  value={generalSettings.siteDescription}
                  onChange={(e) =>
                    setGeneralSettings({
                      ...generalSettings,
                      siteDescription: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone1">Телефон 1</Label>
                  <Input
                    id="phone1"
                    value={generalSettings.phone1}
                    onChange={(e) =>
                      setGeneralSettings({
                        ...generalSettings,
                        phone1: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone2">Телефон 2</Label>
                  <Input
                    id="phone2"
                    value={generalSettings.phone2}
                    onChange={(e) =>
                      setGeneralSettings({
                        ...generalSettings,
                        phone2: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Адрес</Label>
                <Input
                  id="address"
                  value={generalSettings.address}
                  onChange={(e) =>
                    setGeneralSettings({
                      ...generalSettings,
                      address: e.target.value,
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="supportEmail">Email поддержки</Label>
                <Input
                  id="supportEmail"
                  type="email"
                  value={generalSettings.supportEmail}
                  onChange={(e) =>
                    setGeneralSettings({
                      ...generalSettings,
                      supportEmail: e.target.value,
                    })
                  }
                />
              </div>

              <Button onClick={handleSaveGeneral} className="gap-2">
                <Save className="w-4 h-4" />
                Сохранить изменения
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Feature Flags */}
        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>Управление функциями</CardTitle>
              <CardDescription>
                Включите или отключите функции платформы
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="allowUserRecipes" className="cursor-pointer">
                    Разрешить пользовательские рецепты
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Пользователи смогут добавлять свои рецепты
                  </p>
                </div>
                <Switch
                  id="allowUserRecipes"
                  checked={featureFlags.allowUserRecipes}
                  onCheckedChange={(checked) =>
                    setFeatureFlags({
                      ...featureFlags,
                      allowUserRecipes: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="requireModeration" className="cursor-pointer">
                    Требовать модерацию
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Рецепты должны пройти модерацию перед публикацией
                  </p>
                </div>
                <Switch
                  id="requireModeration"
                  checked={featureFlags.requireModeration}
                  onCheckedChange={(checked) =>
                    setFeatureFlags({
                      ...featureFlags,
                      requireModeration: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="allowComments" className="cursor-pointer">
                    Разрешить комментарии
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Пользователи могут оставлять комментарии к рецептам
                  </p>
                </div>
                <Switch
                  id="allowComments"
                  checked={featureFlags.allowComments}
                  onCheckedChange={(checked) =>
                    setFeatureFlags({ ...featureFlags, allowComments: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="allowRatings" className="cursor-pointer">
                    Разрешить оценки
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Пользователи могут оценивать рецепты
                  </p>
                </div>
                <Switch
                  id="allowRatings"
                  checked={featureFlags.allowRatings}
                  onCheckedChange={(checked) =>
                    setFeatureFlags({ ...featureFlags, allowRatings: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="enableAnalytics" className="cursor-pointer">
                    Включить аналитику
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Отслеживать статистику и аналитику платформы
                  </p>
                </div>
                <Switch
                  id="enableAnalytics"
                  checked={featureFlags.enableAnalytics}
                  onCheckedChange={(checked) =>
                    setFeatureFlags({
                      ...featureFlags,
                      enableAnalytics: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="enableAdvertising" className="cursor-pointer">
                    Включить рекламу
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Показывать рекламные блоки на сайте
                  </p>
                </div>
                <Switch
                  id="enableAdvertising"
                  checked={featureFlags.enableAdvertising}
                  onCheckedChange={(checked) =>
                    setFeatureFlags({
                      ...featureFlags,
                      enableAdvertising: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex-1">
                  <Label
                    htmlFor="maintenanceMode"
                    className="cursor-pointer text-red-900"
                  >
                    Режим обслуживания
                  </Label>
                  <p className="text-sm text-red-600 mt-1">
                    Сайт будет недоступен для обычных пользователей
                  </p>
                </div>
                <Switch
                  id="maintenanceMode"
                  checked={featureFlags.maintenanceMode}
                  onCheckedChange={(checked) =>
                    setFeatureFlags({
                      ...featureFlags,
                      maintenanceMode: checked,
                    })
                  }
                />
              </div>

              <Button onClick={handleSaveFeatures} className="gap-2">
                <Save className="w-4 h-4" />
                Сохранить изменения
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Настройки почты</CardTitle>
              <CardDescription>
                Конфигурация SMTP и email уведомлений
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtpHost">SMTP Хост</Label>
                  <Input
                    id="smtpHost"
                    value={emailSettings.smtpHost}
                    onChange={(e) =>
                      setEmailSettings({
                        ...emailSettings,
                        smtpHost: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPort">SMTP Порт</Label>
                  <Input
                    id="smtpPort"
                    value={emailSettings.smtpPort}
                    onChange={(e) =>
                      setEmailSettings({
                        ...emailSettings,
                        smtpPort: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtpUser">SMTP Пользователь</Label>
                  <Input
                    id="smtpUser"
                    value={emailSettings.smtpUser}
                    onChange={(e) =>
                      setEmailSettings({
                        ...emailSettings,
                        smtpUser: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPassword">SMTP Пароль</Label>
                  <Input
                    id="smtpPassword"
                    type="password"
                    value={emailSettings.smtpPassword}
                    onChange={(e) =>
                      setEmailSettings({
                        ...emailSettings,
                        smtpPassword: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label
                    htmlFor="enableEmailNotifications"
                    className="cursor-pointer"
                  >
                    Email уведомления
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Отправлять уведомления пользователям
                  </p>
                </div>
                <Switch
                  id="enableEmailNotifications"
                  checked={emailSettings.enableEmailNotifications}
                  onCheckedChange={(checked) =>
                    setEmailSettings({
                      ...emailSettings,
                      enableEmailNotifications: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="enableNewsletters" className="cursor-pointer">
                    Рассылка новостей
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Отправлять новостные рассылки подписчикам
                  </p>
                </div>
                <Switch
                  id="enableNewsletters"
                  checked={emailSettings.enableNewsletters}
                  onCheckedChange={(checked) =>
                    setEmailSettings({
                      ...emailSettings,
                      enableNewsletters: checked,
                    })
                  }
                />
              </div>

              <Button onClick={handleSaveEmail} className="gap-2">
                <Save className="w-4 h-4" />
                Сохранить изменения
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Moderation Settings */}
        <TabsContent value="moderation">
          <Card>
            <CardHeader>
              <CardTitle>Настройки модерации</CardTitle>
              <CardDescription>
                Управление контентом и автоматической модерацией
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label
                    htmlFor="autoApproveRecipes"
                    className="cursor-pointer"
                  >
                    Автоматическое одобрение рецепт��в
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Публиковать рецепты без модерации (не рекомендуется)
                  </p>
                </div>
                <Switch
                  id="autoApproveRecipes"
                  checked={moderationSettings.autoApproveRecipes}
                  onCheckedChange={(checked) =>
                    setModerationSettings({
                      ...moderationSettings,
                      autoApproveRecipes: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label
                    htmlFor="autoApproveComments"
                    className="cursor-pointer"
                  >
                    Автоматическое одобрение комментариев
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Публиковать комментарии без модерации
                  </p>
                </div>
                <Switch
                  id="autoApproveComments"
                  checked={moderationSettings.autoApproveComments}
                  onCheckedChange={(checked) =>
                    setModerationSettings({
                      ...moderationSettings,
                      autoApproveComments: checked,
                    })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="minRecipeLength">
                    Минимальная длина рецепта
                  </Label>
                  <Input
                    id="minRecipeLength"
                    type="number"
                    value={moderationSettings.minRecipeLength}
                    onChange={(e) =>
                      setModerationSettings({
                        ...moderationSettings,
                        minRecipeLength: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxRecipeLength">
                    Максимальная длина рецепта
                  </Label>
                  <Input
                    id="maxRecipeLength"
                    type="number"
                    value={moderationSettings.maxRecipeLength}
                    onChange={(e) =>
                      setModerationSettings({
                        ...moderationSettings,
                        maxRecipeLength: Number(e.target.value),
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <Label htmlFor="spamFilterEnabled" className="cursor-pointer">
                    Спам-фильтр
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Автоматически блокировать спам-контент
                  </p>
                </div>
                <Switch
                  id="spamFilterEnabled"
                  checked={moderationSettings.spamFilterEnabled}
                  onCheckedChange={(checked) =>
                    setModerationSettings({
                      ...moderationSettings,
                      spamFilterEnabled: checked,
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bannedWords">Запрещенные слова</Label>
                <Textarea
                  id="bannedWords"
                  value={moderationSettings.bannedWords}
                  onChange={(e) =>
                    setModerationSettings({
                      ...moderationSettings,
                      bannedWords: e.target.value,
                    })
                  }
                  rows={3}
                  placeholder="Введите слова через запятую"
                />
              </div>

              <Button onClick={handleSaveModeration} className="gap-2">
                <Save className="w-4 h-4" />
                Сохранить изменения
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SEO Settings */}
        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO настройки</CardTitle>
              <CardDescription>
                Оптимизация для поисковых систем
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={seoSettings.metaTitle}
                  onChange={(e) =>
                    setSeoSettings({
                      ...seoSettings,
                      metaTitle: e.target.value,
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={seoSettings.metaDescription}
                  onChange={(e) =>
                    setSeoSettings({
                      ...seoSettings,
                      metaDescription: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaKeywords">Meta Keywords</Label>
                <Input
                  id="metaKeywords"
                  value={seoSettings.metaKeywords}
                  onChange={(e) =>
                    setSeoSettings({
                      ...seoSettings,
                      metaKeywords: e.target.value,
                    })
                  }
                  placeholder="Ключевые слова через запятую"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="googleAnalyticsId">
                    Google Analytics ID
                  </Label>
                  <Input
                    id="googleAnalyticsId"
                    value={seoSettings.googleAnalyticsId}
                    onChange={(e) =>
                      setSeoSettings({
                        ...seoSettings,
                        googleAnalyticsId: e.target.value,
                      })
                    }
                    placeholder="UA-XXXXXXXXX-X"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yandexMetrikaId">Яндекс.Метрика ID</Label>
                  <Input
                    id="yandexMetrikaId"
                    value={seoSettings.yandexMetrikaId}
                    onChange={(e) =>
                      setSeoSettings({
                        ...seoSettings,
                        yandexMetrikaId: e.target.value,
                      })
                    }
                    placeholder="XXXXXXXX"
                  />
                </div>
              </div>

              <Button onClick={handleSaveSeo} className="gap-2">
                <Save className="w-4 h-4" />
                Сохранить изменения
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

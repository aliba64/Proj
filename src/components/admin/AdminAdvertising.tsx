import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  DollarSign,
  MousePointerClick,
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface Advertisement {
  id: number;
  title: string;
  company: string;
  type: "banner" | "sidebar" | "inline" | "popup";
  position: string;
  clicks: number;
  impressions: number;
  ctr: number;
  revenue: number;
  startDate: string;
  endDate: string;
  status: "active" | "paused" | "ended";
  imageUrl?: string;
  linkUrl: string;
  budget: number;
}

export function AdminAdvertising() {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedAd, setSelectedAd] = useState<Advertisement | null>(null);
  const [statusFilter, setStatusFilter] = useState("all");

  const [ads, setAds] = useState<Advertisement[]>([
    {
      id: 1,
      title: "Баннер - Кухонная техника",
      company: "TechnoKitchen KZ",
      type: "banner",
      position: "header",
      clicks: 1234,
      impressions: 45678,
      ctr: 2.7,
      revenue: 123450,
      startDate: "2025-11-01",
      endDate: "2025-11-30",
      status: "active",
      linkUrl: "https://example.com/kitchen",
      budget: 200000,
    },
    {
      id: 2,
      title: "Боковая реклама - Доставка продуктов",
      company: "FastFood Delivery",
      type: "sidebar",
      position: "right-sidebar",
      clicks: 892,
      impressions: 32145,
      ctr: 2.8,
      revenue: 89200,
      startDate: "2025-11-05",
      endDate: "2025-12-05",
      status: "active",
      linkUrl: "https://example.com/delivery",
      budget: 150000,
    },
    {
      id: 3,
      title: "Встроенная реклама - Специи",
      company: "Spices World",
      type: "inline",
      position: "recipe-list",
      clicks: 456,
      impressions: 18234,
      ctr: 2.5,
      revenue: 45600,
      startDate: "2025-10-15",
      endDate: "2025-11-15",
      status: "ended",
      linkUrl: "https://example.com/spices",
      budget: 80000,
    },
    {
      id: 4,
      title: "Всплывающая реклама - Премиум подписка",
      company: "ZHEVAKA Premium",
      type: "popup",
      position: "center",
      clicks: 2341,
      impressions: 67890,
      ctr: 3.4,
      revenue: 234100,
      startDate: "2025-11-01",
      endDate: "2025-12-31",
      status: "active",
      linkUrl: "/premium",
      budget: 300000,
    },
    {
      id: 5,
      title: "Баннер - Кулинарные курсы",
      company: "Chef Academy",
      type: "banner",
      position: "footer",
      clicks: 567,
      impressions: 23456,
      ctr: 2.4,
      revenue: 56700,
      startDate: "2025-11-10",
      endDate: "2025-12-10",
      status: "paused",
      linkUrl: "https://example.com/courses",
      budget: 100000,
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    type: "banner" as "banner" | "sidebar" | "inline" | "popup",
    position: "",
    linkUrl: "",
    startDate: "",
    endDate: "",
    budget: 0,
  });

  const filteredAds = ads.filter(
    (ad) => statusFilter === "all" || ad.status === statusFilter
  );

  const handleCreate = () => {
    const newAd: Advertisement = {
      id: Math.max(...ads.map((a) => a.id), 0) + 1,
      ...formData,
      clicks: 0,
      impressions: 0,
      ctr: 0,
      revenue: 0,
      status: "active",
    };

    setAds([...ads, newAd]);
    toast.success("Реклама создана");
    setShowCreateDialog(false);
    resetForm();
  };

  const handleEdit = (ad: Advertisement) => {
    setSelectedAd(ad);
    setFormData({
      title: ad.title,
      company: ad.company,
      type: ad.type,
      position: ad.position,
      linkUrl: ad.linkUrl,
      startDate: ad.startDate,
      endDate: ad.endDate,
      budget: ad.budget,
    });
    setShowEditDialog(true);
  };

  const handleUpdate = () => {
    if (!selectedAd) return;

    setAds(
      ads.map((ad) =>
        ad.id === selectedAd.id
          ? {
              ...ad,
              ...formData,
            }
          : ad
      )
    );

    toast.success("Реклама обновлена");
    setShowEditDialog(false);
    setSelectedAd(null);
    resetForm();
  };

  const handleDelete = (id: number) => {
    setAds(ads.filter((ad) => ad.id !== id));
    toast.success("Реклама удалена");
  };

  const toggleStatus = (id: number) => {
    setAds(
      ads.map((ad) =>
        ad.id === id
          ? {
              ...ad,
              status:
                ad.status === "active"
                  ? "paused"
                  : ad.status === "paused"
                  ? "active"
                  : "ended",
            }
          : ad
      )
    );
  };

  const resetForm = () => {
    setFormData({
      title: "",
      company: "",
      type: "banner",
      position: "",
      linkUrl: "",
      startDate: "",
      endDate: "",
      budget: 0,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Активна</Badge>;
      case "paused":
        return <Badge variant="outline">Приостановлена</Badge>;
      case "ended":
        return <Badge variant="destructive">Завершена</Badge>;
      default:
        return null;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      banner: "bg-blue-100 text-blue-800",
      sidebar: "bg-purple-100 text-purple-800",
      inline: "bg-orange-100 text-orange-800",
      popup: "bg-pink-100 text-pink-800",
    };

    const labels: Record<string, string> = {
      banner: "Баннер",
      sidebar: "Боковая",
      inline: "Встроенная",
      popup: "Всплывающая",
    };

    return (
      <Badge className={`${colors[type]} hover:${colors[type]}`}>
        {labels[type]}
      </Badge>
    );
  };

  const totalStats = {
    totalRevenue: ads.reduce((sum, ad) => sum + ad.revenue, 0),
    totalClicks: ads.reduce((sum, ad) => sum + ad.clicks, 0),
    totalImpressions: ads.reduce((sum, ad) => sum + ad.impressions, 0),
    avgCtr:
      ads.reduce((sum, ad) => sum + ad.ctr, 0) / ads.length || 0,
    activeAds: ads.filter((ad) => ad.status === "active").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <p className="text-2xl text-gray-900">
              {totalStats.totalRevenue.toLocaleString()} ₸
            </p>
            <p className="text-xs text-gray-600">Общий доход</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <MousePointerClick className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl text-gray-900">
              {totalStats.totalClicks.toLocaleString()}
            </p>
            <p className="text-xs text-gray-600">Всего кликов</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Eye className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl text-gray-900">
              {totalStats.totalImpressions.toLocaleString()}
            </p>
            <p className="text-xs text-gray-600">Показов</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-orange-600" />
            <p className="text-2xl text-gray-900">
              {totalStats.avgCtr.toFixed(1)}%
            </p>
            <p className="text-xs text-gray-600">Средний CTR</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <p className="text-2xl text-gray-900">{totalStats.activeAds}</p>
            <p className="text-xs text-gray-600">Активных</p>
          </CardContent>
        </Card>
      </div>

      {/* Ads Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Управление рекламой</CardTitle>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Статус" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все статусы</SelectItem>
                  <SelectItem value="active">Активные</SelectItem>
                  <SelectItem value="paused">Приостановленные</SelectItem>
                  <SelectItem value="ended">Завершенные</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={() => setShowCreateDialog(true)} className="gap-2">
                <Plus className="w-4 h-4" />
                Создать рекламу
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Название</TableHead>
                  <TableHead>Компания</TableHead>
                  <TableHead>Тип</TableHead>
                  <TableHead>Клики</TableHead>
                  <TableHead>Показы</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>Доход</TableHead>
                  <TableHead>Период</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAds.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={10} className="text-center py-8">
                      <p className="text-gray-500">Реклама не найдена</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredAds.map((ad) => (
                    <TableRow key={ad.id}>
                      <TableCell className="font-medium">{ad.title}</TableCell>
                      <TableCell>{ad.company}</TableCell>
                      <TableCell>{getTypeBadge(ad.type)}</TableCell>
                      <TableCell>{ad.clicks.toLocaleString()}</TableCell>
                      <TableCell>{ad.impressions.toLocaleString()}</TableCell>
                      <TableCell>{ad.ctr.toFixed(1)}%</TableCell>
                      <TableCell>{ad.revenue.toLocaleString()} ₸</TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {ad.startDate} - {ad.endDate}
                      </TableCell>
                      <TableCell>{getStatusBadge(ad.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(ad)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Switch
                            checked={ad.status === "active"}
                            onCheckedChange={() => toggleStatus(ad.id)}
                            disabled={ad.status === "ended"}
                          />
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(ad.id)}
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

      {/* Create Dialog */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Создать рекламу</DialogTitle>
            <DialogDescription>
              Заполните информацию о новой рекламной кампании
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Название</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Например: Баннер - Кухонная техника"
              />
            </div>
            <div>
              <Label htmlFor="company">Компания</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Название компании"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Тип рекламы</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value: any) =>
                    setFormData({ ...formData, type: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="banner">Баннер</SelectItem>
                    <SelectItem value="sidebar">Боковая</SelectItem>
                    <SelectItem value="inline">Встроенная</SelectItem>
                    <SelectItem value="popup">Всплывающая</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="position">Позиция</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  placeholder="header, sidebar, etc."
                />
              </div>
            </div>
            <div>
              <Label htmlFor="linkUrl">URL ссылки</Label>
              <Input
                id="linkUrl"
                value={formData.linkUrl}
                onChange={(e) =>
                  setFormData({ ...formData, linkUrl: e.target.value })
                }
                placeholder="https://example.com"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Дата начала</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="endDate">Дата окончания</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <Label htmlFor="budget">Бюджет (₸)</Label>
              <Input
                id="budget"
                type="number"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: Number(e.target.value) })
                }
                placeholder="100000"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
              Отмена
            </Button>
            <Button onClick={handleCreate}>Создать</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Редактировать рекламу</DialogTitle>
            <DialogDescription>
              Измените информацию о рекламной кампании
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-title">Название</Label>
              <Input
                id="edit-title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="edit-company">Компания</Label>
              <Input
                id="edit-company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit-type">Тип рекламы</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value: any) =>
                    setFormData({ ...formData, type: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="banner">Баннер</SelectItem>
                    <SelectItem value="sidebar">Боковая</SelectItem>
                    <SelectItem value="inline">Встроенная</SelectItem>
                    <SelectItem value="popup">Всплывающая</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit-position">Позиция</Label>
                <Input
                  id="edit-position"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <Label htmlFor="edit-linkUrl">URL ссылки</Label>
              <Input
                id="edit-linkUrl"
                value={formData.linkUrl}
                onChange={(e) =>
                  setFormData({ ...formData, linkUrl: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit-startDate">Дата начала</Label>
                <Input
                  id="edit-startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="edit-endDate">Дата окончания</Label>
                <Input
                  id="edit-endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <Label htmlFor="edit-budget">Бюджет (₸)</Label>
              <Input
                id="edit-budget"
                type="number"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: Number(e.target.value) })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowEditDialog(false);
                setSelectedAd(null);
                resetForm();
              }}
            >
              Отмена
            </Button>
            <Button onClick={handleUpdate}>Сохранить</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { Send } from "lucide-react";

export function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправка формы:", formData);
    // Здесь будет логика отправки формы
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6">Обратная связь</h1>
        <p className="text-gray-600 mb-8">
          Мы ценим ваше мнение и всегда рады получить обратную связь. Заполните
          форму ниже, и мы обязательно ответим вам.
        </p>

        <Card className="p-8 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  placeholder="Иван Иванов"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Тема обращения *</Label>
              <Select
                value={formData.subject}
                onValueChange={(value) =>
                  setFormData({ ...formData, subject: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тему" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="suggestion">Предложение</SelectItem>
                  <SelectItem value="bug">Сообщение об ошибке</SelectItem>
                  <SelectItem value="question">Вопрос</SelectItem>
                  <SelectItem value="recipe">Связанное с рецептами</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение *</Label>
              <Textarea
                id="message"
                placeholder="Расскажите нам подробнее..."
                rows={6}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="text-xs text-gray-500">
              * Обязательные поля для заполнения
            </div>

            <Button type="submit" className="w-full md:w-auto">
              <Send className="w-4 h-4 mr-2" />
              Отправить сообщение
            </Button>
          </form>
        </Card>

        <Card className="p-6 mt-6 bg-gray-50 border-gray-200">
          <h3 className="mb-2">Другие способы связи</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:info@zhevaka.su"
                className="text-gray-900 hover:underline"
              >
                info@zhevaka.su
              </a>
            </p>
            <p>
              Телефон:{" "}
              <a
                href="tel:+77475127024"
                className="text-gray-900 hover:underline"
              >
                +7 (747) 512 7024
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

import { Card } from "./ui/card";
import { HelpCircle, MessageSquare, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">Поддержка</h1>
        <p className="text-gray-600 mb-8">
          Мы всегда готовы помочь вам решить любые вопросы
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer">
            <HelpCircle className="w-10 h-10 mb-4 text-gray-700" />
            <h3 className="mb-2">FAQ</h3>
            <p className="text-sm text-gray-600 mb-4">
              Ответы на часто задаваемые вопросы
            </p>
            <Button variant="outline" size="sm">
              Перейти к FAQ
            </Button>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer">
            <MessageSquare className="w-10 h-10 mb-4 text-gray-700" />
            <h3 className="mb-2">Обратная связь</h3>
            <p className="text-sm text-gray-600 mb-4">
              Отправьте нам сообщение через форму
            </p>
            <Button variant="outline" size="sm">
              Написать нам
            </Button>
          </Card>

          <Card className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer">
            <Mail className="w-10 h-10 mb-4 text-gray-700" />
            <h3 className="mb-2">Email поддержка</h3>
            <p className="text-sm text-gray-600 mb-4">
              Напишите на support@zhevaka.su
            </p>
            <Button variant="outline" size="sm">
              Открыть почту
            </Button>
          </Card>
        </div>

        <Card className="p-8 bg-white">
          <h2 className="mb-4">Время работы поддержки</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <p className="text-gray-900 mb-1">
                Email поддержка
              </p>
              <p>Понедельник - Пятница, 10:00 - 18:00</p>
              <p className="text-xs text-gray-500">
                Средний срок ответа: 24 часа
              </p>
            </div>

            <div>
              <p className="text-gray-900 mb-1">
                Телефонная поддержка
              </p>
              <p>Понедельник - Пятница, 10:00 - 18:00</p>
              <p className="text-xs text-gray-500">
                +7 747 512 7024
              </p>
            </div>

            <div>
              <p className="text-gray-900 mb-1">
                Онлайн-чат
              </p>
              <p>В разработке</p>
              <p className="text-xs text-gray-500">
                Скоро будет доступен онлайн-чат для быстрого решения вопросов
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mt-6 bg-gray-50 border-gray-200">
          <h3 className="mb-2">Важно знать</h3>
          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Мы отвечаем на все обращения в порядке их поступления</li>
            <li>Для ускорения решения вопроса укажите подробности проблемы</li>
            <li>Приложите скриншоты, если это поможет прояснить ситуацию</li>
            <li>Проверьте FAQ перед обращением — возможно, ответ уже есть там</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

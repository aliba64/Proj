import { Youtube, Send, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="mb-4">О проекте</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-4">Помощь</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Поддержка
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Обратная связь
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="mb-4">Контакты</h3>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-600 text-sm">Email</li>
              <li className="text-gray-600 text-sm">Телефоны</li>
              <li className="text-gray-600 text-sm">Мы в сети</li>
            </ul>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          © 2025 Zhevaka. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

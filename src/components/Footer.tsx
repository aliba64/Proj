import { Youtube, Send, Instagram } from "lucide-react";

type PageType = "home" | "catalog" | "seasonal" | "recipe" | "user" | "about" | "news" | "contacts" | "faq" | "support" | "feedback";

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="mb-4">О проекте</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  О нас
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("news")}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Новости
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contacts")}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-4">Помощь</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("faq")}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("support")}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Поддержка
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("feedback")}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Обратная связь
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="mb-4">Контакты</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <a
                  href="mailto:info@zhevaka.su"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  info@zhevaka.su
                </a>
              </li>
              <li>
                <a
                  href="tel:+77475127024"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  +7 747 512 7024
                </a>
              </li>
              <li className="text-gray-600 text-sm">Мы в сети:</li>
            </ul>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@TopazZ1o_MT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/Teymurazior"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/topazzio_tm/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50"
              >
                <Instagram className="w-4 h-4" />
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

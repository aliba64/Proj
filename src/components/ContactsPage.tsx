import { Card } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">Контакты</h1>
        <p className="text-gray-600 mb-8">
          Свяжитесь с нами удобным для вас способом
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white">
            <Mail className="w-8 h-8 mb-4 text-gray-700" />
            <h3 className="mb-2">Email</h3>
            <p className="text-sm text-gray-600 mb-2">
              Напишите нам на электронную почту
            </p>
            <a
              href="mailto:info@zhevaka.su"
              className="text-sm text-gray-900 hover:underline"
            >
              info@zhevaka.su
            </a>
            <br />
            <a
              href="mailto:support@zhevaka.su"
              className="text-sm text-gray-900 hover:underline"
            >
              support@zhevaka.su
            </a>
          </Card>

          <Card className="p-6 bg-white">
            <Phone className="w-8 h-8 mb-4 text-gray-700" />
            <h3 className="mb-2">Телефоны</h3>
            <p className="text-sm text-gray-600 mb-2">
              Свяжитесь с нами по телефону
            </p>
            <a
              href="tel:+77475127024"
              className="text-sm text-gray-900 hover:underline"
            >
              +7 747 512 7024
            </a>
            <br />
            <a
              href="tel:+77779521649"
              className="text-sm text-gray-900 hover:underline"
            >
              +7 777 952 1649
            </a>
          </Card>

          <Card className="p-6 bg-white">
            <MapPin className="w-8 h-8 mb-4 text-gray-700" />
            <h3 className="mb-2">Адрес</h3>
            <p className="text-sm text-gray-600">
              Казахстан, Астана
              <br />
              ул. Пушкина 11<br />
              Университет ЕНУ им. Л. Н. Гумилева
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-white">
          <h2 className="mb-4">Реквизиты</h2>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <span className="text-gray-900">ТОО "ZHEVAKA"</span>
            </p>
            <p>БИН: 000000000000</p>
            <p>ИИК: KZ00000000000000000000</p>
            <p>БИК: XXXXXXXX</p>
            <p>Банк: АО "Kaspi Bank"</p>
            <p className="text-xs text-gray-500 mt-4">
              Данные будут заполнены позже
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

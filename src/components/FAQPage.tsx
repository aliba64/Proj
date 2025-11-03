import { Card } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Как зарегистрироваться на сайте?",
    answer:
      "Нажмите на кнопку 'Войти' в правом верхнем углу страницы и заполните форму регистрации. Вам потребуется указать email и придумать пароль.",
  },
  {
    question: "Как добавить рецепт в избранное?",
    answer:
      "Нажмите на иконку сердца на карточке рецепта. Все избранные рецепты будут доступны в вашем профиле во вкладке 'Избранное'.",
  },
  {
    question: "Можно ли добавлять свои рецепты?",
    answer:
      "Да, зарегистрированные пользователи могут добавлять свои рецепты. Перейдите в свой профиль и нажмите 'Добавить рецепт'.",
  },
  {
    question: "Как работает поиск рецептов?",
    answer:
      "Поиск работает по названию рецепта, категориям, тегам, сложности и времени приготовления. Просто введите ключевые слова в строку поиска.",
  },
  {
    question: "Что такое сезонное меню?",
    answer:
      "Сезонное меню — это подборка рецептов из свежих сезонных продуктов. Мы обновляем эту коллекцию каждый сезон.",
  },
  {
    question: "Как отсортировать рецепты по времени приготовления?",
    answer:
      "Используйте фильтры в верхней части страницы. Вы можете сортировать рецепты по времени приготовления и сложности.",
  },
  {
    question: "Как связаться с поддержкой?",
    answer:
      "Вы можете связаться с нами через страницу контактов, написав на support@zhevaka.su или через форму обратной связи.",
  },
  {
    question: "Как изменить настройки профиля?",
    answer:
      "Войдите в свой профиль и нажмите на кнопку 'Настройки'. Там вы сможете изменить личную информацию, пароль и другие параметры.",
  },
];

export function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">Часто задаваемые вопросы</h1>
        <p className="text-gray-600 mb-8">
          Ответы на самые популярные вопросы о работе с сайтом
        </p>

        <Card className="p-6 bg-white">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <Card className="p-6 mt-6 bg-white">
          <h3 className="mb-2">Не нашли ответ на свой вопрос?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Напишите нам, и мы обязательно поможем!
          </p>
          <a
            href="#"
            className="text-sm text-gray-900 hover:underline"
          >
            Связаться с поддержкой →
          </a>
        </Card>
      </div>
    </div>
  );
}

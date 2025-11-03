export interface Ingredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: number;
  image: string;
  title: string;
  difficulty: string;
  time: string;
  ingredients: number;
  category: string;
  tags: string[];
  ingredientsList: Ingredient[];
  instructions: string[];
  servings: number;
  calories: number;
  views: number;
  favorites: number;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600041974426-c62f5a7eddb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWxtZW5pJTIwcnVzc2lhbnxlbnwxfHx8fDE3NjA5Mzk4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Пельмени домашние",
    difficulty: "средне",
    time: "1ч 20 мин",
    ingredients: 5,
    category: "Основные блюда",
    tags: ["мясо", "русская кухня", "тесто"],
    servings: 4,
    calories: 420,
    ingredientsList: [
      { name: "Мука пшеничная", amount: "500 г" },
      { name: "Вода", amount: "250 мл" },
      { name: "Яйцо", amount: "1 шт" },
      { name: "Соль", amount: "1 ч.л." },
      { name: "Фарш мясной", amount: "400 г" }
    ],
    instructions: [
      "Замесите тесто из муки, воды, яйца и соли. Дайте отдохнуть 30 минут.",
      "Приготовьте начинку, смешав фарш с мелко нарезанным луком, солью и перцем.",
      "Раскатайте тесто тонким слоем и вырежьте кружочки.",
      "Положите начинку в центр каждого кружочка и слепите края.",
      "Варите в подсоленной кипящей воде 7-10 минут до готовности.",
      "Подавайте со сметаной и свежей зеленью."
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1602704436046-51278415e8eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1wa2luJTIwY3JlYW0lMjBzb3VwJTIwYm93bHxlbnwxfHx8fDE3NjA5Mzk5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Тыквенный крем-суп",
    difficulty: "легко",
    time: "45 мин",
    ingredients: 8,
    category: "Первые блюда",
    tags: ["суп", "овощи", "вегетарианское"],
    servings: 4,
    calories: 180,
    ingredientsList: [
      { name: "Тыква", amount: "800 г" },
      { name: "Лук репчатый", amount: "1 шт" },
      { name: "Чеснок", amount: "2 зубчика" },
      { name: "Сливки 20%", amount: "200 мл" },
      { name: "Овощной бульон", amount: "500 мл" },
      { name: "Оливковое масло", amount: "2 ст.л." },
      { name: "Соль", amount: "по вкусу" },
      { name: "Перец черный", amount: "по вкусу" }
    ],
    instructions: [
      "Очистите тыкву от кожуры и семян, нарежьте кубиками.",
      "Нарежьте лук и чеснок, обжарьте на оливковом масле до прозрачности.",
      "Добавьте тыкву, обжаривайте 5 минут.",
      "Влейте бульон, варите до мягкости тыквы (25-30 минут).",
      "Взбейте суп блендером до однородности.",
      "Добавьте сливки, прогрейте, посолите и поперчите по вкусу."
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1602470521007-20293bd1fd31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwc3RldyUyMG1lYXQlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc2MDkzOTkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Зимнее рагу",
    difficulty: "средне",
    time: "2ч 30 мин",
    ingredients: 12,
    category: "Основные блюда",
    tags: ["мясо", "овощи", "тушеное"],
    servings: 6,
    calories: 380,
    ingredientsList: [
      { name: "Говядина", amount: "800 г" },
      { name: "Картофель", amount: "500 г" },
      { name: "Морковь", amount: "3 шт" },
      { name: "Лук репчатый", amount: "2 шт" },
      { name: "Сельдерей", amount: "2 стебля" },
      { name: "Томатная паста", amount: "2 ст.л." },
      { name: "Говяжий бульон", amount: "1 л" },
      { name: "Красное вино", amount: "200 мл" },
      { name: "Чеснок", amount: "4 зубчика" },
      { name: "Тимьян", amount: "3 веточки" },
      { name: "Лавровый лист", amount: "2 шт" },
      { name: "Соль, перец", amount: "по вкусу" }
    ],
    instructions: [
      "Нарежьте говядину кубиками, обжарьте до золотистой корочки.",
      "Добавьте нарезанный лук и чеснок, обжарьте до мягкости.",
      "Влейте вино, дайте выпариться наполовину.",
      "Добавьте томатную пасту, морковь и сельдерей.",
      "Влейте бульон, добавьте травы, тушите 1.5 часа.",
      "Добавьте картофель, тушите еще 30 минут до готовности.",
      "Подавайте горячим с хлебом."
    ]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1578172397201-efaa902004a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwdmVnZXRhYmxlcyUyMHBsYXRlfGVufDF8fHx8MTc2MDkyMzAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Весенние овощи гриль",
    difficulty: "легко",
    time: "30 мин",
    ingredients: 6,
    category: "Гарниры",
    tags: ["овощи", "гриль", "вегетарианское"],
    servings: 4,
    calories: 120,
    ingredientsList: [
      { name: "Цуккини", amount: "2 шт" },
      { name: "Баклажан", amount: "1 шт" },
      { name: "Болгарский перец", amount: "2 шт" },
      { name: "Спаржа", amount: "200 г" },
      { name: "Оливковое масло", amount: "3 ст.л." },
      { name: "Специи", amount: "по вкусу" }
    ],
    instructions: [
      "Нарежьте овощи крупными ломтиками.",
      "Смажьте овощи оливковым маслом, посолите и поперчите.",
      "Разогрейте гриль или сковороду-гриль.",
      "Жарьте овощи по 3-4 минуты с каждой стороны.",
      "Подавайте горячими с соусом песто."
    ]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1758721217610-a5d729a319e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHN1bW1lciUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjA5Mzk5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Летний освежающий салат",
    difficulty: "легко",
    time: "15 мин",
    ingredients: 7,
    category: "Салаты",
    tags: ["салат", "овощи", "свежее"],
    servings: 4,
    calories: 95,
    ingredientsList: [
      { name: "Помидоры черри", amount: "300 г" },
      { name: "Огурцы", amount: "2 шт" },
      { name: "Руккола", amount: "100 г" },
      { name: "Моцарелла", amount: "150 г" },
      { name: "Базилик", amount: "10 листиков" },
      { name: "Оливковое масло", amount: "3 ст.л." },
      { name: "Бальзамический уксус", amount: "1 ст.л." }
    ],
    instructions: [
      "Разрежьте помидоры пополам, огурцы нарежьте полукольцами.",
      "Порвите рукколу руками, нарежьте моцареллу кубиками.",
      "Смешайте все ингредиенты в салатнике.",
      "Приготовьте заправку из масла и уксуса.",
      "Заправьте салат перед подачей."
    ]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1743352388509-835796029c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMHZlZ2V0YWJsZXMlMjBpdGFsaWFufGVufDF8fHx8MTc2MDkzOTkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Паста с сезонными овощами",
    difficulty: "средне",
    time: "40 мин",
    ingredients: 9,
    category: "Паста",
    tags: ["паста", "овощи", "итальянская кухня"],
    servings: 4,
    calories: 340,
    ingredientsList: [
      { name: "Паста пенне", amount: "400 г" },
      { name: "Цуккини", amount: "2 шт" },
      { name: "Помидоры", amount: "4 шт" },
      { name: "Чеснок", amount: "3 зубчика" },
      { name: "Базилик", amount: "1 пучок" },
      { name: "Пармезан", amount: "50 г" },
      { name: "Оливковое масло", amount: "3 ст.л." },
      { name: "Соль", amount: "по вкусу" },
      { name: "Перец", amount: "по вкусу" }
    ],
    instructions: [
      "Отварите пасту в подсоленной воде до состояния аль денте.",
      "Нарежьте цуккини кружочками, помидоры кубиками.",
      "Обжарьте чеснок в оливковом масле.",
      "Добавьте цуккини, жарьте 5 минут.",
      "Добавьте помидоры и базилик, тушите 10 минут.",
      "Смешайте пасту с овощами, посыпьте пармезаном."
    ]
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1752764181694-8d064a50ca5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1ZG9uJTIwbm9vZGxlcyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYwOTM5OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Лапша удон с овощами",
    difficulty: "средне",
    time: "35 мин",
    ingredients: 10,
    category: "Азиатская кухня",
    tags: ["лапша", "азиатская кухня", "овощи"],
    servings: 2,
    calories: 390,
    ingredientsList: [
      { name: "Лапша удон", amount: "300 г" },
      { name: "Болгарский перец", amount: "1 шт" },
      { name: "Морковь", amount: "1 шт" },
      { name: "Стручковая фасоль", amount: "100 г" },
      { name: "Соевый соус", amount: "3 ст.л." },
      { name: "Кунжутное масло", amount: "1 ст.л." },
      { name: "Чеснок", amount: "2 зубчика" },
      { name: "Имбирь", amount: "10 г" },
      { name: "Зеленый лук", amount: "2 стебля" },
      { name: "Кунжут", amount: "1 ст.л." }
    ],
    instructions: [
      "Отварите лапшу удон согласно инструкции на упаковке.",
      "Нарежьте овощи тонкой соломкой.",
      "Обжарьте чеснок и имбирь на сильном огне.",
      "Добавьте овощи, жарьте 5 минут.",
      "Добавьте лапшу, соевый соус и кунжутное масло.",
      "Перемешайте, посыпьте кунжутом и зеленым луком."
    ]
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1634719134538-aa1fcf7be10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJyeSUyMGNha2UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MDkzOTkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Сезонный ягодный торт",
    difficulty: "сложно",
    time: "1ч 45 мин",
    ingredients: 14,
    category: "Десерты",
    tags: ["десерт", "торт", "ягоды"],
    servings: 8,
    calories: 320,
    ingredientsList: [
      { name: "Мука", amount: "300 г" },
      { name: "Сахар", amount: "200 г" },
      { name: "Яйца", amount: "4 шт" },
      { name: "Сливочное масло", amount: "150 г" },
      { name: "Молоко", amount: "100 мл" },
      { name: "Разрыхлитель", amount: "1 ч.л." },
      { name: "Ванильный сахар", amount: "1 пакетик" },
      { name: "Сливки 33%", amount: "500 мл" },
      { name: "Клубника", amount: "300 г" },
      { name: "Черника", amount: "150 г" },
      { name: "Малина", amount: "150 г" },
      { name: "Сахарная пудра", amount: "50 г" },
      { name: "Желатин", amount: "10 г" },
      { name: "Соль", amount: "щепотка" }
    ],
    instructions: [
      "Взбейте яйца с сахаром до пышной массы.",
      "Добавьте растопленное масло, молоко и муку с разрыхлителем.",
      "Выпекайте коржи при 180°C 30 минут.",
      "Взбейте сливки с сахарной пудрой до устойчивых пиков.",
      "Разрежьте коржи на слои, пропитайте сиропом.",
      "Промажьте кремом, добавьте ягоды между слоями.",
      "Украсьте торт сверху ягодами и охладите 2 часа."
    ]
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1618216724394-f053be6b6f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jYWtlcyUyMGZydWl0JTIwYnJlYWtmYXN0fGVufDF8fHx8MTc2MDkzOTkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Панкейки с сезонными фруктами",
    difficulty: "легко",
    time: "25 мин",
    ingredients: 6,
    category: "Завтраки",
    tags: ["завтрак", "панкейки", "фрукты"],
    servings: 4,
    calories: 280,
    ingredientsList: [
      { name: "Мука", amount: "200 г" },
      { name: "Молоко", amount: "250 мл" },
      { name: "Яйца", amount: "2 шт" },
      { name: "Сахар", amount: "2 ст.л." },
      { name: "Разрыхлитель", amount: "1 ч.л." },
      { name: "Сезонные фрукты", amount: "300 г" }
    ],
    instructions: [
      "Взбейте яйца с сахаром и молоком.",
      "Добавьте муку с разрыхлителем, перемешайте до однородности.",
      "Разогрейте сковороду, смажьте маслом.",
      "Выливайте тесто небольшими порциями.",
      "Жарьте по 2 минуты с кажд��й стороны.",
      "Подавайте с фруктами и кленовым сиропом."
    ]
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emF8ZW58MXx8fHwxNzYwODQyNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Пицца Маргарита",
    difficulty: "средне",
    time: "1ч 10 мин",
    ingredients: 8,
    category: "Основные блюда",
    tags: ["пицца", "итальянская кухня", "сыр"],
    servings: 2,
    calories: 520,
    ingredientsList: [
      { name: "Мука", amount: "300 г" },
      { name: "Дрожжи", amount: "7 г" },
      { name: "Вода", amount: "180 мл" },
      { name: "Томатный соус", amount: "150 г" },
      { name: "Моцарелла", amount: "250 г" },
      { name: "Базилик свежий", amount: "15 листиков" },
      { name: "Оливковое масло", amount: "2 ст.л." },
      { name: "Соль", amount: "1 ч.л." }
    ],
    instructions: [
      "Замесите тесто из муки, воды, дрожжей и соли.",
      "Оставьте тесто подниматься на 1 час.",
      "Раскатайте тесто в круглую лепешку.",
      "Смажьте томатным соусом, оставляя края.",
      "Выложите нарезанную моцареллу.",
      "Выпекайте при 220°C 12-15 минут.",
      "Украсьте свежим базиликом перед подачей."
    ]
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1729698597333-358449c1d0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsYWRlbHBoaWElMjByb2xsJTIwc3VzaGl8ZW58MXx8fHwxNzYwOTM5OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Роллы Филадельфия",
    difficulty: "сложно",
    time: "50 мин",
    ingredients: 11,
    category: "Азиатская кухня",
    tags: ["суши", "японская кухня", "рыба"],
    servings: 4,
    calories: 290,
    ingredientsList: [
      { name: "Рис для суши", amount: "300 г" },
      { name: "Рисовый уксус", amount: "50 мл" },
      { name: "Нори", amount: "4 листа" },
      { name: "Лосось слабосоленый", amount: "200 г" },
      { name: "Сливочный сыр", amount: "150 г" },
      { name: "Огурец", amount: "1 шт" },
      { name: "Авокадо", amount: "1 шт" },
      { name: "Кунжут", amount: "2 ст.л." },
      { name: "Соевый соус", amount: "для подачи" },
      { name: "Васаби", amount: "для подачи" },
      { name: "Имбирь маринованный", amount: "для подачи" }
    ],
    instructions: [
      "Отварите рис, заправьте рисовым уксусом.",
      "Выложите нори на циновку, распределите рис.",
      "Переверните нори рисом вниз.",
      "Выложите сыр, огурец и авокадо на нори.",
      "Скрутите ролл с помощью циновки.",
      "Оберните ролл тонкими ломтиками лосося.",
      "Нарежьте на порции, посыпьте кунжутом."
    ]
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1734773343286-99e5068b175b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYnVyZ2VyJTIwY2hlZXNlfGVufDF8fHx8MTc2MDkzOTk0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Бургер классический",
    difficulty: "легко",
    time: "30 мин",
    ingredients: 9,
    category: "Основные блюда",
    tags: ["бургер", "мясо", "американская кухня"],
    servings: 4,
    calories: 650,
    ingredientsList: [
      { name: "Говяжий фарш", amount: "600 г" },
      { name: "Булочки для бургеров", amount: "4 шт" },
      { name: "Сыр чеддер", amount: "4 ломтика" },
      { name: "Помидоры", amount: "2 шт" },
      { name: "Салат айсберг", amount: "4 листа" },
      { name: "Лук красный", amount: "1 шт" },
      { name: "Соленые огурцы", amount: "4 шт" },
      { name: "Соус бургерный", amount: "4 ст.л." },
      { name: "Соль, перец", amount: "по вкусу" }
    ],
    instructions: [
      "Сформируйте из фарша 4 котлеты, посолите и поперчите.",
      "Обжарьте котлеты на сильном огне по 4 минуты с каждой стороны.",
      "За минуту до готовности положите на каждую котлету сыр.",
      "Разрежьте булочки пополам, слегка подрумяньте на сковороде.",
      "Смажьте булочки соусом.",
      "Соберите бургер: булочка, салат, котлета с сыром, помидор, лук, огурцы.",
      "Накройте верхней частью булочки."
    ]
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYXxlbnwxfHx8fDE3NjA3OTAyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Карбонара классическая",
    difficulty: "средне",
    time: "25 мин",
    ingredients: 6,
    category: "Паста",
    tags: ["паста", "итальянская кухня", "сливочный"],
    servings: 4,
    calories: 580,
    ingredientsList: [
      { name: "Спагетти", amount: "400 г" },
      { name: "Бекон", amount: "200 г" },
      { name: "Яйца", amount: "4 шт" },
      { name: "Пармезан", amount: "100 г" },
      { name: "Черный перец", amount: "по вкусу" },
      { name: "Соль", amount: "по вкусу" }
    ],
    instructions: [
      "Отварите спагетти в подсоленной воде до аль денте.",
      "Нарежьте бекон кубиками, обжарьте до хрустящего состояния.",
      "Взбейте яйца с тертым пармезаном.",
      "Слейте воду с пасты, оставив немного для соуса.",
      "Быстро смешайте горячую пасту с яичной смесью.",
      "Добавьте бекон, перемешайте.",
      "Подавайте сразу, щедро посыпав перцем и пармезаном."
    ]
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1683323705734-e665c561c82f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWJleWUlMjBzdGVhayUyMGdyaWxsZWR8ZW58MXx8fHwxNzYwODk3NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Стейк рибай на гриле",
    difficulty: "средне",
    time: "20 мин",
    ingredients: 4,
    category: "Основные блюда",
    tags: ["мясо", "стейк", "гриль"],
    servings: 2,
    calories: 580,
    ingredientsList: [
      { name: "Стейк рибай", amount: "2 шт (по 300 г)" },
      { name: "Оливковое масло", amount: "2 ст.л." },
      { name: "Морская соль", amount: "1 ч.л." },
      { name: "Черный перец", amount: "1 ч.л." }
    ],
    instructions: [
      "Достаньте стейки из холодильника за 30 минут до приготовления.",
      "Смажьте стейки оливковым маслом, посолите и поперчите.",
      "Разогрейте гриль до максимальной температуры.",
      "Жарьте стейки по 3-4 минуты с каждой стороны для medium rare.",
      "Дайте мясу отдохнуть 5 минут перед подачей.",
      "Подавайте с овощами гриль или картофелем."
    ]
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1712746785411-9bd6a8f3650e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMGNoaWNrZW58ZW58MXx8fHwxNzYwOTA3NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Салат Цезарь с курицей",
    difficulty: "легко",
    time: "20 мин",
    ingredients: 8,
    category: "Салаты",
    tags: ["салат", "курица", "сыр"],
    servings: 2,
    calories: 350,
    ingredientsList: [
      { name: "Куриное филе", amount: "300 г" },
      { name: "Салат романо", amount: "200 г" },
      { name: "Пармезан", amount: "50 г" },
      { name: "Белый хлеб", amount: "100 г" },
      { name: "Майонез", amount: "100 мл" },
      { name: "Чеснок", amount: "2 зубчика" },
      { name: "Лимонный сок", amount: "1 ст.л." },
      { name: "Оливковое масло", amount: "2 ст.л." }
    ],
    instructions: [
      "Обжарьте куриное филе, нарежьте ломтиками.",
      "Нарежьте хлеб кубиками, обжарьте до золотистого цвета.",
      "Приготовьте соус: смешайте майонез, чеснок и лимонный сок.",
      "Порвите листья салата руками.",
      "Смешайте салат с соусом.",
      "Добавьте курицу и сухарики.",
      "Посыпьте тертым пармезаном перед подачей."
    ]
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1687585612388-3b9adf8bf078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwdGFjb3MlMjBtZXhpY2FufGVufDF8fHx8MTc2MDkzMTQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Тако с говядиной",
    difficulty: "легко",
    time: "35 мин",
    ingredients: 10,
    category: "Основные блюда",
    tags: ["мексиканская кухня", "мясо", "острое"],
    servings: 4,
    calories: 420,
    ingredientsList: [
      { name: "Говяжий фарш", amount: "500 г" },
      { name: "Лепешки тортилья", amount: "8 шт" },
      { name: "Помидоры", amount: "2 шт" },
      { name: "Салат айсберг", amount: "100 г" },
      { name: "Сыр чеддер", amount: "100 г" },
      { name: "Лук репчатый", amount: "1 шт" },
      { name: "Приправа для тако", amount: "2 ст.л." },
      { name: "Сметана", amount: "100 г" },
      { name: "Острый соус", amount: "по вкусу" },
      { name: "Кинза", amount: "1 пучок" }
    ],
    instructions: [
      "Обжарьте лук до прозрачности.",
      "Добавьте фарш, жарьте до готовности.",
      "Добавьте приправу для тако и немного воды, тушите 5 минут.",
      "Разогрейте лепешки на сковороде.",
      "Нарежьте помидоры, салат и сыр.",
      "Выложите начинку на лепешки.",
      "Добавьте овощи, сыр, сметану и кинзу."
    ]
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1635379511574-bc167ca085c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMGJvd2wlMjBqYXBhbmVzZXxlbnwxfHx8fDE3NjA5Mzk5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Рамен традиционный",
    difficulty: "сложно",
    time: "2ч",
    ingredients: 15,
    category: "Азиатская кухня",
    tags: ["суп", "японская кухня", "лапша"],
    servings: 4,
    calories: 480,
    ingredientsList: [
      { name: "Лапша рамен", amount: "400 г" },
      { name: "Свиные ребра", amount: "500 г" },
      { name: "Куриный бульон", amount: "1.5 л" },
      { name: "Соевый соус", amount: "60 мл" },
      { name: "Мисо паста", amount: "2 ст.л." },
      { name: "Яйца", amount: "4 шт" },
      { name: "Нори", amount: "4 листа" },
      { name: "Зеленый лук", amount: "4 стебля" },
      { name: "Чеснок", amount: "4 зубчика" },
      { name: "Имбирь", amount: "20 г" },
      { name: "Кунжутное масло", amount: "1 ст.л." },
      { name: "Саке", amount: "50 мл" },
      { name: "Морковь", amount: "1 шт" },
      { name: "Грибы шиитаке", amount: "6 шт" },
      { name: "Ростки бамбука", amount: "100 г" }
    ],
    instructions: [
      "Варите свиные ребра в бульоне с чесноком и имбирем 1.5 часа.",
      "Отварите яйца всмятку (6 минут), замаринуйте в соевом соусе.",
      "Добавьте в бульон мисо пасту, саке и кунжутное масло.",
      "Отварите лапшу отдельно согласно инструкции.",
      "Обжарьте грибы на сильном огне.",
      "Выложите в миски лапшу, залейте горячим бульоном.",
      "Добавьте мясо, яйца, нори, грибы, ростки бамбука и лук."
    ]
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1611497438246-dcbb383de3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2hlZXNlY2FrZXxlbnwxfHx8fDE3NjA5Mzk5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Чизкейк Нью-Йорк",
    difficulty: "средне",
    time: "1ч 30 мин",
    ingredients: 9,
    category: "Десерты",
    tags: ["десерт", "сыр", "выпечка"],
    servings: 12,
    calories: 410,
    ingredientsList: [
      { name: "Сливочный сыр", amount: "800 г" },
      { name: "Сахар", amount: "200 г" },
      { name: "Яйца", amount: "4 шт" },
      { name: "Сметана", amount: "200 г" },
      { name: "Печенье для основы", amount: "200 г" },
      { name: "Сливочное масло", amount: "100 г" },
      { name: "Ванильный экстракт", amount: "1 ч.л." },
      { name: "Лимонный сок", amount: "2 ст.л." },
      { name: "Мука", amount: "3 ст.л." }
    ],
    instructions: [
      "Измельчите печенье, смешайте с растопленным маслом.",
      "Утрамбуйте основу в форму, охладите.",
      "Взбейте сливочный сыр с сахаром до однородности.",
      "Добавьте яйца по одному, взбивая после каждого.",
      "Добавьте смета��у, ваниль, лимонный сок и муку.",
      "Вылейте смесь на основу.",
      "Выпекайте при 160°C 1 час, затем охладите в духовке.",
      "Охладите чизкейк в холодильнике минимум 4 часа."
    ]
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1587912001191-0cd4f14fd89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzYwODY3NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Круассаны французские",
    difficulty: "сложно",
    time: "3ч",
    ingredients: 7,
    category: "Выпечка",
    tags: ["выпечка", "французская кухня", "завтрак"],
    servings: 8,
    calories: 340,
    ingredientsList: [
      { name: "Мука высшего сорта", amount: "500 г" },
      { name: "Сливочное ма��ло", amount: "280 г" },
      { name: "Молоко", amount: "250 мл" },
      { name: "Сахар", amount: "50 г" },
      { name: "Дрожжи свежие", amount: "20 г" },
      { name: "Соль", amount: "10 г" },
      { name: "Яйцо для смазки", amount: "1 шт" }
    ],
    instructions: [
      "Замесите тесто из муки, молока, дрожжей, сахара и соли.",
      "Охладите тесто 1 час.",
      "Раскатайте масло в тонкий ��рямоугольник, охладите.",
      "Оберните маслом тесто, делайте тройные складывания 3 раза с охлаждением.",
      "Раскатайте тесто, нарежьте треугольниками.",
      "Сверните круассаны, дайте подняться 2 часа.",
      "Смажьте яйцом, выпекайте при 200°C 15-18 минут."
    ]
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1707448829764-9474458021ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwY3VycnklMjByaWNlfGVufDF8fHx8MTc2MDkyNTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Карри с курицей",
    difficulty: "средне",
    time: "55 мин",
    ingredients: 13,
    category: "Азиатская кухня",
    tags: ["карри", "острое", "индийская кухня"],
    servings: 4,
    calories: 450,
    ingredientsList: [
      { name: "Куриное филе", amount: "600 г" },
      { name: "Кокосовое молоко", amount: "400 м��" },
      { name: "Паста карри", amount: "3 ст.л." },
      { name: "Лук репчатый", amount: "2 шт" },
      { name: "Чеснок", amount: "4 зубчика" },
      { name: "Имбирь", amount: "20 г" },
      { name: "Болгарский перец", amount: "2 шт" },
      { name: "Помидоры", amount: "3 шт" },
      { name: "Рис басмати", amount: "300 г" },
      { name: "Кинза", amount: "1 пучок" },
      { name: "Лайм", amount: "1 шт" },
      { name: "Растительное масло", amount: "3 ст.л." },
      { name: "Соль", amount: "по вкусу" }
    ],
    instructions: [
      "Нарежьте курицу кубиками, обжарьте до золотистого цвета.",
      "Добавьте нарезанный лук, чеснок и имбирь, обжарьте 5 минут.",
      "Добавьте пасту карри, обжаривайте 1 минуту.",
      "Добавьте нарезанные помидоры и перец.",
      "Влейте кокосовое молоко, тушите 20 минут.",
      "Отварите рис отдельно.",
      "Подавайте карри с рисом, кинзой и дольками лайма."
    ]
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNvdHRvJTIwaXRhbGlhbnxlbnwxfHx8fDE3NjA4NTY1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Ризотто с грибами",
    difficulty: "средне",
    time: "45 мин",
    ingredients: 10,
    category: "Основные блюда",
    tags: ["рис", "итальянская кухня", "грибы"],
    servings: 4,
    calories: 380,
    ingredientsList: [
      { name: "Рис арборио", amount: "300 г" },
      { name: "Грибы", amount: "400 г" },
      { name: "Овощной бульон", amount: "1 л" },
      { name: "Белое вино", amount: "150 мл" },
      { name: "Лук-шалот", amount: "2 шт" },
      { name: "Чеснок", amount: "2 зубчика" },
      { name: "Пармезан", amount: "80 г" },
      { name: "Сливочное масло", amount: "50 г" },
      { name: "Оливковое масло", amount: "2 ст.л." },
      { name: "Петрушка", amount: "1 пучок" }
    ],
    instructions: [
      "Нарежьте грибы и обжарьте на сливочном масле до золотистого цвета.",
      "Обжарьте лук-ша��от и чеснок на оливковом масле.",
      "Добавьте рис, обжаривайте 2 минуты до прозрачности.",
      "Влейте вино, помешивайте до полного впитывания.",
      "Добавляйте горячий бульон по половнику, постоянно помешивая.",
      "Когда рис почти готов, добавьте грибы.",
      "Снимите с огня, добавьте масло и пармезан, перемешайте."
    ]
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1585251173707-f0550bf7c2a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jY29saSUyMHNvdXAlMjBjcmVhbXxlbnwxfHx8fDE3NjA5Mzk5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Суп-пюре из брокколи",
    difficulty: "легко",
    time: "35 мин",
    ingredients: 7,
    category: "Пе��вые блюда",
    tags: ["суп", "вегетарианское", "овощи"],
    servings: 4,
    calories: 150,
    ingredientsList: [
      { name: "Брокколи", amount: "600 г" },
      { name: "Картофель", amount: "2 шт" },
      { name: "Лук репчатый", amount: "1 шт" },
      { name: "Чеснок", amount: "2 зубчика" },
      { name: "Овощной бульон", amount: "800 мл" },
      { name: "Сливки 10%", amount: "150 мл" },
      { name: "Оливковое масло", amount: "2 ст.л." }
    ],
    instructions: [
      "Нарежьте лук и чеснок, обжарьте до прозрачности.",
      "Добавьте нарезанный картофель, обжарьте 3 минуты.",
      "Добавьте брокколи, влейте бульон.",
      "Варите 20 минут до мягкости овощей.",
      "Взбейте суп блендером до однородной консистенции.",
      "Добавьте сливки, прогрейте, посолите и поперчите."
    ]
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1625937712842-061738bb1e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3JzY2h0JTIwdWtyYWluaWFuJTIwc291cHxlbnwxfHx8fDE3NjA5Mzk5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Борщ украинский",
    difficulty: "средне",
    time: "1ч 40 мин",
    ingredients: 14,
    category: "Первые блюда",
    tags: ["суп", "украинская кухня", "мясо"],
    servings: 6,
    calories: 220,
    ingredientsList: [
      { name: "Говядина на кости", amount: "600 г" },
      { name: "Свекла", amount: "3 шт" },
      { name: "Капуста", amount: "400 г" },
      { name: "Картофель", amount: "3 шт" },
      { name: "Морковь", amount: "2 шт" },
      { name: "Лук репчатый", amount: "2 шт" },
      { name: "Томатная паста", amount: "3 ст.л." },
      { name: "Чеснок", amount: "4 зубчика" },
      { name: "Уксус 9%", amount: "1 ст.л." },
      { name: "Сахар", amount: "1 ч.л." },
      { name: "Лавровый лист", amount: "2 шт" },
      { name: "Укроп", amount: "1 пучок" },
      { name: "Сметана", amount: "для подачи" },
      { name: "Соль, перец", amount: "по вкусу" }
    ],
    instructions: [
      "Сварите бульон из говядины (1 час).",
      "Натрите свеклу и морковь, нарежьте лук.",
      "Обжарьте овощи с томатной пастой, добавьте уксус и сахар.",
      "Добавьте в бульон картофель, варите 15 минут.",
      "Добавьте нашинкованную капусту, варите 10 минут.",
      "Добавьте зажарку, лавровый лист, варите 10 минут.",
      "Добавьте чеснок и укроп, дайте настояться.",
      "Подавайте со сметаной."
    ]
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1636654931290-418d20865e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkJTIwZmV0YXxlbnwxfHx8fDE3NjA4ODA2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Греческий салат",
    difficulty: "легко",
    time: "10 мин",
    ingredients: 8,
    category: "Салаты",
    tags: ["салат", "сыр фета", "средиземноморская кухня"],
    servings: 4,
    calories: 180,
    ingredientsList: [
      { name: "Помидоры", amount: "4 шт" },
      { name: "Огурцы", amount: "2 шт" },
      { name: "Болгарский перец", amount: "1 шт" },
      { name: "Красный лук", amount: "1 шт" },
      { name: "Сыр фета", amount: "200 г" },
      { name: "Маслины", amount: "100 г" },
      { name: "Оливковое масло", amount: "4 ст.л." },
      { name: "Орегано", amount: "1 ч.л." }
    ],
    instructions: [
      "Нарежьте помидоры и огурцы крупными кусками.",
      "Нарежьте перец полосками, лук тонкими полукольцами.",
      "Смешайте овощи в салатнике.",
      "Добавьте маслины и кубики феты.",
      "Заправьте оливковым маслом, посыпьте орегано.",
      "Аккуратно перемешайте и подавайте."
    ]
  },
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1610636056460-fd6aefd8cdf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBvbWVsZXQlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzYwOTM5OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Омлет с овощами",
    difficulty: "легко",
    time: "15 мин",
    ingredients: 6,
    category: "Завтраки",
    tags: ["завтрак", "яйца", "овощи"],
    servings: 2,
    calories: 240,
    ingredientsList: [
      { name: "Яйца", amount: "4 шт" },
      { name: "Молоко", amount: "50 мл" },
      { name: "Болгарский перец", amount: "1 шт" },
      { name: "Помидоры черри", amount: "6 шт" },
      { name: "Зеленый лук", amount: "3 стебля" },
      { name: "Сливочное масло", amount: "20 г" }
    ],
    instructions: [
      "Взбейте яйца с молоком, посолите и поперчите.",
      "Нарежьте перец кубиками, помидоры пополам.",
      "Растопите масло на сковороде, обжарьте овощи 3 минуты.",
      "Влейте яичную смесь, готовьте на среднем огне.",
      "Когда низ схватится, аккуратно переверните или сложите пополам.",
      "Посыпьте зеленым луком перед подачей."
    ]
  },
  {
    id: 26,
    image: "https://images.unsplash.com/photo-1710106519622-8c49d0bcff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnQlMjBpdGFsaWFufGVufDF8fHx8MTc2MDkzOTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Тирамису классический",
    difficulty: "средне",
    time: "40 мин",
    ingredients: 8,
    category: "Десерты",
    tags: ["десерт", "итальянская кухня", "кофе"],
    servings: 8,
    calories: 380,
    ingredientsList: [
      { name: "Печенье савоярди", amount: "300 г" },
      { name: "Маскарпоне", amount: "500 г" },
      { name: "Яйца", amount: "4 шт" },
      { name: "Сахар", amount: "100 г" },
      { name: "Крепкий кофе", amount: "300 мл" },
      { name: "Марсала", amount: "50 мл" },
      { name: "Какао-порошок", amount: "30 г" },
      { name: "Соль", amount: "щепотка" }
    ],
    instructions: [
      "Отделите желтки от белков.",
      "Взбейте желтки с половиной сахара до бела.",
      "Добавьте маскарпоне, аккуратно перемешайте.",
      "Взбейте белки с оставшимся сахаром до пиков.",
      "Смешайте кофе с марсалой.",
      "Быстро обмакивайте печенье в кофе, выкладывайте слоем.",
      "Покройте кремом, повторите слои.",
      "Посыпьте какао, охладите минимум 4 часа."
    ]
  },
  {
    id: 27,
    image: "https://images.unsplash.com/photo-1707616954324-99c89a78a20d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNoZWQlMjBwb3RhdG9lc3xlbnwxfHx8fDE3NjA4NDk3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Картофельное пюре",
    difficulty: "легко",
    time: "30 мин",
    ingredients: 4,
    category: "Гарниры",
    tags: ["гарнир", "картофель", "классика"],
    servings: 4,
    calories: 180,
    ingredientsList: [
      { name: "Картофель", amount: "1 кг" },
      { name: "Молоко", amount: "150 мл" },
      { name: "Сливочное масло", amount: "50 г" },
      { name: "Соль", amount: "по вкусу" }
    ],
    instructions: [
      "Очистите и нарежьте картофель крупными кусками.",
      "Варите в подсоленной воде до мягкости (20 минут).",
      "Слейте воду, дайте картофелю подсохнуть.",
      "Разомните картофель толкушкой.",
      "Подогрейте молоко, добавьте в пюре вместе с маслом.",
      "Взбейте до воздушной консистенции, посолите по вкусу."
    ]
  },
  {
    id: 28,
    image: "https://images.unsplash.com/photo-1614777986387-015c2a89b696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xvZ25lc2UlMjBwYXN0YSUyMHNhdWNlfGVufDF8fHx8MTc2MDkzOTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Болоньезе",
    difficulty: "средне",
    time: "1ч 15 мин",
    ingredients: 12,
    category: "Паста",
    tags: ["паста", "мясо", "итальянская кухня"],
    servings: 6,
    calories: 480,
    ingredientsList: [
      { name: "Говяжий фарш", amount: "500 г" },
      { name: "Паста (спагетти)", amount: "500 г" },
      { name: "Помидоры в собственном соку", amount: "800 г" },
      { name: "Морковь", amount: "1 шт" },
      { name: "Сельдерей", amount: "2 стебля" },
      { name: "Лук репчатый", amount: "1 шт" },
      { name: "Чеснок", amount: "3 зубчика" },
      { name: "Томатная паста", amount: "2 ст.л." },
      { name: "Красное вино", amount: "150 мл" },
      { name: "Оливковое масло", amount: "3 ст.л." },
      { name: "Пармезан", amount: "для подачи" },
      { name: "Базилик, орегано", amount: "по вкусу" }
    ],
    instructions: [
      "Мелко нарежьте морковь, сельдерей, лук и чеснок.",
      "Обжарьте овощи на оливковом масле до мягкости.",
      "Добавьте фарш, жарьте до румяности.",
      "Влейте вино, дайте выпариться.",
      "Добавьте помидоры, томатную пасту и специи.",
      "Тушите на слабом огне 45 минут, помешивая.",
      "Отварите пасту, подавайте с соусом и пармезаном."
    ]
  },
  {
    id: 29,
    image: "https://images.unsplash.com/photo-1634979632467-1a68421d13b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJlbnlreSUyMGR1bXBsaW5ncyUyMHVrcmFpbmlhbnxlbnwxfHx8fDE3NjA5Mzk5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Вареники с картошкой",
    difficulty: "средне",
    time: "1ч 30 мин",
    ingredients: 6,
    category: "Основные блюда",
    tags: ["украинская кухня", "тесто", "картофель"],
    servings: 6,
    calories: 310,
    ingredientsList: [
      { name: "Мука", amount: "500 г" },
      { name: "Вода", amount: "250 мл" },
      { name: "Картофель", amount: "800 г" },
      { name: "Лук репчатый", amount: "2 шт" },
      { name: "Сливочное масло", amount: "50 г" },
      { name: "Соль", amount: "по вкусу" }
    ],
    instructions: [
      "Замесите тесто из муки, воды и соли, дайте отдохнуть 30 минут.",
      "Отварите картофель, сделайте пюре.",
      "Обжарьте лук, добавьте в пюре.",
      "Раскатайте тесто, вырежьте кружочки.",
      "Положите начинку, слепите вареники.",
      "Варите в ��ипящей подсоленной воде до всплытия плюс 3 минуты.",
      "Подавайте с жареным луком и сметаной."
    ]
  },
  {
    id: 30,
    image: "https://images.unsplash.com/photo-1723282322490-594f21e53a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwYnVuc3xlbnwxfHx8fDE3NjA5Mzk5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Булочки с корицей",
    difficulty: "средне",
    time: "2ч",
    ingredients: 9,
    category: "Выпечка",
    tags: ["выпечка", "сладкое", "завтрак"],
    servings: 12,
    calories: 290,
    ingredientsList: [
      { name: "Мука", amount: "500 г" },
      { name: "Молоко", amount: "250 мл" },
      { name: "Сахар", amount: "100 г" },
      { name: "Дрожжи", amount: "10 г" },
      { name: "Яйцо", amount: "1 шт" },
      { name: "Сливочное масло", amount: "100 г" },
      { name: "Корица молотая", amount: "3 ст.л." },
      { name: "Коричневый сахар", amount: "150 г" },
      { name: "Сахарная глазурь", amount: "для украшения" }
    ],
    instructions: [
      "Замесите тесто из муки, молока, дрожжей, сахара, яйца и 50 г масла.",
      "Дайте тесту подняться 1 час.",
      "Раскатайте в прямоугольник.",
      "Смажьте мягким маслом, посыпьте смесью корицы и сахара.",
      "Скрутите рулет, нарежьте на 12 частей.",
      "Выложите в форму, дайте подняться 30 минут.",
      "Выпекайте при 180°C 25-30 минут.",
      "Полейте глазурью после остывания."
    ]
  },
  {
    id: 31,
    image: "https://images.unsplash.com/photo-1718964313403-2db158f67844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWQlMjB0aGFpJTIwbm9vZGxlc3xlbnwxfHx8fDE3NjA5MjYwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Пад Тай",
    difficulty: "средне",
    time: "40 мин",
    ingredients: 13,
    category: "Азиатская кухня",
    tags: ["тайская кухня", "лапша", "острое"],
    servings: 4,
    calories: 420,
    ingredientsList: [
      { name: "Рисовая лапша", amount: "300 г" },
      { name: "Креветки", amount: "300 г" },
      { name: "Яйца", amount: "2 шт" },
      { name: "Ростки сои", amount: "150 г" },
      { name: "Зеленый лук", amount: "3 стебля" },
      { name: "Чеснок", amount: "3 зубчика" },
      { name: "Арахис", amount: "50 г" },
      { name: "Соус тамаринд", amount: "3 ст.л." },
      { name: "Рыбный соус", amount: "2 ст.л." },
      { name: "Коричневый сахар", amount: "2 ст.л." },
      { name: "Лайм", amount: "1 шт" },
      { name: "Перец чили", amount: "1 шт" },
      { name: "Растительное масло", amount: "3 ст.л." }
    ],
    instructions: [
      "Замочите лапшу в горячей воде на 15 минут.",
      "Обжарьте чеснок и чили на сильном огне.",
      "Добавьте креветки, жарьте до готовности.",
      "Отодвиньте креветки, взбейте яйца на сковороде.",
      "Добавьте лапшу, тамаринд, рыбный соус и сахар.",
      "Добавьте ростки сои и зеленый лук.",
      "Подавайте с арахисом и дольками лайма."
    ]
  },
  {
    id: 32,
    image: "https://images.unsplash.com/photo-1753775290395-09e3cb0b6f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlZCUyMGNoaWNrZW4lMjBicmVhc3R8ZW58MXx8fHwxNzYwOTM5OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Куриная грудка в духовке",
    difficulty: "легко",
    time: "40 мин",
    ingredients: 5,
    category: "Основные блюда",
    tags: ["курица", "духовка", "диетическое"],
    servings: 4,
    calories: 220,
    ingredientsList: [
      { name: "Куриная грудка", amount: "4 шт" },
      { name: "Оливковое масло", amount: "2 ст.л." },
      { name: "Лимон", amount: "1 шт" },
      { name: "Чеснок", amount: "3 зубчика" },
      { name: "Прованские травы", amount: "1 ст.л." }
    ],
    instructions: [
      "Разогрейте духовку до 200°C.",
      "Натрите грудки солью, перцем и травами.",
      "Смажьте маслом, добавьте давленый чеснок.",
      "Полейте лимонным соком.",
      "Запекайте 30-35 минут до готовности.",
      "Дайте отдохнуть 5 минут перед нарезкой."
    ]
  },
  {
    id: 33,
    image: "https://images.unsplash.com/photo-1564128442383-9201fcc740eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YXxlbnwxfHx8fDE3NjA4OTQxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Пицца Пепперони",
    difficulty: "средне",
    time: "1ч",
    ingredients: 9,
    category: "Основные блюда",
    tags: ["пицца", "итальянская кухня", "колбаса"],
    servings: 4,
    calories: 560,
    ingredientsList: [
      { name: "Мука", amount: "300 г" },
      { name: "Дрожжи", amount: "7 г" },
      { name: "Вода", amount: "180 мл" },
      { name: "Томатный соус", amount: "150 г" },
      { name: "Моцарелла", amount: "300 г" },
      { name: "Пепперони", amount: "150 г" },
      { name: "Оливковое масло", amount: "2 ст.л." },
      { name: "Соль", amount: "1 ч.л." },
      { name: "Орегано", amount: "1 ч.л." }
    ],
    instructions: [
      "Замесите тесто из муки, воды, дрожжей и соли.",
      "Дайте подняться 1 час.",
      "Раскатайте тесто в круг.",
      "Смажьте томатным соусом.",
      "Посыпьте тертой моцареллой.",
      "Разложите пепперони.",
      "Выпекайте при 220°C 12-15 минут.",
      "Посыпьте орегано перед подачей."
    ]
  },
  {
    id: 34,
    image: "https://images.unsplash.com/photo-1617305855058-336d24456869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBsYXZhJTIwY2FrZSUyMGZvbmRhbnR8ZW58MXx8fHwxNzYwOTM5OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Шоколадный фондан",
    difficulty: "средне",
    time: "30 мин",
    ingredients: 6,
    category: "Десерты",
    tags: ["десерт", "шоколад", "французская кухня"],
    servings: 4,
    calories: 420,
    ingredientsList: [
      { name: "Темный шоколад", amount: "200 г" },
      { name: "Сливочное масло", amount: "100 г" },
      { name: "Яйца", amount: "3 шт" },
      { name: "Сахар", amount: "80 г" },
      { name: "Мука", amount: "40 г" },
      { name: "Ванильный экстракт", amount: "1 ч.л." }
    ],
    instructions: [
      "Растопите шоколад и масло на водяной бане.",
      "Взбейте яйца с сахаром до пышности.",
      "Добавьте шоколадную смесь и ваниль.",
      "Просейте муку, аккуратно вмешайте.",
      "Разлейте по формочкам, смазанным маслом.",
      "Выпекайте при 200°C 10-12 минут.",
      "Подавайте сразу с мороженым."
    ]
  },
  {
    id: 35,
    image: "https://images.unsplash.com/photo-1659415402156-711521b67ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwc2hyaW1wJTIwc2FsYWR8ZW58MXx8fHwxNzYwOTM5OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Салат из авокадо и креветок",
    difficulty: "ле���ко",
    time: "20 мин",
    ingredients: 9,
    category: "Салаты",
    tags: ["салат", "морепродукты", "авокадо"],
    servings: 4,
    calories: 280,
    ingredientsList: [
      { name: "Креветки", amount: "400 г" },
      { name: "Авокадо", amount: "2 шт" },
      { name: "Помидоры черри", amount: "200 г" },
      { name: "Огурец", amount: "1 шт" },
      { name: "Листья салата", amount: "100 г" },
      { name: "Лимон", amount: "1 шт" },
      { name: "Оливковое масло", amount: "3 ст.л." },
      { name: "Чеснок", amount: "1 зубчик" },
      { name: "Зелень", amount: "по вкусу" }
    ],
    instructions: [
      "Отварите креветки в подсоленной воде 3 минуты.",
      "Нарежьте авокадо кубиками, сбрызните лимоном.",
      "Разрежьте помидоры пополам, огурец нарежьте.",
      "Порвите листья салата.",
      "Смешайте все ингредиенты.",
      "Приготовьте заправку из масла, лимонного сока и чеснока.",
      "Заправьте салат перед подачей."
    ]
  },
  {
    id: 36,
    image: "https://images.unsplash.com/photo-1690016336880-015ec03faf13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYXRtZWFsJTIwYmVycmllcyUyMGJyZWFrZmFzdHxlbnwxfHx8fDE3NjA4Njk5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Овсяная каша с ягодами",
    difficulty: "легко",
    time: "10 мин",
    ingredients: 5,
    category: "Завтраки",
    tags: ["завтрак", "каша", "здоровое питание"],
    servings: 2,
    calories: 250,
    ingredientsList: [
      { name: "Овсяные хлопья", amount: "100 г" },
      { name: "Молоко", amount: "400 мл" },
      { name: "Мед", amount: "2 ст.л." },
      { name: "Ягоды свежие", amount: "200 г" },
      { name: "Орехи", amount: "30 г" }
    ],
    instructions: [
      "Доведите молоко до кипения.",
      "Добавьте овсяные хлопья, варите 5 минут помешивая.",
      "Снимите с огня, дайте постоять 2 минуты.",
      "Добавьте мед, перемешайте.",
      "Выложите в тарелки, украсьте ягодами и орехами."
    ]
  },
];

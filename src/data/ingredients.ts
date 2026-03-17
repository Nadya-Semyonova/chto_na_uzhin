export interface Ingredient {
  id: string;
  name: string;
  icon: string; // путь к иконке или компонент
  category: 'dairy' | 'meat' | 'vegetables' | 'grains' | 'other';
}

export const POPULAR_INGREDIENTS: Ingredient[] = [
  {
    id: 'egg',
    name: 'Яйца',
    category: 'dairy',
    icon: '',
  },
  {
    id: 'milk',
    name: 'Молоко',
    category: 'dairy',
    icon: '',
  },
  {
    id: 'cheese',
    name: 'Сыр',
    category: 'dairy',
    icon: '',
  },
  {
    id: 'tomato',
    name: 'Помидоры',
    category: 'vegetables',
    icon: '',
  },
  {
    id: 'cucumber',
    name: 'Огурцы',
    category: 'vegetables',
    icon: '',
  },
  {
    id: 'chicken',
    name: 'Курица',
    category: 'meat',
    icon: '',
  },
  {
    id: 'potato',
    name: 'Картофель',
    category: 'vegetables',
    icon: '',
  },
  {
    id: 'onion',
    name: 'Лук',
    category: 'vegetables',
    icon: '',
  },
  {
    id: 'carrot',
    name: 'Морковь',
    category: 'vegetables',
    icon: '',
  },
  {
    id: 'bread',
    name: 'Хлеб',
    category: 'grains',
    icon: '',
  },
  {
    id: 'pasta',
    name: 'Макароны',
    category: 'grains',
    icon: '',
  },
  {
    id: 'rice',
    name: 'Рис',
    category: 'grains',
    icon: '',
  },
  {
    id: 'buckwheat',
    name: 'Гречка',
    category: 'grains',
    icon: '',
  },
  {
    id: 'mince',
    name: 'Фарш',
    category: 'meat',
    icon: '',
  },
  {
    id: 'fish',
    name: 'Рыба',
    category: 'meat',
    icon: '',
  },
  {
    id: 'garlic',
    name: 'Чеснок',
    category: 'vegetables',
    icon: '',
  },
  {
    id: 'mushrooms',
    name: 'Грибы',
    category: 'vegetables',
    icon: '',
  },
  {
    id: 'cabbage',
    name: 'Капуста',
    category: 'vegetables',
    icon: '',
  },
  {
    id: 'sour_cream',
    name: 'Сметана',
    category: 'dairy',
    icon: '',
  },
  {
    id: 'oil',
    name: 'Масло',
    category: 'other',
    icon: '',
  },
];

// Также можно экспортировать для удобства
export const INGREDIENT_CATEGORIES = {
  dairy: 'Молочные продукты',
  meat: 'Мясо и рыба',
  vegetables: 'Овощи',
  grains: 'Крупы и макароны',
  other: 'Другое',
} as const;

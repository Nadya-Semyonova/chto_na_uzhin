export interface Ingredient {
  id: string;
  name: string;
  icon: string; // путь к иконке или компонент
  category: 'dairy' | 'meat' | 'vegetables' | 'grains' | 'other';
}

export const POPULAR_INGREDIENTS: Ingredient[] = [
  // Овощи (самые частые)
  { id: 'лук', name: 'Лук', category: 'vegetables', icon: '' },
  { id: 'чеснок', name: 'Чеснок', category: 'vegetables', icon: '' },
  { id: 'помидор', name: 'Помидор', category: 'vegetables', icon: '' },
  { id: 'морковь', name: 'Морковь', category: 'vegetables', icon: '' },
  { id: 'болгарский перец', name: 'Болгарский перец', category: 'vegetables', icon: '' },
  { id: 'картофель', name: 'Картофель', category: 'vegetables', icon: '' },
  { id: 'грибы', name: 'Грибы', category: 'vegetables', icon: '' },
  { id: 'капуста', name: 'Капуста', category: 'vegetables', icon: '' },
  { id: 'огурец', name: 'Огурец', category: 'vegetables', icon: '' },

  // Белки
  { id: 'курица', name: 'Курица', category: 'meat', icon: '' },
  { id: 'яйца', name: 'Яйца', category: 'other', icon: '' },
  { id: 'бекон', name: 'Бекон', category: 'meat', icon: '' },
  { id: 'фарш', name: 'Фарш', category: 'meat', icon: '' },

  // Молочные
  { id: 'сыр', name: 'Сыр', category: 'dairy', icon: '' },
  { id: 'сливки', name: 'Сливки', category: 'dairy', icon: '' },
  { id: 'творог', name: 'Творог', category: 'dairy', icon: '' },

  // Крупы и хлеб
  { id: 'рис', name: 'Рис', category: 'grains', icon: '' },
  { id: 'макароны', name: 'Макароны', category: 'grains', icon: '' },
  { id: 'хлеб', name: 'Хлеб', category: 'other', icon: '' },
];

// Также можно экспортировать для удобства
export const INGREDIENT_CATEGORIES = {
  dairy: 'Молочные продукты',
  meat: 'Мясо',
  vegetables: 'Овощи',
  grains: 'Крупы и макароны',
  other: 'Другое',
} as const;

export interface Ingredient {
  id: string;
  name: string;
  icon: string; // путь к иконке или компонент
  category: 'dairy' | 'meat' | 'vegetables' | 'grains' | 'other';
}

export const POPULAR_INGREDIENTS: Ingredient[] = [
  // Молочные продукты
  { id: 'яйца', name: 'Яйца', category: 'dairy', icon: '' },
  { id: 'молоко', name: 'Молоко', category: 'dairy', icon: '' },
  { id: 'сыр', name: 'Сыр', category: 'dairy', icon: '' },
  { id: 'пармезан', name: 'Пармезан', category: 'dairy', icon: '' },
  { id: 'сыр фета', name: 'Сыр фета', category: 'dairy', icon: '' },
  { id: 'сливочное масло', name: 'Сливочное масло', category: 'dairy', icon: '' },
  
  // Мясо и рыба
  { id: 'бекон', name: 'Бекон', category: 'meat', icon: '' },
  { id: 'куриное филе', name: 'Куриное филе', category: 'meat', icon: '' },
  { id: 'фарш', name: 'Фарш', category: 'meat', icon: '' },
  { id: 'рыба', name: 'Рыба', category: 'meat', icon: '' },
  
  // Овощи
  { id: 'помидоры', name: 'Помидоры', category: 'vegetables', icon: '' },
  { id: 'огурцы', name: 'Огурцы', category: 'vegetables', icon: '' },
  { id: 'лук', name: 'Лук', category: 'vegetables', icon: '' },
  { id: 'чеснок', name: 'Чеснок', category: 'vegetables', icon: '' },
  { id: 'морковь', name: 'Морковь', category: 'vegetables', icon: '' },
  { id: 'болгарский перец', name: 'Болгарский перец', category: 'vegetables', icon: '' },
  { id: 'грибы', name: 'Грибы', category: 'vegetables', icon: '' },
  { id: 'картофель', name: 'Картофель', category: 'vegetables', icon: '' },
  { id: 'капуста', name: 'Капуста', category: 'vegetables', icon: '' },
  { id: 'оливки', name: 'Оливки', category: 'vegetables', icon: '' },
  
  // Крупы и макароны
  { id: 'спагетти', name: 'Спагетти', category: 'grains', icon: '' },
  { id: 'макароны', name: 'Макароны', category: 'grains', icon: '' },
  { id: 'рис', name: 'Рис', category: 'grains', icon: '' },
  { id: 'гречка', name: 'Гречка', category: 'grains', icon: '' },
  { id: 'хлеб', name: 'Хлеб', category: 'grains', icon: '' },
  
  // Другое
  { id: 'оливковое масло', name: 'Оливковое масло', category: 'other', icon: '' },
  { id: 'соевый соус', name: 'Соевый соус', category: 'other', icon: '' },
  { id: 'соль', name: 'Соль', category: 'other', icon: '' },
  { id: 'черный перец', name: 'Черный перец', category: 'other', icon: '' },
];

// Также можно экспортировать для удобства
export const INGREDIENT_CATEGORIES = {
  dairy: 'Молочные продукты',
  meat: 'Мясо и рыба',
  vegetables: 'Овощи',
  grains: 'Крупы и макароны',
  other: 'Другое',
} as const;

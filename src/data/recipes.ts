export interface Recipe {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  instructions: string;
  ingredients: string[]; // массив id ингредиентов
  cookingTime?: number; // в минутах
  difficulty?: 'Легко' | 'Средне' | 'Сложно';
}
import defaultImage from '../shared/assets/images/default.jpg';
// База рецептов
export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Паста Карбонара',
    category: 'Итальянская кухня',
    imageUrl: defaultImage,
    instructions:
      'Отварите спагетти в подсоленной воде. Обжарьте бекон с чесноком. Смешайте яйца с сыром пармезан. Соедините горячие спагетти с беконом, добавьте яичную смесь и быстро перемешайте. Подавайте сразу же с черным перцем.',
    ingredients: ['спагетти', 'яйца', 'бекон', 'пармезан', 'чеснок', 'черный перец'],
    cookingTime: 20,
    difficulty: 'Средне',
  },
  {
    id: '2',
    title: 'Омлет с овощами',
    category: 'Завтрак',
    imageUrl: defaultImage,
    instructions:
      'Взбейте яйца с молоком. Нарежьте помидоры и перец кубиками. Обжарьте овощи на сковороде, залейте яичной смесью. Готовьте под крышкой 5-7 минут.',
    ingredients: ['яйца', 'молоко', 'помидоры', 'болгарский перец', 'лук', 'соль'],
    cookingTime: 15,
    difficulty: 'Легко',
  },
  {
    id: '3',
    title: 'Греческий салат',
    category: 'Салаты',
    imageUrl: defaultImage,
    instructions:
      'Нарежьте помидоры, огурцы и перец крупными кусками. Добавьте маслины и сыр фета. Заправьте оливковым маслом и посыпьте орегано.',
    ingredients: ['помидоры', 'огурцы', 'болгарский перец', 'лук', 'сыр фета', 'оливки', 'оливковое масло'],
    cookingTime: 10,
    difficulty: 'Легко',
  },
  {
    id: '4',
    title: 'Куриное филе с овощами',
    category: 'Основные блюда',
    imageUrl: defaultImage,
    instructions:
      'Нарежьте куриное филе кубиками и обжарьте до золотистой корочки. Добавьте нарезанные овощи, тушите под крышкой 15 минут. Приправьте специями.',
    ingredients: ['куриное филе', 'болгарский перец', 'лук', 'морковь', 'чеснок', 'соевый соус'],
    cookingTime: 30,
    difficulty: 'Средне',
  },
  {
    id: '5',
    title: 'Гречка с грибами',
    category: 'Вегетарианское',
    imageUrl: defaultImage,
    instructions:
      'Отварите гречку. Обжарьте лук с грибами. Смешайте с гречкой, добавьте сливочное масло.',
    ingredients: ['гречка', 'грибы', 'лук', 'сливочное масло', 'соль'],
    cookingTime: 25,
    difficulty: 'Легко',
  },
];

// Функция для получения рецепта по ингредиентам
export const findRecipeByIngredients = (
  selectedIngredients: string[],
  recipes: Recipe[] = RECIPES
): Recipe | null => {
  if (selectedIngredients.length === 0) return null;

  // Находим рецепты, которые можно приготовить из выбранных ингредиентов
  const possibleRecipes = recipes.filter((recipe) => {
    // Проверяем, есть ли все необходимые ингредиенты в холодильнике
    return recipe.ingredients.every((ingredient) => selectedIngredients.includes(ingredient));
  });

  if (possibleRecipes.length === 0) {
    // Если нет точных совпадений, ищем рецепты с максимальным совпадением
    return findBestMatchingRecipe(selectedIngredients, recipes);
  }

  // Возвращаем случайный рецепт из возможных
  return possibleRecipes[Math.floor(Math.random() * possibleRecipes.length)];
};

// Функция для поиска рецепта с максимальным совпадением ингредиентов
export const findBestMatchingRecipe = (
  selectedIngredients: string[],
  recipes: Recipe[] = RECIPES
): Recipe | null => {
  if (selectedIngredients.length === 0) return null;

  let bestRecipe: Recipe | null = null;
  let maxMatches = 0;

  recipes.forEach((recipe) => {
    const matches = recipe.ingredients.filter((ingredient) =>
      selectedIngredients.includes(ingredient)
    ).length;

    if (matches > maxMatches) {
      maxMatches = matches;
      bestRecipe = recipe;
    }
  });

  return bestRecipe;
};

// Функция для получения случайного рецепта
export const getRandomRecipe = (recipes: Recipe[] = RECIPES): Recipe => {
  return recipes[Math.floor(Math.random() * recipes.length)];
};

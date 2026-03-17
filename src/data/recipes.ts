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

// База рецептов
export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Паста Карбонара',
    category: 'Итальянская кухня',
    imageUrl: 'https://www.themealdb.com/images/media/meals/xxpqsy1511182222.jpg',
    instructions:
      'Отварите спагетти в подсоленной воде. Обжарьте бекон с чесноком. Смешайте яйца с сыром пармезан. Соедините горячие спагетти с беконом, добавьте яичную смесь и быстро перемешайте. Подавайте сразу же с черным перцем.',
    ingredients: ['spaghetti', 'eggs', 'bacon', 'parmesan', 'garlic', 'black_pepper'],
    cookingTime: 20,
    difficulty: 'Средне',
  },
  {
    id: '2',
    title: 'Омлет с овощами',
    category: 'Завтрак',
    imageUrl: 'https://www.themealdb.com/images/media/meals/xxpqsy1511182222.jpg',
    instructions:
      'Взбейте яйца с молоком. Нарежьте помидоры и перец кубиками. Обжарьте овощи на сковороде, залейте яичной смесью. Готовьте под крышкой 5-7 минут.',
    ingredients: ['eggs', 'milk', 'tomato', 'bell_pepper', 'onion', 'salt'],
    cookingTime: 15,
    difficulty: 'Легко',
  },
  {
    id: '3',
    title: 'Греческий салат',
    category: 'Салаты',
    imageUrl: 'https://www.themealdb.com/images/media/meals/xxpqsy1511182222.jpg',
    instructions:
      'Нарежьте помидоры, огурцы и перец крупными кусками. Добавьте маслины и сыр фета. Заправьте оливковым маслом и посыпьте орегано.',
    ingredients: ['tomato', 'cucumber', 'bell_pepper', 'onion', 'feta', 'olives', 'olive_oil'],
    cookingTime: 10,
    difficulty: 'Легко',
  },
  {
    id: '4',
    title: 'Куриное филе с овощами',
    category: 'Основные блюда',
    imageUrl: 'https://www.themealdb.com/images/media/meals/xxpqsy1511182222.jpg',
    instructions:
      'Нарежьте куриное филе кубиками и обжарьте до золотистой корочки. Добавьте нарезанные овощи, тушите под крышкой 15 минут. Приправьте специями.',
    ingredients: ['chicken_breast', 'bell_pepper', 'onion', 'carrot', 'garlic', 'soy_sauce'],
    cookingTime: 30,
    difficulty: 'Средне',
  },
  {
    id: '5',
    title: 'Гречка с грибами',
    category: 'Вегетарианское',
    imageUrl: 'https://www.themealdb.com/images/media/meals/xxpqsy1511182222.jpg',
    instructions:
      'Отварите гречку. Обжарьте лук с грибами. Смешайте с гречкой, добавьте сливочное масло.',
    ingredients: ['buckwheat', 'mushrooms', 'onion', 'butter', 'salt'],
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

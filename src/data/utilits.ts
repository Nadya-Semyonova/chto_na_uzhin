import { FEATURED_RECIPES } from './featuredRecipes';
import { FRIDGE_RECIPES } from './fridgeRecipes';

export interface Recipe {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  instructions: string;
  ingredients: string[];
  cookingTime?: number;
  difficulty?: 'Легко' | 'Средне' | 'Сложно';
}

export interface RecipeWithMatch extends Recipe {
  matchPercentage: number;
  matchCount: number;
}

// Минимальное количество ингредиентов, которое должно совпасть для показа рецепта
const MIN_MATCHING_INGREDIENTS = 3;

export { FEATURED_RECIPES, FRIDGE_RECIPES };

// Основная база (для обратной совместимости - все рецепты вместе)
export const RECIPES: Recipe[] = [...FEATURED_RECIPES, ...FRIDGE_RECIPES];

// функция для получения случайного рецепта ТОЛЬКО из красивых
export const getRandomFeaturedRecipe = (): Recipe => {
  const randomIndex = Math.floor(Math.random() * FEATURED_RECIPES.length);
  return FEATURED_RECIPES[randomIndex];
};

// Функция для поиска рецептов ТОЛЬКО из холодильника
export const findMatchingFridgeRecipes = (selectedIngredients: string[]): RecipeWithMatch[] => {
  if (selectedIngredients.length === 0) return [];

  const recipesWithMatches: RecipeWithMatch[] = [];

  FRIDGE_RECIPES.forEach((recipe) => {
    const matchCount = recipe.ingredients.filter((ingredient) =>
      selectedIngredients.includes(ingredient)
    ).length;

    if (matchCount < MIN_MATCHING_INGREDIENTS) return;

    const matchPercentage = (matchCount / recipe.ingredients.length) * 100;

    recipesWithMatches.push({
      ...recipe,
      matchPercentage,
      matchCount,
    });
  });

  return recipesWithMatches.sort((a, b) => b.matchPercentage - a.matchPercentage);
};

// Функция для поиска лучшего рецепта из холодильника
export const findBestFridgeRecipe = (selectedIngredients: string[]): Recipe | null => {
  if (selectedIngredients.length === 0) return null;

  let bestRecipe: Recipe | null = null;
  let maxMatches = 0;

  FRIDGE_RECIPES.forEach((recipe) => {
    const matches = recipe.ingredients.filter((ingredient) =>
      selectedIngredients.includes(ingredient)
    ).length;

    if (matches >= MIN_MATCHING_INGREDIENTS && matches > maxMatches) {
      maxMatches = matches;
      bestRecipe = recipe;
    }
  });

  return bestRecipe;
};

// Функция для поиска рецепта по ингредиентам (только из холодильника)
export const findRecipeByFridgeIngredients = (selectedIngredients: string[]): Recipe | null => {
  if (selectedIngredients.length === 0) return null;

  const possibleRecipes = FRIDGE_RECIPES.filter((recipe) => {
    return recipe.ingredients.every((ingredient) => selectedIngredients.includes(ingredient));
  });

  if (possibleRecipes.length === 0) {
    return findBestFridgeRecipe(selectedIngredients);
  }

  return possibleRecipes[Math.floor(Math.random() * possibleRecipes.length)];
};

export const getRandomRecipe = (): Recipe => {
  return getRandomFeaturedRecipe();
};

export const findMatchingRecipes = (selectedIngredients: string[]): RecipeWithMatch[] => {
  return findMatchingFridgeRecipes(selectedIngredients); // теперь только из холодильника
};

export const findBestMatchingRecipe = (selectedIngredients: string[]): Recipe | null => {
  return findBestFridgeRecipe(selectedIngredients);
};

export const findRecipeByIngredients = (selectedIngredients: string[]): Recipe | null => {
  return findRecipeByFridgeIngredients(selectedIngredients);
};

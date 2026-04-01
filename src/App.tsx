import { useState, useEffect, useCallback, useMemo } from 'react';
import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { RecipeCard } from './components/RecipeCard';
import { GenerateButton } from './components/GenerateButton';
import {
  findMatchingRecipes,
  getRandomRecipe,
  type Recipe,
  type RecipeWithMatch,
} from './data/recipes';
import styles from './App.module.css';

// Константы
const MIN_INGREDIENTS = 3;
const LOADING_DELAY_MS = 800;

// Типы для состояний
type AppMode = 'random' | 'fridge';

function App() {
  // Состояния
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [appMode, setAppMode] = useState<AppMode>('random');
  const [matchingRecipes, setMatchingRecipes] = useState<RecipeWithMatch[]>([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Мемоизированные вычисления
  const hasEnoughIngredients = useMemo(
    () => selectedIngredients.length >= MIN_INGREDIENTS,
    [selectedIngredients]
  );

  const hasMatchingRecipes = useMemo(() => matchingRecipes.length > 0, [matchingRecipes]);

  const showNoRecipesMessage = useMemo(
    () => !isLoading && errorMessage && !currentRecipe,
    [isLoading, errorMessage, currentRecipe]
  );

  // Сброс режима "холодильник"
  const resetFridgeMode = useCallback(() => {
    setMatchingRecipes([]);
    setCurrentRecipeIndex(0);
    setErrorMessage('');
    if (selectedIngredients.length > 0 && !hasEnoughIngredients) {
      setCurrentRecipe(null);
    }
  }, [selectedIngredients.length, hasEnoughIngredients]);

  // Получение рецепта из холодильника
  const getRecipeFromFridge = useCallback((): Recipe | null => {
    if (!hasMatchingRecipes) {
      setErrorMessage(
        'К сожалению, нет рецептов с выбранными ингредиентами. Попробуйте другие продукты.'
      );
      return null;
    }

    const recipe = matchingRecipes[currentRecipeIndex];

    // Обновляем индекс для следующего нажатия (циклически)
    const nextIndex = (currentRecipeIndex + 1) % matchingRecipes.length;
    setCurrentRecipeIndex(nextIndex);

    return recipe;
  }, [hasMatchingRecipes, matchingRecipes, currentRecipeIndex]);

  // Основная логика генерации рецепта
  const generateRecipe = useCallback(
    (mode: AppMode) => {
      setIsLoading(true);
      setAppMode(mode);

      setTimeout(() => {
        let recipe: Recipe | null = null;

        if (mode === 'fridge' && hasEnoughIngredients) {
          recipe = getRecipeFromFridge();
        } else if (mode === 'random') {
          recipe = getRandomRecipe();
        }

        setCurrentRecipe(recipe);
        setIsLoading(false);
      }, LOADING_DELAY_MS);
    },
    [hasEnoughIngredients, getRecipeFromFridge]
  );

  // Эффект: обновление подходящих рецептов при изменении ингредиентов
  useEffect(() => {
    if (!hasEnoughIngredients) {
      resetFridgeMode();
      return;
    }

    const matches = findMatchingRecipes(selectedIngredients);
    setMatchingRecipes(matches);
    setCurrentRecipeIndex(0);

    if (matches.length === 0) {
      setErrorMessage(
        'К сожалению, нет рецептов с выбранными ингредиентами. Попробуйте другие продукты.'
      );
      setCurrentRecipe(null);
    } else {
      setErrorMessage('');
      // Сбрасываем текущий рецепт, он будет показан при нажатии кнопки
      if (appMode === 'fridge') {
        setCurrentRecipe(null);
      }
    }
  }, [selectedIngredients, hasEnoughIngredients, appMode, resetFridgeMode]);

  // Обработчики событий
  const handleRandomRecipe = useCallback(() => {
    generateRecipe('random');
  }, [generateRecipe]);

  const handleRecipeFromFridge = useCallback(() => {
    if (!hasEnoughIngredients) {
      setErrorMessage(`Выберите минимум ${MIN_INGREDIENTS} ингредиента для поиска рецепта!`);
      return;
    }

    if (selectedIngredients.length === 0) {
      setErrorMessage('Добавьте продукты в холодильник!');
      return;
    }

    generateRecipe('fridge');
  }, [hasEnoughIngredients, selectedIngredients.length, generateRecipe]);

  const handleIngredientsChange = useCallback((ingredients: string[]) => {
    setSelectedIngredients(ingredients);
    // Очищаем сообщение об ошибке при изменении ингредиентов
    setErrorMessage('');
  }, []);

  // Показывать ли подсказку о режиме
  const showFridgeHint = useMemo(
    () =>
      !isLoading &&
      appMode === 'fridge' &&
      hasEnoughIngredients &&
      hasMatchingRecipes &&
      currentRecipe,
    [isLoading, appMode, hasEnoughIngredients, hasMatchingRecipes, currentRecipe]
  );

  return (
    <Layout
      sidebar={
        <Sidebar
          onIngredientsChange={handleIngredientsChange}
          onGenerateFromFridge={handleRecipeFromFridge}
          selectedCount={selectedIngredients.length}
        />
      }
    >
      <RecipeCard
        recipe={currentRecipe}
        isLoading={isLoading}
        noRecipesMessage={showNoRecipesMessage ? errorMessage : undefined}
      />

      <div className={styles.buttonContainer}>
        <GenerateButton onClick={handleRandomRecipe} disabled={isLoading} />

        {showFridgeHint && (
          <div className={styles.hint} role="status" aria-live="polite">
            Рецепт подобран по ингредиентам из холодильника
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;

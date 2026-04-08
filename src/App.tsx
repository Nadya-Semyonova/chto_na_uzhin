import { useState, useEffect, useCallback, useMemo } from 'react';
import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { RecipeCard } from './components/RecipeCard';
import { GenerateButton } from './components/GenerateButton';
import { BottomSheet } from './components/BottomSheet';
import {
  findMatchingRecipes,
  getRandomRecipe,
  type Recipe,
  type RecipeWithMatch,
} from './data/utilits';
import styles from './App.module.css';

const MIN_INGREDIENTS = 3;
const LOADING_DELAY_MS = 800;
const MOBILE_BREAKPOINT = 768;

type AppMode = 'random' | 'fridge';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [appMode, setAppMode] = useState<AppMode>('random');
  const [matchingRecipes, setMatchingRecipes] = useState<RecipeWithMatch[]>([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Состояние для Bottom Sheet
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);

      if (!mobile && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  const hasEnoughIngredients = useMemo(
    () => selectedIngredients.length >= MIN_INGREDIENTS,
    [selectedIngredients]
  );

  const hasMatchingRecipes = useMemo(() => matchingRecipes.length > 0, [matchingRecipes]);

  const showNoRecipesMessage = useMemo(
    () => !isLoading && errorMessage && !currentRecipe,
    [isLoading, errorMessage, currentRecipe]
  );

  const resetFridgeMode = useCallback(() => {
    setMatchingRecipes([]);
    setCurrentRecipeIndex(0);
    setErrorMessage('');
    if (selectedIngredients.length > 0 && !hasEnoughIngredients) {
      setCurrentRecipe(null);
    }
  }, [selectedIngredients.length, hasEnoughIngredients]);

  const getRecipeFromFridge = useCallback((): Recipe | null => {
    if (!hasMatchingRecipes) {
      setErrorMessage(
        'К сожалению, нет рецептов с выбранными ингредиентами. Попробуйте другие продукты.'
      );
      return null;
    }

    const recipe = matchingRecipes[currentRecipeIndex];

    const nextIndex = (currentRecipeIndex + 1) % matchingRecipes.length;
    setCurrentRecipeIndex(nextIndex);

    return recipe;
  }, [hasMatchingRecipes, matchingRecipes, currentRecipeIndex]);

  // Основная логика генерации рецепта
  const generateRecipe = useCallback(
    (mode: AppMode) => {
      setIsLoading(true);
      setAppMode(mode);

      if (mode === 'fridge' && isMobile) {
        setIsSidebarOpen(false);
      }

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
    [hasEnoughIngredients, getRecipeFromFridge, isMobile]
  );

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

      if (appMode === 'fridge') {
        setCurrentRecipe(null);
      }
    }
  }, [selectedIngredients, hasEnoughIngredients, appMode, resetFridgeMode]);

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

    setErrorMessage('');
  }, []);

  const showFridgeHint = useMemo(
    () =>
      !isLoading &&
      appMode === 'fridge' &&
      hasEnoughIngredients &&
      hasMatchingRecipes &&
      currentRecipe,
    [isLoading, appMode, hasEnoughIngredients, hasMatchingRecipes, currentRecipe]
  );

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Layout
        sidebar={
          <Sidebar
            onIngredientsChange={handleIngredientsChange}
            onGenerateFromFridge={handleRecipeFromFridge}
            selectedCount={selectedIngredients.length}
          />
        }
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={isMobile ? toggleSidebar : undefined}
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

      {/* Bottom Sheet для мобильной версии */}
      {isMobile && (
        <BottomSheet isOpen={isSidebarOpen} onClose={toggleSidebar}>
          <Sidebar
            onIngredientsChange={handleIngredientsChange}
            onGenerateFromFridge={handleRecipeFromFridge}
            selectedCount={selectedIngredients.length}
          />
        </BottomSheet>
      )}
    </>
  );
}

export default App;

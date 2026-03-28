import { useState, useEffect, useCallback } from 'react';
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

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRandomMode, setIsRandomMode] = useState(false);
  const [matchingRecipes, setMatchingRecipes] = useState<RecipeWithMatch[]>([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [noRecipesMessage, setNoRecipesMessage] = useState<string>('');

  // Пересчитываем подходящие рецепты при изменении выбранных ингредиентов
  useEffect(() => {
    if (selectedIngredients.length >= 3) {
      const matches = findMatchingRecipes(selectedIngredients);
      setMatchingRecipes(matches);
      setCurrentRecipeIndex(0);

      if (matches.length > 0) {
        setNoRecipesMessage('');
        // Сбрасываем текущий рецепт, он будет показан при нажатии кнопки
        setCurrentRecipe(null);
      } else {
        setNoRecipesMessage(
          'К сожалению, нет рецептов с выбранными ингредиентами. Попробуйте другие продукты.'
        );
        setCurrentRecipe(null);
      }
    } else {
      setMatchingRecipes([]);
      setCurrentRecipeIndex(0);
      setNoRecipesMessage('');
      // Если выбрано меньше 3 ингредиентов, сбрасываем рецепт
      if (selectedIngredients.length > 0) {
        setCurrentRecipe(null);
      }
    }
  }, [selectedIngredients]);

  const handleGenerateRecipe = useCallback(
    (useSelectedIngredients: boolean = false) => {
      setIsLoading(true);
      setIsRandomMode(!useSelectedIngredients);

      setTimeout(() => {
        let recipe = null;

        if (useSelectedIngredients && selectedIngredients.length >= 3) {
          // Если есть подходящие рецепты
          if (matchingRecipes.length > 0) {
            // Берем текущий рецепт по индексу
            recipe = matchingRecipes[currentRecipeIndex];

            // Обновляем индекс для следующего нажатия (циклически)
            const nextIndex = (currentRecipeIndex + 1) % matchingRecipes.length;
            setCurrentRecipeIndex(nextIndex);
          } else {
            // Нет подходящих рецептов, показываем сообщение
            setNoRecipesMessage(
              'К сожалению, нет рецептов с выбранными ингредиентами. Попробуйте другие продукты.'
            );
            recipe = null;
          }
        } else if (!useSelectedIngredients) {
          // Случайный рецепт
          recipe = getRandomRecipe();
        }

        setCurrentRecipe(recipe);
        setIsLoading(false);
      }, 800);
    },
    [selectedIngredients, matchingRecipes, currentRecipeIndex]
  );

  const handleRandomRecipe = () => {
    handleGenerateRecipe(false);
  };

  const handleRecipeFromFridge = () => {
    if (selectedIngredients.length === 0) {
      alert('Добавьте продукты в холодильник!');
      return;
    }
    if (selectedIngredients.length < 3) {
      alert('Выберите минимум 3 ингредиента для поиска рецепта!');
      return;
    }
    handleGenerateRecipe(true);
  };

  // Определяем, нужно ли показывать сообщение об отсутствии рецептов
  const showNoRecipesMessage = !isLoading && noRecipesMessage && !currentRecipe;

  return (
    <>
      <Layout
        sidebar={
          <Sidebar
            onIngredientsChange={setSelectedIngredients}
            onGenerateFromFridge={handleRecipeFromFridge}
            selectedCount={selectedIngredients.length}
          />
        }
      >
        <RecipeCard
          recipe={currentRecipe}
          isLoading={isLoading}
          noRecipesMessage={showNoRecipesMessage ? noRecipesMessage : undefined}
        />
        <div className={styles.buttonContainer}>
          <GenerateButton onClick={handleRandomRecipe} disabled={isLoading} variant="random" />
          {!isRandomMode &&
            selectedIngredients.length >= 3 &&
            matchingRecipes.length > 0 &&
            currentRecipe && (
              <div className={styles.hint}>Рецепт подобран по ингредиентам из холодильника</div>
            )}
        </div>
      </Layout>
    </>
  );
}

export default App;

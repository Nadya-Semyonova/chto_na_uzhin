import { useState } from 'react';
import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { RecipeCard, type Recipe } from './components/RecipeCard';
import { GenerateButton } from './components/GenerateButton';
import { findRecipeByIngredients, getRandomRecipe } from './data/recipes';
import styles from './App.module.css';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRandomMode, setIsRandomMode] = useState(false);

  const handleGenerateRecipe = (useSelectedIngredients: boolean = false) => {
    setIsLoading(true);
    setIsRandomMode(!useSelectedIngredients);

    // Имитация загрузки рецепта
    setTimeout(() => {
      let recipe = null;

      if (useSelectedIngredients && selectedIngredients.length > 0) {
        // Генерируем рецепт на основе выбранных ингредиентов
        recipe = findRecipeByIngredients(selectedIngredients);

        if (!recipe) {
          alert(
            'К сожалению, нет рецептов, полностью подходящих под ваши ингредиенты. Показан рецепт с максимальным совпадением.'
          );
          recipe = findRecipeByIngredients(selectedIngredients); // findBestMatchingRecipe вызывается внутри
        }
      } else {
        // Генерируем случайный рецепт
        recipe = getRandomRecipe();
      }

      setCurrentRecipe(recipe);
      setIsLoading(false);
    }, 800);
  };

  const handleRandomRecipe = () => {
    handleGenerateRecipe(false);
  };

  const handleRecipeFromFridge = () => {
    if (selectedIngredients.length === 0) {
      alert('Добавьте продукты в холодильник!');
      return;
    }
    handleGenerateRecipe(true);
  };

  return (
    <>
      <Layout
        sidebar={
          <Sidebar
            onIngredientsChange={setSelectedIngredients}
            onGenerateFromFridge={handleRecipeFromFridge}
          />
        }
      >
        <RecipeCard recipe={currentRecipe} />
        <div className={styles.buttonContainer}>
          <GenerateButton onClick={handleRandomRecipe} disabled={isLoading} variant="random" />
          {!isRandomMode && selectedIngredients.length > 0 && (
            <div className={styles.hint}>Рецепт подобран по ингредиентам из холодильника</div>
          )}
        </div>
      </Layout>

      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loading}>
            {/* Здесь можно добавить красивый спиннер */}⏳ Ищем рецепт...
          </div>
        </div>
      )}
    </>
  );
}

export default App;

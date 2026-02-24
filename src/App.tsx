import { useState } from 'react';
import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { RecipeCard, type Recipe } from './components/RecipeCard';
import { GenerateButton } from './components/GenerateButton';
import styles from './App.module.css';

// Временные данные для демонстрации верстки
const MOCK_RECIPE: Recipe = {
  id: '1',
  title: 'Паста Карбонара',
  category: 'Итальянская кухня',
  imageUrl: 'https://www.themealdb.com/images/media/meals/xxpqsy1511182222.jpg',
  instructions: 'Отварите спагетти в подсоленной воде. Обжарьте бекон с чесноком. Смешайте яйца с сыром пармезан. Соедините горячие спагетти с беконом, добавьте яичную смесь и быстро перемешайте. Подавайте сразу же с черным перцем.'
};

function App() {
  const [, setSelectedIngredients] = useState<string[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateRecipe = () => {
    setIsLoading(true);
    
    // Имитация загрузки рецепта
    setTimeout(() => {
      // Пока просто ставим моковые данные
      // Позже здесь будет реальный запрос к API
      setCurrentRecipe(MOCK_RECIPE);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Layout
        sidebar={
          <Sidebar 
            onIngredientsChange={setSelectedIngredients}
          />
        }
      >
        <RecipeCard recipe={currentRecipe} />
        <GenerateButton 
          onClick={handleGenerateRecipe}
          disabled={isLoading}
        />
      </Layout>
      
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loading}>
            {/* Здесь можно добавить красивый спиннер */}
            ⏳ Ищем рецепт...
          </div>
        </div>
      )}
    </>
  );
}

export default App;

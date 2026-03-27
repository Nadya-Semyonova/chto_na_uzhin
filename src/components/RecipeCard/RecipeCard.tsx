import type { Recipe } from '../../data/recipes';
import styles from './RecipeCard.module.css';

interface RecipeCardProps {
  recipe?: Recipe | null; // ваш тип рецепта
  isLoading?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isLoading }) => {
  // Состояние загрузки
  if (isLoading) {
    return (
      <div className={styles.card}>
        <div className={styles.loadingState}>
          <span className={styles.spinner}>⏳</span>
          <span className={styles.spinnerText}>Ищем рецепт...</span>
        </div>
      </div>
    );
  }

  // Пустое состояние (нет рецепта)
  if (!recipe) {
    return (
      <div className={styles.card}>
        <div className={styles.placeholder}>
          <span className={styles.placeholderIcon}>🍽️</span>
          <h3 className={styles.placeholderTitle}>Пока нет рецепта</h3>
          <p className={styles.placeholderText}>
            Нажми на кнопку ниже, чтобы получить идею для ужина!
          </p>
        </div>
      </div>
    );
  }
 // Функция для отображения сложности в виде звездочек
  const renderDifficulty = (difficulty?: string) => {
    switch (difficulty) {
      case 'Легко':
        return '⭐';
      case 'Средне':
        return '⭐⭐';
      case 'Сложно':
        return '⭐⭐⭐';
      default:
        return '⭐';
    }
  };

  // Форматирование времени
  const formatCookingTime = (minutes?: number) => {
    if (!minutes) return 'Не указано';
    if (minutes < 60) return `${minutes} мин`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} ч ${mins} мин`;
  };
  // Состояние с рецептом
  return (
<div className={styles.card}>
  <div className={styles.imageContainer}>
    <img
      src={recipe.imageUrl}
      alt={recipe.title}
      className={styles.image}
    />
    <div className={styles.attribution}>
      <a href="http://www.freepik.com">Designed by Freepik</a>
    </div>
  </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{recipe.title}</h2>
        
        <div className={styles.meta}>
          <span className={styles.category}>{recipe.category}</span>
          <div className={styles.metaInfo}>
            {recipe.cookingTime && (
              <span className={styles.cookingTime}>
                ⏱️ {formatCookingTime(recipe.cookingTime)}
              </span>
            )}
            {recipe.difficulty && (
              <span className={styles.difficulty}>
                {renderDifficulty(recipe.difficulty)} {recipe.difficulty}
              </span>
            )}
          </div>
        </div>

        <div className={styles.ingredients}>
          <h3>Ингредиенты:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className={styles.instructions}>
          <h3>Приготовление:</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};



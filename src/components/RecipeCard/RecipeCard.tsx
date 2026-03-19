import type { Recipe } from '../../data/recipes';
import styles from './RecipeCard.module.css';

interface RecipeCardProps {
  recipe?: Recipe; // ваш тип рецепта
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

  // Состояние с рецептом
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className={styles.image}
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Фото+рецепта';
          }}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{recipe.title}</h2>
        <span className={styles.category}>{recipe.category}</span>
        <p className={styles.instructions}>{recipe.instructions}</p>
      </div>
    </div>
  );
};

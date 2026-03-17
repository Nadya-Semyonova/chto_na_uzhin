import styles from './RecipeCard.module.css';

// Тип для рецепта (пока без API, просто заглушка)
export interface Recipe {
  id?: string;
  title: string;
  category: string;
  imageUrl: string;
  instructions: string;
}

interface RecipeCardProps {
  recipe?: Recipe | null;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
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

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className={styles.image}
          onError={(e) => {
            // Если фото не загрузится, покажем заглушку
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

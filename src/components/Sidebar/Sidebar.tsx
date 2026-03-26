import { useState } from 'react';
import styles from './Sidebar.module.css';
import {
  POPULAR_INGREDIENTS,
  INGREDIENT_CATEGORIES,
  type Ingredient,
} from '../../data/ingredients';

interface SidebarProps {
  onIngredientsChange?: (selectedIngredients: string[]) => void;
  onGenerateFromFridge?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onIngredientsChange, onGenerateFromFridge }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleIngredientToggle = (ingredient: string) => {
    setSelected((prev) => {
      const newSelected = prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient];
      onIngredientsChange?.(newSelected);
      return newSelected;
    });
  };

  const handleClearAll = () => {
    setSelected([]);
    onIngredientsChange?.([]);
  };

  // Группируем ингредиенты по категориям
  const groupedIngredients = POPULAR_INGREDIENTS.reduce(
    (acc, ingredient) => {
      if (!acc[ingredient.category]) {
        acc[ingredient.category] = [];
      }
      acc[ingredient.category].push(ingredient);
      return acc;
    },
    {} as Record<string, Ingredient[]>
  );

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Холодильник</h2>

      <div className={styles.ingredientList}>
        {Object.entries(groupedIngredients).map(([category, ingredients]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>
              {INGREDIENT_CATEGORIES[category as keyof typeof INGREDIENT_CATEGORIES]}
            </h3>
            {ingredients.map((ingredient) => (
              <label key={ingredient.id} className={styles.ingredientItem}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={selected.includes(ingredient.id)}
                  onChange={() => handleIngredientToggle(ingredient.id)}
                />
                <span className={styles.label}>{ingredient.name}</span>
              </label>
            ))}
          </div>
        ))}
      </div>

      {selected.length > 0 && (
<div className={styles.fridgeFooter}>
  <div className={styles.selectedCount}>Продуктов: {selected.length}</div>
  <div className={styles.fridgeActions}>
    <button 
      className={`${styles.clearButton} ${styles.btnStyle5}`} 
      onClick={handleClearAll}
    >
      Очистить
    </button>
    <button 
      className={`${styles.cookButton} ${styles.btnStyle5}`} 
      onClick={onGenerateFromFridge}
    >
      Приготовить!
    </button>
  </div>
</div>
      )}
    </div>
  );
};

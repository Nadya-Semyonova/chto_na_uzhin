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
  selectedCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  onIngredientsChange,
  onGenerateFromFridge,
  selectedCount = 0,
}) => {
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

  // Используем selectedCount для проверки количества (или selected.length, если selectedCount не передан)
  const currentCount = selectedCount > 0 ? selectedCount : selected.length;
  const isGenerateDisabled = currentCount < 3;

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Выбери, что есть в холодильнике:</h2>

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
          <div className={styles.selectedCount}>Продуктов: {currentCount}</div>
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
              disabled={isGenerateDisabled}
            >
              Приготовить!
            </button>
          </div>
          {isGenerateDisabled && (
            <div className={styles.warningMessage}>Выберите минимум 3 ингредиента</div>
          )}
        </div>
      )}
    </div>
  );
};

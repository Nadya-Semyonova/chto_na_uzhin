import { useState, useCallback, useMemo } from 'react';
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

const MIN_INGREDIENTS = 3;

export const Sidebar: React.FC<SidebarProps> = ({
  onIngredientsChange,
  onGenerateFromFridge,
  selectedCount = 0,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const currentCount = selectedCount > 0 ? selectedCount : selected.length;
  const isGenerateDisabled = currentCount < MIN_INGREDIENTS;

  // Группировка ингредиентов по категориям
  const groupedIngredients = useMemo(() => {
    return POPULAR_INGREDIENTS.reduce(
      (acc, ingredient) => {
        const category = ingredient.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(ingredient);
        return acc;
      },
      {} as Record<string, Ingredient[]>
    );
  }, []);

  // Обработчики событий
  const handleIngredientToggle = useCallback(
    (ingredientId: string) => {
      setSelected((prev) => {
        const newSelected = prev.includes(ingredientId)
          ? prev.filter((id) => id !== ingredientId)
          : [...prev, ingredientId];

        onIngredientsChange?.(newSelected);
        return newSelected;
      });
    },
    [onIngredientsChange]
  );

  const handleClearAll = useCallback(() => {
    setSelected([]);
    onIngredientsChange?.([]);
  }, [onIngredientsChange]);

  // Проверка, выбран ли ингредиент
  const isIngredientSelected = useCallback(
    (ingredientId: string) => {
      return selected.includes(ingredientId);
    },
    [selected]
  );

  // Если нет выбранных ингредиентов, показываем только список
  const showFooter = selected.length > 0;

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Выбери, что есть в холодильнике:</h2>

      <div className={styles.ingredientList}>
        {Object.entries(groupedIngredients).map(([category, ingredients]) => (
          <div key={category} className={styles.categoryGroup}>
            <h3 className={styles.categoryTitle}>
              {INGREDIENT_CATEGORIES[category as keyof typeof INGREDIENT_CATEGORIES]}
            </h3>
            <div className={styles.ingredientsGrid}>
              {ingredients.map((ingredient) => (
                <label key={ingredient.id} className={styles.ingredientItem}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={isIngredientSelected(ingredient.id)}
                    onChange={() => handleIngredientToggle(ingredient.id)}
                  />
                  <span className={styles.label}>{ingredient.name}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showFooter && (
        <div className={styles.fridgeFooter}>
          <div className={styles.selectedCount}>Продуктов: {currentCount}</div>

          <div className={styles.fridgeActions}>
            <button
              className={styles.clearButton}
              onClick={handleClearAll}
              aria-label="Очистить все выбранные ингредиенты"
            >
              Очистить
            </button>
            <button
              className={styles.cookButton}
              onClick={onGenerateFromFridge}
              disabled={isGenerateDisabled}
              aria-label="Приготовить блюдо из выбранных ингредиентов"
            >
              Приготовить!
            </button>
          </div>

          {isGenerateDisabled && (
            <div className={styles.warningMessage} role="alert">
              Выберите минимум {MIN_INGREDIENTS} ингредиента
            </div>
          )}
        </div>
      )}
    </div>
  );
};

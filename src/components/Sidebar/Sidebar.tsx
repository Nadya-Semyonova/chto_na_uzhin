import { useState } from 'react';
import styles from './Sidebar.module.css';

// Список самых распространенных продуктов
const POPULAR_INGREDIENTS = [
  'Курица',
  'Яйца',
  'Картофель',
  'Лук',
  'Морковь',
  'Молоко',
  'Сыр',
  'Помидоры',
  'Огурцы',
  'Хлеб',
  'Макароны',
  'Рис',
  'Гречка',
  'Фарш',
  'Рыба',
  'Чеснок',
  'Грибы',
  'Капуста',
  'Сметана',
  'Масло растительное',
];

interface SidebarProps {
  onIngredientsChange?: (selectedIngredients: string[]) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onIngredientsChange }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleIngredientToggle = (ingredient: string) => {
    setSelected(prev => {
      const newSelected = prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient];
      
      // Вызываем колбэк, если он передан
      onIngredientsChange?.(newSelected);
      return newSelected;
    });
  };

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Что в холодильнике? 🧐</h2>
      <p className={styles.subtitle}>Выбери продукты</p>
      
      <div className={styles.ingredientList}>
        {POPULAR_INGREDIENTS.map((ingredient) => (
          <label key={ingredient} className={styles.ingredientItem}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={selected.includes(ingredient)}
              onChange={() => handleIngredientToggle(ingredient)}
            />
            <span className={styles.label}>{ingredient}</span>
          </label>
        ))}
      </div>

      {selected.length > 0 && (
        <div className={styles.selectedCount}>
          Выбрано продуктов: {selected.length}
        </div>
      )}
    </div>
  );
};
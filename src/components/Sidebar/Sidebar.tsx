import { useState } from 'react';
import styles from './Sidebar.module.css';

const POPULAR_INGREDIENTS = [
  '🥚 Яйца',
  '🥛 Молоко',
  '🧀 Сыр',
  '🍅 Помидоры',
  '🥒 Огурцы',
  '🍗 Курица',
  '🥔 Картофель',
  '🧅 Лук',
  '🥕 Морковь',
  '🍞 Хлеб',
  '🍝 Макароны',
  '🍚 Рис',
  '🌾 Гречка',
  '🥩 Фарш',
  '🐟 Рыба',
  '🧄 Чеснок',
  '🍄 Грибы',
  '🥬 Капуста',
  '🥛 Сметана',
  '🫒 Масло',
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
      onIngredientsChange?.(newSelected);
      return newSelected;
    });
  };

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>
        Холодильник 
        <span style={{ fontSize: '14px', display: 'block', color: '#7f8c8d' }}>
          Открой и посмотри
        </span>
      </h2>
      
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
        Продуктов в холодильнике: {selected.length}
        </div>
      )}
    </div>
  );
};
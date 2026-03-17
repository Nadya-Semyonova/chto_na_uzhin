import React from 'react';
import styles from './GenerateButton.module.css';

interface GenerateButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'random' | 'fridge';
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
  onClick,
  disabled = false,
  variant = 'random',
}) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {variant === 'random' ? (
        <>
          <span className={styles.icon}></span>
          Что на ужин?
          <span className={styles.icon}></span>
        </>
      ) : (
        <>
          <span className={styles.icon}>🧊</span>
          Приготовить из того, что есть
          <span className={styles.icon}>👨‍🍳</span>
        </>
      )}
    </button>
  );
};

import React from 'react';
import styles from './GenerateButton.module.css';

interface GenerateButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ 
  onClick, 
  disabled = false 
}) => {
  return (
    <button 
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.icon}>🍳</span>
      Что на ужин?
      <span className={styles.icon}>🤔</span>
    </button>
  );
};
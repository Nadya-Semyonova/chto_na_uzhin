import styles from './GenerateButton.module.css';

interface GenerateButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
  onClick,
  disabled = false,
}) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      Дорогая, что на ужин?
    </button>
  );
};
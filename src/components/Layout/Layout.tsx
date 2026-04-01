import type { ReactNode } from 'react';
import { BurgerMenu } from '../BurgerMenu';
import styles from './Layout.module.css';

interface LayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  isSidebarOpen?: boolean;
  onSidebarToggle?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
  sidebar,
  children,
  isSidebarOpen = false,
  onSidebarToggle,
}) => {
  return (
    <div className={styles.layout}>
      {/* Бургер-меню только на мобилках */}
      {onSidebarToggle && <BurgerMenu isOpen={isSidebarOpen} onClick={onSidebarToggle} />}

      {/* Десктопная версия - сайдбар всегда виден */}
      <aside
        className={`${styles.sidebar} ${styles.sidebarDesktop}`}
        aria-label="Боковая панель с ингредиентами"
      >
        {sidebar}
      </aside>

      {/* Основной контент */}
      <main className={styles.mainContent} aria-label="Основной контент">
        <div className={styles.container}>{children}</div>
      </main>

      {/* Мобильная версия - Bottom Sheet */}
      {onSidebarToggle && (
        <div className={styles.bottomSheetMobile}>
          {/* BottomSheet будет рендериться в App, но стили для контейнера */}
        </div>
      )}
    </div>
  );
};

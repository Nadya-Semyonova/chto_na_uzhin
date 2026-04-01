import type { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ sidebar, children }) => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar} aria-label="Боковая панель с ингредиентами">
        {sidebar}
      </aside>
      <main className={styles.mainContent} aria-label="Основной контент">
        <div className={styles.container}>
          {children}
        </div>
      </main>
    </div>
  );
};
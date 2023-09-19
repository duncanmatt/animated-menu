import { useState } from 'react';
import NavMenu from './NavMenu';
import styles from '../styles/Layout.module.css';
import type { LayoutProps } from '@/types';

const Layout = ({ children }: LayoutProps) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <span className={styles.headerLogoWrapper}>
              <h1 className={styles.headerLogo}>LOGO</h1>
            </span>
          </div>
        </div>
      </header>
      <div className={styles.headerControlsWrapper}>
        <span className={styles.headerControls}>
          <button
            data-open={`${menuActive}`}
            onClick={toggleMenu}
            className={styles.menuToggle}
          ></button>
        </span>
      </div>
      <NavMenu active={menuActive} />
      <div id='content'>{children}</div>
    </>
  );
};

export default Layout;

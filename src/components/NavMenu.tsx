import type { NavMenuStatus } from '@/types';
import styles from '../styles/Layout.module.css';
const NavMenu = ({ active }: NavMenuStatus) => {
  return <div data-active={active} className={styles.navMenu}></div>;
};

export default NavMenu;

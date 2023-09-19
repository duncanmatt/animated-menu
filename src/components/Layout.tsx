import { useState } from 'react';
import NavMenu from './NavMenu';
import Header from './Header';
import Controls from './Controls';
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
      <Header />
      <Controls handleMenu={toggleMenu} menuStatus={menuActive} />
      <NavMenu active={menuActive} />
      <div id='content'>{children}</div>
    </>
  );
};

export default Layout;

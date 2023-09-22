import { useState } from 'react';
import NavMenu from './NavMenu';
import Header from './Header';
import Controls from './Controls';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setMenuActive(!menuActive);
  };

  const resetMenu = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setMenuActive(false);
  };

  return (
    <>
      <Header />
      <Controls handleMenu={toggleMenu} menuStatus={menuActive} />
      <NavMenu resetMenu={resetMenu} active={menuActive} />
      <div id='content'>{children}</div>
    </>
  );
};

export default Layout;

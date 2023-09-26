import { useState } from 'react';
import NavMenu from '../NavMenu/NavMenu';
import Controls from '../Controls';
import Link from 'next/link';

const Header = () => {
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
    <nav className='headerWrapper'>
      <header className='header'>
        <div className='headerInner'>
          <Link href='/' className='logo'>
            <span className='headerLogo'>LOGO</span>
          </Link>
          <Controls handleMenu={toggleMenu} menuStatus={menuActive} />
        </div>
      </header>
      <NavMenu active={menuActive} resetMenu={resetMenu} />
    </nav>
  );
};

export default Header;

type NavMenuStatus = {
  active: boolean;
  resetMenu: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const NavMenu = ({ active, resetMenu }: NavMenuStatus) => {
  return (
    <nav data-active={active} className='navMenu'>
      <div className='navMenuLinks'>
        <a onClick={resetMenu} href='#content'>
          Link 1
        </a>
        <a onClick={resetMenu} href='#content'>
          Link 2
        </a>
        <a onClick={resetMenu} href='#content'>
          Link 3
        </a>
      </div>
    </nav>
  );
};

export default NavMenu;

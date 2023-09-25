type NavMenuStatus = {
  active: boolean;
  resetMenu: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const NavMenu = ({ active, resetMenu }: NavMenuStatus) => {
  return (
    <nav data-active={active} className='navMenu'>
      <div className='navMenuInner'>
        <ul className='navMenuLinks'>
          <li>
            <a onClick={resetMenu} href='#content'>
              Link 1
            </a>
          </li>
          <li>
            <a onClick={resetMenu} href='#content'>
              Link 2
            </a>
          </li>
          <li>
            <a onClick={resetMenu} href='#content'>
              Link 3
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;

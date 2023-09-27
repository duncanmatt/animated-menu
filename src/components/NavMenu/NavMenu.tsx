import Link from 'next/link';

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
            <Link onClick={resetMenu} href='/'>
              Link 1
            </Link>
          </li>
          <li>
            <Link onClick={resetMenu} href='/'>
              Link 2
            </Link>
          </li>
          <li>
            <Link onClick={resetMenu} href='/'>
              Link 3
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;

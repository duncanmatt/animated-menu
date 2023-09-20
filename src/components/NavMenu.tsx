import type { NavMenuStatus } from '@/types';

const NavMenu = ({ active }: NavMenuStatus) => {
  return (
    <div data-active={active} className='navMenu'>
      <div className='navMenuLinks'>
        <a href='http://medium.com'>Link 1</a>
        <a href='http://medium.com'>Link 2</a>
        <a href='http://medium.com'>Link 3</a>
      </div>
    </div>
  );
};

export default NavMenu;

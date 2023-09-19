import type { NavMenuStatus } from '@/types';

const NavMenu = ({ active }: NavMenuStatus) => {
  return <div data-active={active} className='navMenu'></div>;
};

export default NavMenu;

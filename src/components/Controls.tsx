type ControlsProps = {
  menuStatus: boolean;
  handleMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const NavControls = ({ menuStatus, handleMenu }: ControlsProps) => {
  return (
    <ul className='navControls'>
      <li className='navControl'>
        <button
          role='button'
          data-open={`${menuStatus}`}
          onClick={handleMenu}
          className='menuToggle'
        ></button>
      </li>
    </ul>
  );
};

export default NavControls;

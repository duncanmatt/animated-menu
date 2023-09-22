type ControlsProps = {
  menuStatus: boolean;
  handleMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Controls = ({ menuStatus, handleMenu }: ControlsProps) => {
  return (
    <div className='headerControlsWrapper'>
      <span className='headerControls'>
        <button
          data-open={`${menuStatus}`}
          onClick={handleMenu}
          className='menuToggle'
        ></button>
      </span>
    </div>
  );
};

export default Controls;

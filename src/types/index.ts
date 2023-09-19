export type NavMenuStatus = {
  active: boolean; 
}

export type LayoutProps = {
  children: React.ReactNode
}

export type ControlsProps = {
  menuStatus: boolean;
  handleMenu: (event: React.MouseEvent<HTMLButtonElement> ) => void
};
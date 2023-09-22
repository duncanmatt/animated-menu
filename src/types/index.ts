export type NavMenuStatus = {
  active: boolean; 
  resetMenu: (event: React.MouseEvent<HTMLAnchorElement> ) => void;
}

export type LayoutProps = {
  children: React.ReactNode
}

export type ControlsProps = {
  menuStatus: boolean;
  handleMenu: (event: React.MouseEvent<HTMLButtonElement> ) => void
};
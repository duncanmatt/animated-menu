import Header from '../Header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div id='content'>{children}</div>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;

import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;

import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main id='content'>{children}</main>
      <footer>{/* FOOTER CONTENT */}</footer>
    </>
  );
};

export default Layout;

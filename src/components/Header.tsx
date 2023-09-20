import Link from 'next/link';

const Header = () => {
  return (
    <div className='headerWrapper'>
      <header className='header'>
        <div className='headerInner'>
          <span className='headerLogoWrapper'>
            <Link href='/'>
              <h1 className='headerLogo'>LOGO</h1>
            </Link>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;

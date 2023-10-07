import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';

function Navbar() {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId || '');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative z-50 h-16 w-full bg-gray-50'>
      <div className='px-4 py-3 w-full h-full'>
        <div className='flex flex-row h-full w-full max-sm:space-x-2 max-sm:text-xl max-m:space-x-8 space-x-16 text-3xl text-black max-m:text-2xl text-center align-center justify-center'>
          <Link to='/'>Home</Link>
          <a href='#home-main' onClick={handleClick}>Experience</a>
          <a href='#about' onClick={handleClick}>About</a>
          <a href='/contact' onClick={handleClick}>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


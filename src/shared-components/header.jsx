import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AvasusImg from '../assets/images/avasus.png';

const Header = () => {
  const [activePage, setActivePage] = useState('/');
  let location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  const isActive = (page) => {
    if(page === '/') {
      return activePage === page ? 'text-gray-dark' : 'text-f-black';
    } else {
      return activePage.includes(page) ? 'text-gray-dark' : 'text-f-black';
    }
  }

  return(
    <header className='flex justify-center bg-white px-10 py-6 shadow-md'>
      <div className='container flex items-center justify-around'>
        <Link to={'/'}> <img src={AvasusImg} alt="Avasus" /> </Link>
        <div className='flex align-items-center gap-8 ms-12'>
          <Link to={'/'} className={ isActive('/') + ' text-xl font-semibold'}> Início </Link>
          <Link to={'coursers'} className={ isActive('coursers') + ' text-xl font-semibold'}> Cursos </Link>
        </div>
        <input type="text" className='ms-auto border rounded-md' placeholder='escreva' />
      </div>
    </header>
  )
}

export default Header;
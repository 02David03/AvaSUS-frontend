import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AvasusImg from '../assets/images/avasus.png';
import Lupa from '../assets/icons/lupa.svg';

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
    <header className='flex justify-center bg-white px-10 py-5 shadow-md'>
      <div className='container flex items-center justify-around'>
        <Link to={'/'}> <img src={AvasusImg} alt="Avasus" /> </Link>
        <div className='flex align-items-center gap-8 ms-12'>
          <Link to={'/'} className={ isActive('/') + ' text-xl font-semibold hover:text-gray-dark'}> Início </Link>
          <Link to={'coursers'} className={ isActive('coursers') + ' text-xl font-semibold hover:text-gray-dark'}> Módulos </Link>
          <Link to={'partners'} className={ isActive('partners') + ' text-xl font-semibold hover:text-gray-dark'}> Parceiros </Link>
        </div>
        <div className="flex relative group justify-center w-1/4 items-center">
          <span className="flex absolute left-0 bg-transparent rounded text-base text-gray-600 p-2">
            <img className='ps-2' src={Lupa} alt="Icone de lupa" />
          </span>
          <input
            type="text"
            placeholder="Busque por um assunto..."
            className="flex py-2 w-full ps-12 pe-3 placeholder-gray-600 text-black text-18px flex-none border-2 border-gray rounded-full focus:border-gray-dark outline-none"
          />
        </div> 
      </div>
    </header>
  )
}

export default Header;
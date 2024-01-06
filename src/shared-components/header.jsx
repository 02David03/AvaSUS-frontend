import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AvasusImg from '../assets/images/avasus.png';
import Lupa from '../assets/icons/lupa.svg';
import { SearchForm } from './search_form';

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
        <SearchForm />
        </div> 
      </div>
    </header>
  )
}

export default Header;
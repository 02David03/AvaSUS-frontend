import { Link } from 'react-router-dom';
import LaisLogo from '../assets/images/lais.png';
import UfrnLogo from '../assets/images/ufrn.png';
import Instagram from '../assets/icons/instagram.svg';
import Twitter from '../assets/icons/twitter.svg';
import Facebook from '../assets/icons/facebook.svg';

const Footer = () => {

  return(
    <footer className="w-screen">
      <div className="flex flex-col items-center justify-center bg-red py-4 md:py-8">
        <h3 className="text-white mb-2">
          Realização
        </h3>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-12 w-auto">
          <img className='scale-50 sm:scale-75 lg:scale-100' src={LaisLogo} alt="Logo Lais" />
          <img className='scale-50 sm:scale-75 lg:scale-100' src={UfrnLogo} alt="Logo Ufrn" />
        </div>
      </div>

      <div className='flex justify-center bg-black py-4 md:py-8'>
        <div className='container flex flex-col sm:flex-row items-center sm:items-start justify-around gap-2 sm:gap-0'>
          <div className='flex flex-col items-center sm:items-start w-52'>
            <img className='w-28 mb-2' src={LaisLogo} alt="Logo Lais" />
            <p className='text-white text-center sm:text-start'>Laboratório de Inovação Tecnológica em Saúde.</p>
          </div>

          <div className='flex flex-col items-center sm:items-start'>
            <h3 className='text-white mb-1 sm:mb-4'> Links Úteis </h3>
            <Link to='/' className='text-white'> Início </Link>
            <Link to='/coursers' className='text-white mt-2' > Módulos </Link>
            <Link to='/partners' className='text-white mt-2' > Parceiros </Link>
          </div>

          <div>
            <h3 className='text-white mb-4'> Redes sociais </h3>
            <div className='flex align-center justify-between gap-8'>
              <a href="https://www.instagram.com/laishuol/" rel="noreferrer" target='_blank'>
                <img src={Instagram} alt="Logo Instagram" />
              </a>

              <a href="https://twitter.com/laishuol" rel="noreferrer" target='_blank'>
                <img src={Twitter} alt="Logo Twitter" />
              </a>

              <a href="https://www.facebook.com/LAIS.HUOL/?locale=pt_BR" rel="noreferrer" target='_blank'>
                <img src={Facebook} alt="Logo Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center text-white bg-black-light py-4 md:py-8'>
        <h5> 2022 © LAIS (HUOL). Todos os direitos reservados </h5>
      </div>
    </footer>
  )
}

export default Footer;
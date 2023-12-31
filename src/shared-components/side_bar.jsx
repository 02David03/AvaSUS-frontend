import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { motion, useCycle } from "framer-motion";
import AvasusImg from '../assets/images/avasus.png';
import { SearchForm } from "./search_form";

const sidebar = {
  open: () => ({
    clipPath: `circle(2000px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(24px at 45px 45px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const variants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

function SideBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [activePage, setActivePage] = useState('/');
  const sideNavRef = useRef(null);
  let location = useLocation();

  //Change the Links style based on active page
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

  //Handle click outside the SideBar
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (sideNavRef.current !== null && !sideNavRef.current.contains(e.target)) {
        toggleOpen(); 
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

  }, [isOpen]);

  return (
    <motion.nav
      ref={sideNavRef}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="fixed w-80 top-0 left-0 bottom-0 py-20 px-4 bg-white z-40" variants={sidebar}>
        <motion.div className="flex flex-col" variants={variants}>
          <Link to={'/'} className="flex justify-center mb-6"> <img src={AvasusImg} alt="Avasus" /> </Link>

          <SearchForm />

          <Link to={'/'} className={ isActive('/') + ' text-xl font-semibold mt-6 hover:text-gray-dark'}> Início </Link>
          <Link to={'coursers'} className={ isActive('coursers') + ' text-xl font-semibold mt-2 hover:text-gray-dark'}> Módulos </Link>
          <Link to={'partners'} className={ isActive('partners') + ' text-xl font-semibold mt-2 hover:text-gray-dark'}> Parceiros </Link>
          <Link to={'transparency'} className={ isActive('transparency') + ' text-xl font-semibold mt-2 hover:text-gray-dark'}> Transparência </Link>

        </motion.div>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

const MenuToggle = ({ toggle }) => (
  <button className="bg-white fixed cursor-pointer rounded-full z-50 mt-4 ms-4 p-4" onClick={toggle}>
    <svg viewBox="0 0 20 20" className="w-6 h-6">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

const Path = props => (
  <motion.path
    className='stroke-red fill-none'
    strokeWidth="2.5"
    strokeLinecap="round"
    {...props}
  />
);

export default SideBar;
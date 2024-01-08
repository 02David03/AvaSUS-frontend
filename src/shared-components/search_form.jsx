import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lupa from '../assets/icons/lupa.svg';


export const SearchForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  return(
    <form className='w-full flex relative items-center' onSubmit={() => navigate('./coursers/' + inputValue)}>
      <span className="flex absolute left-0 bg-transparent rounded text-base text-gray-600 p-2">
        <img className='ps-2' src={Lupa} alt="Icone de lupa" />
      </span>
      
      <div className="flex w-full ">
        <input
          ref={inputRef}
          type="text"
          placeholder="Busque por um assunto..."
          onFocus={ () => setIsFocused(true)}
          // eslint-disable-next-line no-restricted-globals
          onChange={ () => setInputValue(event.target.value)}
          className={ (isFocused ? "xl:w-4/5 w-3/4 rounded-s-full border-e-0" : "w-full rounded-full" ) + " flex py-2 ps-12 pe-3 placeholder-gray-600 text-black text-18px flex-none border-2 border-gray focus:border-gray-dark outline-none"}
        />
        {
          isFocused &&
            <button className="xl:w-1/5 w-1/4 text-white rounded-e-full bg-red hover:bg-red-600">Buscar</button>
        }
      </div>
    </form>
  );
}
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  return(
    <form className='w-full' onSubmit={() => navigate('./coursers/' + inputValue)}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Busque por um assunto..."
        onFocus={ () => setIsFocused(true)}
        // eslint-disable-next-line no-restricted-globals
        onChange={ () => setInputValue(event.target.value)}
        className="flex py-2 w-full ps-12 pe-3 placeholder-gray-600 text-black text-18px flex-none border-2 border-gray rounded-full focus:border-gray-dark outline-none"
      />
      {
        isFocused &&
        <div className="absolute h-full top-0 right-0">
          <button className="h-full w-24 text-white rounded-e-full bg-red hover:bg-red-600">Buscar</button>
        </div>
      }
    </form>
  );
}
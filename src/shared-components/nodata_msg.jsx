export const NoDataMsg = ({className = ''}) =>{

  return(
    <h4 className={className}> 
      Não há dados disponíveis! Verifique se o {' '}
        <a className='text-red' rel='noreferrer' target='_blank' href="https://github.com/lais-huol/edital-001-23-modulos-educacionais">
          <u>servidor</u> 
        </a> 
      {' '} está sendo devidamente executado em seu computador.
    </h4>
  );
} 
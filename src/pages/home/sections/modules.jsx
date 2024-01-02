import { useEffect, useState } from 'react';
import { getThreeCoursers } from '../../../sevices/coursers';
import { Link } from 'react-router-dom';
import { ModuleItem } from '../components/module_item';


export default function Modules() {
  const [filter, setFilter] = useState('matriculados');
  const [coursers, setCoursers] = useState([{},{},{}]);

  useEffect(() => {
    const getCoursers = async () => {
      const data = await getThreeCoursers(filter);
      setCoursers(data);
    }

    getCoursers();
  },[filter]);


  return(
    <section className='w-full container flex flex-col my-24'>
      <h2 className="text-red text-center"> Módulos Educacionais </h2>

      <div id='filter' className="flex items-center gap-5 mt-4">
        <div 
        className={ (filter === 'matriculados' && 'border-b-4 rounded-sm border-gray-dark') + ' cursor-pointer hover:text-f-black-light'} 
        onClick={ () => setFilter('matriculados')}>
          <h4> Mais populares </h4>
        </div>
        <div 
        className={ (filter === 'avaliacao' && 'border-b-4 rounded-sm border-gray-dark') + ' cursor-pointer hover:text-f-black-light'} 
        onClick={ () => setFilter('avaliacao')}>
          <h4> Mais bem avaliados </h4>
        </div>
        <div
        className={ (filter === 'criado_em' && 'border-b-4 rounded-sm border-gray-dark') + ' cursor-pointer hover:text-f-black-light'}
        onClick={ () => setFilter('criado_em')}>
          <h4> Mais recentes </h4>
        </div>
      </div>

      {coursers.map((course, index) => {
        return( <ModuleItem key={index} course={course} />);
      })}

      <button className='bg-gray-dark rounded-2xl text-white text-2xl w-96 font-semibold self-center py-2 mt-8'>
        <Link className='flex justify-center w-full' to='coursers'> Ver mais </Link>
      </button>

    </section>
  )
}
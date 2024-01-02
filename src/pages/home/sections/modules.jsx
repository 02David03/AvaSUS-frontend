
import Peple_02 from '../../../assets/icons/people2.svg';
import Clock from '../../../assets/icons/clock.svg';
import { useEffect, useState } from 'react';
import { getThreeCoursers } from '../../../sevices/coursers';
import { Link } from 'react-router-dom';


export default function Modules() {
  const [filter, setFilter] = useState('matriculados');
  const [coursers, setCoursers] = useState([{},{},{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCoursers = async () => {
      setLoading(true);
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
        return(
          <div className="flex items-center justify-between gap-5 bg-gray-light rounded-2xl p-5 mt-4">
            <div className='flex h-full gap-4'>
              <img className='h-32 w-32 rounded-md' src={course.capa} alt="capa" />

              <div className='flex flex-col justify-around'>
                <h4> {course.titulo} </h4>
                <p className='text-sm font-semibold text-red'> {course.parceiros} </p>
              </div>
            </div>

            <span className='flex items-center gap-2'>
              <img className='w-6' src={Peple_02} alt="people" />
              <p> {course.matriculados} (humanizar) </p>
            </span>

            <span className='flex items-center gap-2'>
              <img className='w-6' src={Clock} alt="clock" />
              <p> {course.duracao} </p>
            </span>

            <button className='bg-gray-dark rounded-full text-white text-lg font-semibold text-nowrap py-2 px-8'> Ver módulo </button>
          </div>
        );
      })}

      <button className='bg-gray-dark rounded-2xl text-white text-2xl w-96 font-semibold self-center py-2 mt-8'>
        <Link className='flex justify-center w-full' to='coursers'> Ver mais </Link>
      </button>

    </section>
  )
}
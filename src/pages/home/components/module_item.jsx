import { useEffect, useState } from "react"
import Peple_02 from '../../../assets/icons/people2.svg';
import Clock from '../../../assets/icons/clock.svg';
import { Stars } from "../../../shared-components/stars";

export const ModuleItem = ({course}) => {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const decodeImg = async () => {
      try {
        setLoading(true);
        const image = new Image();
        image.src = course.capa;
        await image.decode();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    decodeImg();
  },[course, setLoading]);

  return(loading ? <LoadModule /> : <Module course={course} />);
}

const Module = ({course}) => {
  return(
    <div className="flex items-center justify-between gap-5 bg-gray-light rounded-2xl p-5 mt-4">
      <div className='flex h-full !w-3/5 gap-4'>
        <img className='h-32 w-32 rounded-md' src={course.capa} alt="capa" />

        <div className='flex flex-col justify-around'>
          <h4> {course.titulo} </h4>
          <p className='text-sm font-semibold text-red'> {course.parceiros} </p>
        </div>
      </div>

      <span className='flex items-center gap-2'>
        <img className='w-6' src={Peple_02} alt="people" />
        <p> {course.matriculados.toLocaleString()} </p>
      </span>

      <span className='flex items-center gap-2'>
        <img className='w-6' src={Clock} alt="clock" />
        <p> {course.duracao} </p>
      </span>

      <Stars rating={course.avaliacao} />

      <button className='bg-gray-dark rounded-full text-white text-lg font-semibold text-nowrap py-2 px-8'> Ver módulo </button>
    </div>
  )
}

const LoadModule = () => {
  return(
    <div className="flex animate-pulse items-center justify-between gap-5 bg-gray-light rounded-2xl p-5 mt-4">
      <div className='flex h-full gap-4'>
        <div className="flex justify-center items-center h-32 w-32 rounded-md bg-gray dark:bg-gray-dark">
          <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
          </svg>
        </div>

        <div className='flex flex-col justify-around'>
          <div className="h-4 rounded w-96 bg-gray dark:bg-gray-dark" />
          <div className="h-2 rounded w-72 bg-gray dark:bg-gray-dark" />
        </div>

      </div>

      <div className="h-6 w-full rounded bg-gray dark:bg-gray-dark" />

      <div className="h-6 w-full rounded bg-gray dark:bg-gray-dark" />

      <div className="h-6 w-full rounded bg-gray dark:bg-gray-dark" />

      <div className="h-12 w-full rounded bg-gray dark:bg-gray-dark" />
  
    </div>
  );
}


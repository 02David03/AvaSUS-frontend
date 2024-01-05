import { useEffect, useState } from "react"
import Peple_02 from '../../../assets/icons/people2.svg';
import Clock from '../../../assets/icons/clock.svg';
import { Stars } from "../../../shared-components/stars";
import { Link } from "react-router-dom";

export const CourseItem = ({course}) => {
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

  return( loading ? <LoadingComponent /> : <CourseComponent course={course} />)

}

const CourseComponent = ({course}) => {

  return(
    <div>
      <img className="w-full rounded-2xl" src={course.capa} alt="capa" />

      <h3 className="my-2"> {course.titulo} </h3>

      <p className="text-red font-semibold"> {course.parceiros}  </p>

      <div className="flex justify-between align-center pe-1">
        <span className='flex items-center gap-2'>
          <img className='w-6' src={Peple_02} alt="people" />
          <p> {course.matriculados.toLocaleString()} </p>
        </span>

        <span className='flex items-center gap-2'>
          <img className='w-6' src={Clock} alt="clock" />
          <p> {course.duracao} </p>
        </span>

        <Stars rating={course.avaliacao} gap="gap-2" />
      </div>

      <p className="line-clamp-4 font-medium my-3"> {course.resumo} </p>

      <h5 className="text-end font-semibold text-gray-dark"> <Link to={ '/coursers/' + course.id}> Ver Curso </Link> </h5>
    </div>
  );

}

const LoadingComponent = () => {
  
  return(
    <div className="animate-pulse ">
      <div className="flex justify-center items-center h-64 w-full rounded-2xl bg-gray dark:bg-gray-dark">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
      </div>

      <div className="h-6 w-full rounded bg-gray dark:bg-gray-dark my-2" />

      <div className="h-2 rounded w-1/2 bg-red dark:bg-red-200" />

      <div className="flex gap-4 align-center pe-1 my-3">
        <div className="h-4 rounded w-1/3 bg-gray dark:bg-gray-dark" />

        <div className="h-4 rounded w-1/3 bg-gray dark:bg-gray-dark" />

        <div className="h-4 rounded w-1/3 bg-gray dark:bg-gray-dark" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-3 rounded w-full bg-gray dark:bg-gray-dark" />
        <div className="h-3 rounded w-full bg-gray dark:bg-gray-dark" />
        <div className="h-3 rounded w-full bg-gray dark:bg-gray-dark" />
        <div className="h-3 rounded w-1/2 bg-gray dark:bg-gray-dark" />
      </div>

    </div>
  );
}
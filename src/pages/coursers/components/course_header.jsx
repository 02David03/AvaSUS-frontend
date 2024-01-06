import { useEffect, useState } from "react";
import BreadcrumbComponent from "../../../shared-components/breadcrumb_component";

const CourseHeader = ({course}) => {
  const [loadingImg, setLoadingImg] = useState(true);
  const breadcrumbs = [
    {name: 'Início', route: '/'},
    {name: 'Módulos', route: '/coursers'},
    {name: course.titulo, route: ''}
  ];

  useEffect(() => {
    const decodeImg = async () => {
      try {
        setLoadingImg(true)
        const image = new Image();
        image.src = course.capa;
        await image.decode();
        setLoadingImg(false);
      } catch (error) {
        console.log(error);
      }
    } 

    decodeImg();
  },[course.capa]);

  return( 
    loadingImg ?
    
    <div className="w-screen flex justify-center h-80 z-0 animate-pulse bg-gray dark:bg-gray-dark">
      <div className="flex justify-center w-full absolute top-44">
        <svg className="w-28 h-28 text-gray-200 dark:text-gray-600 z-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
      </div>

      <div className="container z-20">
        <BreadcrumbComponent breadcrumbs={breadcrumbs} color="white" className="mt-6 text-white" />

        <div className="h-1/5"></div>
        <h1 className="text-white"> {course.titulo} </h1>
        
        <h3 className="text-white mt-8"> {course.parceiros} </h3>
      </div>
    </div>
    :
    <div className='w-screen flex justify-center h-80 z-0'
    style={{backgroundImage:'url('+ course.capa +')',
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover"}} >
        <div className="absolute h-80 bg-black opacity-75 w-screen z-10" />
        <div className="container z-20">
          <BreadcrumbComponent breadcrumbs={breadcrumbs} color="white" className="mt-6 text-white" />
          
          <div className="h-1/5"></div>
          <h1 className="text-white"> {course.titulo} </h1>
          
          <h3 className="text-white mt-8"> {course.parceiros} </h3>
        </div>
    </div>
    

  );
}

export default CourseHeader;
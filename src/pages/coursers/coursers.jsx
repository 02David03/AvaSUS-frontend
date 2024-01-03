import { useEffect, useState } from "react";
import PaginationComponent from "../../shared-components/pagination_component";
import BreadcrumbComponent from "../../shared-components/breadcrumb_component";
import { Spinner } from "@material-tailwind/react";
import { getCategories, getCoursers } from "../../sevices/coursers";

function Coursers() {
  const [coursers, setCoursers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [coursersLength, setCoursersLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);


  const breadcrumbs = [
    {name: 'Início', route: '/'},
    {name: 'Módulos', route: ''}
  ];

  useEffect(() => {
    const getAllCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    }
    
    const getCoursersLength = async () => {
      const data = await getCoursers();
      setCoursersLength(data.length);
    }

    getCoursersLength();
    getAllCategories();
  },[]);

  
  useEffect(() => {
    const fetchCoursers = async () => {
      const data = await getCoursers('', 6, currentPage);
      setCoursers(data);
    }

    fetchCoursers();

  }, [currentPage]);


  return(
    <div className="container">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} className="mt-6" />

      <h1 className="text-red my-6">Módulos Educacionais</h1>

      <h5 className="text-f-black-light mb-4"> <i> 6 de {coursersLength} resultados </i> </h5>

      <div className="grid grid-cols-3 items-baseline gap-6">
        {coursers.map((course, index) => {
          return(
            <div key={index} className="flex flex-col items-center">
            </div>
          )
        })}
      </div>

      <PaginationComponent 
        className="flex justify-center mt-8 mb-32"
        itemsCount={coursersLength}
        itemsPerPage={6}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>

    </div>
  )
}

export default Coursers;
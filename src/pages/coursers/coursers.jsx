import { useEffect, useState } from "react";
import PaginationComponent from "../../shared-components/pagination_component";
import BreadcrumbComponent from "../../shared-components/breadcrumb_component";
import { Spinner } from "@material-tailwind/react";
import { getCategories, getCourseByTitle, getCoursers } from "../../sevices/coursers";
import { CourseItem } from "./components/course_item";
import { useParams } from "react-router-dom";

function Coursers() {
  const [coursers, setCoursers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryActive, setCategoryActive] = useState('Todos');
  const [coursersLength, setCoursersLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  let { search } = useParams();

  const breadcrumbs = [
    {name: 'Início', route: '/'},
    {name: 'Módulos', route: ''}
  ];

  useEffect(() => {
    const getAllCategories = async () => {
      if(!search) {
        const data = await getCategories();
        data.push('Todos');
        setCategories(data); 
      }
    }

    getAllCategories();
  }, [search]);

  useEffect(() => {
    const getCoursersLength = async () => {
      setLoading(true);
      let data = [];
      if(search) {
        data = await getCourseByTitle(search); 
      } else {
        data = await getCoursers(categoryActive);
      } 
      setCoursersLength(data.length);
      setLoading(false);
    }

    getCoursersLength();
  },[categoryActive, search]);

  
  useEffect(() => {
    const fetchCoursers = async () => {
      let data = [];
      if(search) {
        data = await getCourseByTitle(search, 6, currentPage); 
      } else {
        data = await getCoursers(categoryActive, 6, currentPage);
      } 
      setCoursers(data);
    }

    fetchCoursers();
  }, [currentPage, categoryActive, search]);

  const filterByCategory = (category) => {
    setCategoryActive(category);
    setCurrentPage(1);
  }

  return(
    loading ? <Spinner className="h-32 w-16 text-red/50 mt-40" /> : 
    <div className="container">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} className="mt-6" />

      <h1 className="text-red text-center my-6">Módulos Educacionais</h1>

      { search ? 
        <h4 className="text-gray-dark my-2"> Resultados da pesquisa por <i> "{search}" </i>  </h4>
        :
        <div id='filter' className="flex items-center flex-wrap gap-x-5 gap-y-2 mt-4">
          {categories.map((category, index) => {
            return(
              <div key={index} 
              className={ (categoryActive === category && 'border-b-4 text-gray-dark rounded-sm border-gray-dark') + ' cursor-pointer hover:text-f-black-light'} 
              onClick={ () => filterByCategory(category)}>
                <h4 className="text-nowrap"> {category} </h4>
              </div>
            );})
          }
        </div>
      }

      <h5 className="text-f-black-light my-5"> <i> {coursers.length} de {coursersLength} resultados </i> </h5>

      <div className="grid grid-cols-3 items-baseline gap-6">
        {coursers.map((course, index) => {
          return(
            <div key={index}> <CourseItem course={course} /> </div>
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
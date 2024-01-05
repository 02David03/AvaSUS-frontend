import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadcrumbComponent from "../../shared-components/breadcrumb_component";
import { getCourseById } from "../../sevices/coursers";
import Peple_02 from '../../assets/icons/people2.svg';
import Clock from '../../assets/icons/clock.svg';
import Callendar from '../../assets/icons/callendar.svg';
import { Stars } from "../../shared-components/stars";


export default function CourseDetails() {
  const [course, setCourse] = useState({});
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [loading, setLoading] = useState(true);

  let { courseId } = useParams();

  useEffect(() => {
    const getCourse = async () => {
      setLoading(true);
      const data = await getCourseById(courseId);
      setCourse(data);
      setBreadcrumbs([
        {name: 'Início', route: '/'},
        {name: 'Módulos', route: '/coursers'},
        {name: data.titulo, route: ''}
      ]);
      setLoading(false);
    }

    getCourse();
  }, [courseId]);

  return(
    loading ? <p> Carregando ... </p> :
    <>
      <div className='w-screen flex justify-center h-80 z-0' 
      style={{backgroundImage:'url('+ course.capa +')',
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover"}} >
          <div className="absolute h-80 bg-black opacity-50 w-screen z-10" />
          <div className="container z-20">
            <BreadcrumbComponent breadcrumbs={breadcrumbs} color="white" className="mt-6 text-white" />

            <h1 className="text-white mt-8"> {course.titulo} </h1>

            <h2 className="text-white mt-4"> {course.parceiros} </h2>
          </div>
      </div>

      <div className="container">
        <h1 className="text-red text-center mt-4"> Informações Gerais do Curso </h1>
        
        <div className="flex items-center justify-between my-8 w-full">
          <div className="flex items-center gap-3">
            <img src={Clock} alt="relógio" />
            <p className="font-bold text-lg"> {course.duracao} </p>
          </div>

          <div className="flex items-center gap-3">
            <img src={Callendar} alt="calendario" />
            <p className="font-bold text-lg"> Desde {course.criado_em} </p>
          </div>

          <div className="flex items-center gap-3">
            <img src={Peple_02} alt="Pessoas" />
            <p className="font-bold text-lg"> {course.matriculados.toLocaleString()} alunos matriculados </p>
          </div>

          <Stars rating={course.avaliacao} ratingsNumber={course.numero_avaliacoes} />
        </div>

        <h3 className="text-red text-center mb-3"> Sobre o curso </h3>
        <p> {course.sobre} </p>

        <h3 className="text-red text-center my-3"> Objetivos </h3>
        <p className="font-semibold mb-2"> Objetivo Geral</p>
        <p> {course.objetivo_geral} </p>

        <p className="font-semibold mt-5 mb-2"> Objetivos Especificos</p>
        <p> {course.objetivo_especifico} </p>

        <h3 className="text-red text-center my-3"> Recursos educacionais </h3>
        {course.conteudo.map((content, index) => {
          return( <p key={index}> {content} </p> )
        })}
        

        <h3 className="text-red text-center my-12"> Créditos </h3>
      </div>
    </>
  );
}
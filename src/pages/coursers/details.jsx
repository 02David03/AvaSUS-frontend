import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../sevices/coursers";
import { Spinner } from "@material-tailwind/react";
import { Stars } from "../../shared-components/stars";
import CourseHeader from "./components/course_header";
import Peple_02 from '../../assets/icons/people2.svg';
import Clock from '../../assets/icons/clock.svg';
import Callendar from '../../assets/icons/callendar.svg';


export default function CourseDetails() {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);

  let { courseId } = useParams();

  useEffect(() => {
    const getCourse = async () => {
      setLoading(true);
      const data = await getCourseById(courseId);
      setCourse(data);
      setLoading(false);
    }

    getCourse();
  }, [courseId]);

  return(
    loading ? <Spinner className="h-32 w-16 text-red/50 mt-40" /> : 
    <>

    <CourseHeader course={course} />
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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../sevices/coursers";
import { Spinner } from "@material-tailwind/react";
import { Stars } from "../../shared-components/stars";
import { SpecficGoals } from "./components/specifc_goals";
import DecodeImg from "../../shared-components/decode_img";
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

  const handleDuration = (duration) => {
    const durationExtended = duration > 1 ? duration.replace('h',' horas') : duration.replace('h',' hora')
    return durationExtended;
  }

  return(
    loading ? <Spinner className="h-32 w-16 text-red/50 mt-40" /> : 
    <>
    <CourseHeader course={course} />
      <div className="container sm:p-0 p-4">
        <h1 className="text-red text-center mt-4"> Informações Gerais do Curso </h1>
        
        <div className="grid xl:grid-cols-5 grid-cols-2 my-8 gap-3 w-full">
          <div className="flex items-center md:justify-center justify-normal gap-3">
            <img src={Clock} alt="relógio" />
            <p className="font-bold text-lg"> {handleDuration(course.duracao)} </p>
          </div>

          <div className="flex items-center md:justify-center justify-normal gap-3">
            <img src={Callendar} alt="calendario" />
            <p className="font-bold text-lg"> Desde {course.criado_em} </p>
          </div>

          <div className="flex items-center md:justify-center justify-normal gap-3">
            <img src={Peple_02} alt="Pessoas" />
            <p className="font-bold text-lg"> {course.matriculados.toLocaleString()} alunos matriculados </p>
          </div>

          <Stars rating={course.avaliacao} className="xl:col-span-2 col-span-1 flex justify-center items-center gap-2" ratingsNumber={course.numero_avaliacoes} />
        </div>

        <h3 className="text-red text-center mb-3"> Sobre o curso </h3>
        <p> {course.sobre} </p>

        <h3 className="text-red text-center my-3"> Objetivos </h3>
        <p className="font-semibold mb-2"> Objetivo Geral</p>
        <p> {course.objetivo_geral} </p>

        <SpecficGoals goals={course.objetivo_especifico} />

        <h3 className="text-red text-center my-3"> Recursos educacionais </h3>
        {course.conteudo.map((content, index) => {
          return( <p key={index}> {content} </p> )
        })}
        

        <h3 className="text-red text-center my-12"> Créditos </h3>
        <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center place-content-center gap-4 mb-8">
          {course.creditos.map((credit, index) => {
            return(
              <div className="flex items-center justify-center h-40 w-full" key={index}>
                <DecodeImg loadingClassName='h-full' imgClassName="w-auto h-full" imgURL={credit.capa} />
              </div>
            )
          })
          }
        </div>
      </div>
    </>
  );
}
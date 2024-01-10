
//Icons
import People from '../../../assets/icons/people2.svg';
import Subscription from '../../../assets/icons/subscription.svg';
import CourseHat from '../../../assets/icons/course-hat.svg';
import Certification from '../../../assets/icons/certification.svg';
import CourseInvestiment from '../../../assets/icons/course-investiment.svg';
import StudentInvestiment from '../../../assets/icons/student-investiment.svg';


export const GeneralCard = ({generalData}) => {

  return(
    <div className="bg-gray-light rounded-2xl shadow-md w-full flex flex-col items-center mb-6 gap-5 p-6">
      <h3 className="text-red"> Dados Gerais</h3>
      
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        <div className='flex items-center flex-col'>
          <span className='flex items-center gap-2'>
            <img src={People} alt="pessoas" />
            <h4 className='text-center'> Total de usuários registrados </h4>
          </span>
          <h2 className='text-red'> {generalData.usuarios_registrados.toLocaleString()} </h2>
        </div>

        <div className='flex items-center flex-col'>
          <span className='flex items-center gap-2'>
            <img src={Subscription} alt="inscrições" />
            <h4 className='text-center'> Inscrições realizadas </h4>
          </span>
          <h2 className='text-red'> {generalData.incricoes_realizadas.toLocaleString()} </h2>
        </div>

        <div className='flex items-center flex-col'>
          <span className='flex items-center gap-2'>
            <img src={CourseHat} alt="Chapéu de curso" />
            <h4 className='text-center'> Cursos ativos </h4>
          </span>
          <h2 className='text-red'> {generalData.cursos_ativos.toLocaleString()} </h2>
        </div>

        <div className='flex items-center flex-col'>
          <span className='flex items-center gap-2'>
            <img src={Certification} alt="certificação" />
            <h4 className='text-center'> Direito à Certificação </h4>
          </span>
          <h2 className='text-red'> {generalData.direito_certificacao.toLocaleString()} </h2>
        </div>
        
        <div className='flex items-center flex-col lg:col-span-2'>
          <span className='flex items-center gap-2'>
            <img src={CourseInvestiment} alt="investimento" />
            <h4 className='text-center'> Investimento médio por curso </h4>
          </span>
          <h2 className='text-red'> {generalData.investimento_medio_curso} </h2>
        </div>

        <div className='flex items-center flex-col lg:col-span-2'>
          <span className='flex items-center gap-2'>
            <img src={StudentInvestiment} alt="students" />
            <h4 className='text-center'> Investimento médio por aluno </h4>
          </span>
          <h2 className='text-red'> {generalData.investimento_medio_aluno} </h2>
        </div>

      </div>
    </div>
  )
}
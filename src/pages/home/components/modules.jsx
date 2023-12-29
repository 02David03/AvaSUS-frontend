
import Teste from '../../../assets/images/img_teste.png';
import Peple_02 from '../../../assets/icons/people2.svg';
import Clock from '../../../assets/icons/clock.svg';


export default function Modules() {
  return(
    <section className='flex justify-center my-24'>
      <div className='container flex flex-col'>
        <h2 className="text-red text-center"> Módulos Educacionais </h2>

        <div id='filter' className="flex items-center gap-5 mt-4">
          <h4> Mais populares </h4>
          <h4> Mais bem avaliados </h4>
          <h4> Mais recentes </h4>
        </div>

        <div className="flex items-center justify-between gap-5 bg-gray-light rounded-2xl p-5 mt-4">
          <div className='flex h-full gap-4'>
            <img className='h-32 w-32 rounded-md' src={Teste} alt="teste" />

            <div className='flex flex-col justify-around h-full'>
              <h4> Sífilis: Aspectos Clínicos e Diagnóstico Diferencial </h4>
              <p className='text-sm text-red'> LAIS/EBSERH </p>
            </div>
          </div>

          <span className='flex items-center gap-2'>
            <img className='w-6' src={Peple_02} alt="people" />
            <p> 27.458 </p>
          </span>

          <span className='flex items-center gap-2'>
            <img className='w-6' src={Clock} alt="clock" />
            <p> 4h30min </p>
          </span>

          <button className='bg-gray-dark rounded-full text-white text-lg font-semibold py-2 px-8'> Ver módulo </button>
        </div>

        <button className='bg-gray-dark rounded-2xl text-white text-2xl w-96 font-semibold self-center py-2 mt-8'> Ver mais </button>

      </div>
    </section>
  )
}
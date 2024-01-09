import { useEffect, useState } from 'react';
import { VictoryPie, VictoryTooltip } from "victory"
export const UsersByCoursers = ({usersPerCourse}) => {
  const [data, setData] = useState([]);
  const colors = ["white", "#D2202C", "#707070","#2F2E41" ]

  useEffect(() => {
    console.log(usersPerCourse);
    setData(usersPerCourse)
  },[usersPerCourse])

  return(
    <div className='bg-gray-light rounded-2xl shadow-md w-full flex flex-col items-center gap-5 px-10 py-6'>
      <h3 className="text-red"> Usuários por curso</h3>
      <VictoryPie 
        colorScale={colors}
        data={data}
        labelComponent= {<VictoryTooltip dy={0} centerOffset={{ x: 25 }}/>  }
        x="curso"
        y="usuarios"
      />
      <div className='flex flex-col justify-start w-full'>
        {data.map((item, index) => {
          return(
            <div className='flex items-center gap-2 mb-2' key={index}>
              <span className='w-5 h-5 rounded-full' style={{backgroundColor: colors[index]}} />
              <h5 className='font-semibold'> {item.curso}: {item.usuarios.toLocaleString()} </h5>
            </div>
          );
        })}
      </div>
    </div>
  )
}
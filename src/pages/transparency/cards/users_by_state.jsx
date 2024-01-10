import { BrazilMap } from "../components/brazil-map"
export const UsersByState = ({allUsers, usersPerState}) => {
  const colors = ["white", "#D2202C", "#707070","#2F2E41" ]

  return(
    <div className='bg-gray-light rounded-2xl shadow-md w-full flex flex-col items-center gap-5 px-10 py-6'>
      <h3 className="text-red"> Usuários por Estado</h3>

      <BrazilMap usersPerState={usersPerState} allUsers={allUsers} />
    </div>
  )
}
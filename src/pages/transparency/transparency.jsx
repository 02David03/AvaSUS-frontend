import { useEffect, useState } from "react";
import { getTransparency } from "../../sevices/transparency";
import { Spinner } from "@material-tailwind/react";
import { GeneralCard } from "./cards/general";
import { UsersByCoursers } from "./cards/users_by_coursers";
import { UsersByState } from "./cards/users_by_state";
import BreadcrumbComponent from "../../shared-components/breadcrumb_component";


export default function Transparency() {
  const [generalData, setGeneralData] = useState({});
  const [usersPerCourse, setUsersPerCourse] = useState([]);
  const [usersPerState, setUsersPerState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransparency = async() => {
      const data = await getTransparency();
      if(data) {
        setGeneralData(data.dados_gerais);
        setUsersPerCourse(data.usuarios_por_curso);
        setUsersPerState(data.usuarios_por_estado);
      }
      setLoading(false);
      console.log(data);
    }

    fetchTransparency();
  },[]);

  const breadcrumbs = [
    {name: 'Início', route: '/'},
    {name: 'Transparência', route: ''}
  ];
  return(
    loading ? <Spinner className="h-32 w-16 text-red/50 mt-40" /> :

    <div className="container sm:p-0 p-4">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} className="lg:mt-6 sm:mt-16 mt-12"/>

      <h1 className="text-red text-center my-6">Transparência</h1>
        <GeneralCard generalData={generalData} />
        <div className="grid grid-cols-2 gap-6 mb-40">
          <UsersByCoursers usersPerCourse={usersPerCourse} />
          <UsersByState usersPerState={usersPerState} />
        </div>

    </div>
  )
}
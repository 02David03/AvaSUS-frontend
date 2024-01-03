import { useEffect, useState } from "react";
import PaginationComponent from "../../shared-components/pagination_component";
import { getPartners, getPartnersbyPage } from "../../sevices/partners";
import { Spinner } from "@material-tailwind/react";
import DecodeImg from "./components/decode_img";
import BreadcrumbComponent from "../../shared-components/breadcrumb_component";

function Partners() {
  const [loading, setLoading] = useState(true);
  const [partners, setPartners] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [partnersLength, setPartnersLength] = useState(0);
  const breadcrumbs = [
    {name: 'Início', route: '/'},
    {name: 'Parceiros', route: ''}
  ];

  useEffect(() => {
    const getPartnersLength = async () => {
      const data = await getPartners();
      setPartnersLength(data.length);
    }

    getPartnersLength();
    setLoading(false);
  },[]);

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      const data = await getPartnersbyPage(currentPage);
      setPartners(data);
      setLoading(false);
    }

    fetchPartners();
  }, [currentPage]);

  return(
    loading ? <Spinner className="h-32 w-16 text-red/50 mt-40" /> : 
    <div className="container">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} className="mt-6"/>

      <h1 className="text-red my-6">Nossos parceiros</h1>

      <h5 className="text-f-black-light"> <i> 6 de {partnersLength} resultados </i> </h5>
      
      <div className="grid grid-cols-3 items-baseline gap-6">
        {partners.map((partner, index) => {
          return(
            <div key={index} className="flex flex-col items-center">
              <DecodeImg imgURL={partner.capa} />
              <h3 className="text-center"> {partner.titulo} </h3>
            </div>
          )
        })}
      </div>

      <PaginationComponent 
        className="flex justify-center mt-8 mb-32"
        itemsCount={partnersLength}
        itemsPerPage={6}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>
    </div>
  )
}



export default Partners;
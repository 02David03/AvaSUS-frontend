import { useEffect, useState } from "react";
import PaginationComponent from "../../shared-components/pagination_component";
import { getPartners, getPartnersbyPage } from "../../sevices/partners";
import { Spinner } from "@material-tailwind/react";
import DecodeImg from "../../shared-components/decode_img";
import BreadcrumbComponent from "../../shared-components/breadcrumb_component";
import { NoDataMsg } from "../../shared-components/nodata_msg";

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
      if(data) setPartnersLength(data.length);
    }

    getPartnersLength();
    setLoading(false);
  },[]);

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      const data = await getPartnersbyPage(currentPage);
      if(data) setPartners(data);
      setLoading(false);
    }

    fetchPartners();
  }, [currentPage]);

  return(
    loading ? <Spinner className="h-32 w-16 text-red/50 mt-40" /> :
    partnersLength !== 0 ? 
    <div className="container sm:p-0 p-4">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} className="lg:mt-6 sm:mt-16 mt-12"/>

      <h1 className="text-red my-6">Nossos parceiros</h1>

      <h5 className="text-f-black-light"> <i> {partners.length} de {partnersLength} resultados </i> </h5>
      
      <div className="grid lg:grid-cols-3 grid-cols-2  items-baseline gap-6">
        {partners.map((partner, index) => {
          return(
            <div key={index} className="flex flex-col items-center">
              <DecodeImg imgClassName="w-full h-full border-b-3 border-red pb-3 mb-3"
              loadingClassName="h-52" imgURL={partner.capa} />
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
    : <NoDataMsg className='text-center text-gray-dark my-40'/>
  )
}



export default Partners;
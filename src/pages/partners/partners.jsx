import { useEffect, useState } from "react";
import VisualRoot from "../../shared-components/visual_root";
import PaginationComponent from "../../shared-components/pagination_component";
import { getPartners, getPartnersbyPage } from "../../sevices/partners";
import { Spinner } from "@material-tailwind/react";

function Partners() {
  const [loading, setLoading] = useState(true);
  const [partners, setPartners] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [partnersLength, setPartnersLength] = useState(0);

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
    }

    fetchPartners();
    setLoading(false);
  }, [currentPage]);

  return(
    loading ? <Spinner className="h-16 w-16 text-red/50 mt-40" /> : 
    <div className="container">
      <VisualRoot content="Início / Parceiros" className="mt-6"/>

      <h1 className="text-red my-6">Nossos parceiros</h1>

      <h5 className="text-f-black-light"> <i> 6 de {partnersLength} resultados </i> </h5>
      
      <div className="grid grid-cols-3 items-baseline gap-6">
        {partners.map((partner, index) => {
          return(
            <div key={index} className="flex flex-col items-center">
              <img className="w-full border-b-3 border-red pb-3 mb-3" src={partner.capa} alt="capa" />
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
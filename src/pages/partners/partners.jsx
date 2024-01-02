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

const DecodeImg = ({imgURL}) => {
  const [loadingImg, setLoadingImg] = useState(true);
  useEffect(() => {
    const decodeImg = async () => {
      try {
        setLoadingImg(true)
        const image = new Image();
        image.src = imgURL;
        await image.decode();
        setLoadingImg(false);
      } catch (error) {
        console.log(error);
      }
      
    } 

    decodeImg();
  },[imgURL]);

  return( 
    loadingImg ? 
    <div class="flex animate-pulse items-center justify-center h-52 w-full rounded bg-gray-light dark:bg-gray">
      <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
      </svg>
    </div>
    :
    <img className="w-full border-b-3 border-red pb-3 mb-3"  src={imgURL} alt="capa" />
  );
}

export default Partners;
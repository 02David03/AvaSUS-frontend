import { Link } from "react-router-dom"
export default function MainPartners() {
  const partners = [
    {title: 'Governo do RN', description:'Governo do Estado do Rio Grande do Norte.'},
    {title: 'SESAP', description:'Secretaria de Saúde Pública do Estado do Rio Grande do Norte.'},
    {title: 'UFRN', description:'Universidade Federal do Rio Grande do Norte.'},
    {title: 'HOUL', description:'Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte).'}
  ]

  return(
    <section className="mb-28">
      <h2 className="text-red text-center mb-5"> 
      <Link to='partners'> Parceiros </Link> </h2>
      <div className="container grid md:grid-cols-4 grid-cols-2 bg-gray-light p-4 items-baseline gap-4 rounded-2xl">
        {partners.map((partner, index) => {
          return(
            <div key={index} className="flex flex-col items-center">
              <h3 className="mb-3 text-center"> {partner.title} </h3>
              <h5 className="text-gray-dark text-wrap font-semibold text-center">
                {partner.description}
              </h5>
            </div>
          )
        })}
      </div>
    </section>
  )
}
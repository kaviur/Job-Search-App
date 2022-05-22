import { useEffect, useState } from 'react'
import { get } from '../../api'

const OfferDetail = ({id}) => {

  const [offer, setOffer] = useState({})

  useEffect(() => {
    get(`/api/offer/id/${id}`)
    .then(data => {
      console.log(data)
      setOffer(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [id])

  return (
    <div>
        <h3>Detalle de la oferta</h3>
        <p>{offer.title}</p>
        <p>{offer.description}</p>
        <p>{offer.salary}</p>
    </div>
  )
}

export default OfferDetail
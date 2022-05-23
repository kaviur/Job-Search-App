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
        <p>{offer.title}</p>
        <p><strong>Descripción:</strong> {offer.description}</p>
        <p><strong>Salario:</strong> {offer.salary}</p>
      
    </div>
  )
}

export default OfferDetail
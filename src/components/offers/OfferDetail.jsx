import { useEffect, useState } from 'react'
import { get } from '../../api'
import { putWithToken } from '../../api'
import Swal from 'sweetalert2'

const OfferDetail = ({id}) => {

  const [offer, setOffer] = useState({})
  const [ error, setError ] = useState({
    isError: false,
    message: '',
    loading: false
  });

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

  const appyToJob = (id) => {
    putWithToken("/api/offer/addApplicant", {idOffer: id})
    .then(data => {
      console.log(data)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has aplicado a esta oferta',
        showConfirmButton: false,
        timer: 1800
      })
    })
    .catch(err => {
      console.log(err)
      setError({
        isError: true,
        message: err.response.data.message,
        loading: false
      })
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data.message,
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }

  return (
    <div>
      <div className="btn" onClick={()=>appyToJob(offer._id)}>Aplicar</div>
        <h3>Detalle de la oferta</h3>
        <p>{offer.title}</p>
        <p>{offer.description}</p>
        <p>{offer.salary}</p>
        <p>{offer.english_level}</p>
        <p>{offer._id}</p>
    </div>
  )
}

export default OfferDetail
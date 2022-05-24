import { useEffect, useState, useContext } from 'react'
import { get } from '../../api'
import { putWithToken } from '../../api'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { userCont } from '../../context/UserContext'

const OfferDetail = ({id}) => {

  const { user } = useContext(userCont);
  const [offer, setOffer] = useState({})
  const [ error, setError ] = useState({
    isError: false,
    message: '',
    loading: false
  });
  
  const navigate = useNavigate();


  useEffect(() => {
    get(`/api/offer/id/${id}`)
    .then(data => {
     // console.log(data)
      setOffer(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [id])

  const appyToJob = (id) => {
    putWithToken("/api/offer/addApplicant", {idOffer: id})
    .then(data => {
     // console.log(data)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has aplicado a esta oferta',
        showConfirmButton: false,
        timer: 1800
      })

      navigate("/dashboard",{
        replace:true
      })
      
      //Swal.close();
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
        text: err.response.data.message
      })
    })
  }

  return (
    <>
        <p><strong>Título:</strong> {offer.title}</p>
        <p><strong>Descripción:</strong> {offer.description}</p>
        <p><strong>Salario:</strong> {offer.salary}</p>
        <p><strong>Nivel de inglés:</strong> {offer.english_level}</p>

        {/* aqui validar el rol, si es reclutador NO puede ver el boton aplicar */}
        {user.logged&&user.role===1&&<div className='row'>
          <div type="button" className="btn btn-primary" onClick={()=>appyToJob(offer._id)}>Aplicar</div>
        </div>}

        
    </>
  )
}

export default OfferDetail
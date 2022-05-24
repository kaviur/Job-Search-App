import React from 'react'
import { useState, useEffect } from 'react'
import { getWithToken, putWithToken } from '../../../api'
import OfferDetail from '../../offers/OfferDetail'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const MyApplications = () => {

  const [myOffers, setMyOffers] = useState([])
  const [idOffer] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    getWithToken('/api/offer/applicantOffers')
    .then(({data}) => {
      setMyOffers(data)
    })
}, [])


const unapplyToJob = (id) => {
  putWithToken("/api/offer/unApply", {idOffer: id})
  .then(data => {
   // console.log(data)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Has desaplicado a esta oferta',
      showConfirmButton: false,
      timer: 1800
    })

    navigate("/dashboard",{
      replace:true
    })
   
  })
  .catch(err => {
    console.log(err)
  })
}



  return (
    <>
      <div className='marginT '>
        <div className='row justify-content-center'>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-heading">
                      <div className="row justify-content-center">
                        <h4 className="title">Mis <span>Postulaciones</span></h4>
                      </div>
                  </div>
                  <div className="panel-body table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Título</th>
                          <th>Salario</th>
                          <th>Accion</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          myOffers.map((offer) => (
                              <tr key={offer._id}>
                                <td>{offer.title}</td>  
                                <td>{offer.salary} </td>
                                <td> <div type="button" data-dismiss="modal" data-backdrop="false" className="btn btn-danger" onClick={()=>unapplyToJob(offer._id)}>Desaplicar</div></td>
                              </tr>
                            ))
                        }  
                                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> Detalle de la oferta</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {
                    idOffer && (
                      <OfferDetail id={idOffer} />
                    )
                  }
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

import React from 'react'
import { getWithToken, deleteWithToken } from '../../../api'
//import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { offerCont } from '../../../context/OfferContext'
import { userCont } from '../../../context/UserContext'
import OfferDetail from '../../offers/OfferDetail'
const Swal = require('sweetalert2')
//import '../../../css/offers.css'

const MyOfferts = () => {
    
    // const { offers, removeOffer } = useContext(offerCont)
    const [idOffer, setIdOffer] = useState("")
    const [listOffers, setListOffers] = useState([])
    const [showPostulants, setShowPostulants] = useState(false)
    const [postulants, setPostulants] = useState([])
    const { offers, removeOffer } = useContext(offerCont)
    const { user } = useContext(userCont)

    useEffect(() => {
        getWithToken('/api/offer/recruiterOffers')
        .then(({data}) => {
        setListOffers(data)
        })
    }, [])

    //eliminar una oferta
    const onDelete = (id) => {

        Swal.fire({
            title:"¿Estás seguros de eliminar esta oferta?",
            text: "si la eliminas no la podrás recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteWithToken(`/api/offer/delete/${id}/${user.id}`)
                .then(({data}) => {
                    console.log(data)
                    if(data.success === false){
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: data.message
                        })
                        console.log(data.error);
                    }else{
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        removeOffer(id)
                    }
                })
            }
        })
    }


    const menuPostulantes = (postulantsArray) => {
        setShowPostulants(true)
        setPostulants(postulantsArray)
    }

    //627e5825053c3494d3d95e6e    627e5c423cba185d4424745b    627ee346fe54cb202784ee7e  627ee367fe54cb202784ee82   62819bc06222444dc6915371

    return (
        <div className='marginT '>
            <div className='row justify-content-center'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="panel">
                                <div className="panel-heading">
                                    <div className="col-md-6 text-left">
                                        <div className="btn_group">
                                            <a type='button' href='/addOffer' className="btn btn-default" title="Reload"><i className="fa fa-sync-alt"></i>Cargar oferta</a>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <h4 className="title">Mis <span>Publicaciones</span></h4>
                                    </div>
                                </div>

                                <div className="panel-body table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Título</th>
                                                <th>Acción</th>
                                                <th>N° de postulados</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            listOffers.map((offer) => (
                                                <tr key={offer._id}>
                                                    <td>{offer.title}</td>
                                                    <td> 
                                                        {/* <Link to={`/editOffer/${offer._id}`} className="btn btn-warning">Editar</Link> */}
                                                        {/* <button type="button" onClick={() => removeOffer(offer._id)} className="btn btn-danger">Eliminar</button> */}
                                                        <button type="button" onClick={() =>onDelete(offer._id)} className="btn btn-danger">Eliminar</button>
                                                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setIdOffer(offer._id)} className="btn btn-info2">Ver detalle</button>
                                                    </td>
                                                    <td className='text-center'><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3" onClick={() => menuPostulantes(offer.applicants)} className="btn btn-success">{offer.applicants.length}</button></td>
                                                    <td></td>
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

           
                {/* Modal: detalle de la oferta */}
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


                {/* Modal: Datos del postulante */}

                <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"> Datos del postulante </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            {
                                showPostulants && 
                            
                                <div className='col-md-10'>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nombre completo</th>
                                                <th scope="col">Correo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            postulants.map((postulant) => (
                                                <tr key={postulant._id}>
                                                    <td>{postulant.name}</td>
                                                    <td>{postulant.email}</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
          
            </div>
        </div>
    );
}

export default MyOfferts
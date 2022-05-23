import React from 'react'
import { getWithToken, deleteWithToken } from '../../../api'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { offerCont } from '../../../context/OfferContext'
import { userCont } from '../../../context/UserContext'
import OfferDetail from '../../offers/OfferDetail'
const Swal = require('sweetalert2')

const MyOfferts = () => {
    
    const { offers, removeOffer } = useContext(offerCont)
    const { user } = useContext(userCont)
    const [idOffer, setIdOffer] = useState("")
    const [listOffers, setListOffers] = useState([])
    const [showPostulants, setShowPostulants] = useState(false)
    const [postulants, setPostulants] = useState([])

    useEffect(() => {
        getWithToken('/api/offer/recruiterOffers')
        .then(({data}) => {
        console.log("lista de ", data)
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
        <div>
            <h1>Hola {user.name}, estas son tus publicaciones</h1>
            <h1>{user.id}</h1>
            <h1></h1>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col">
                                <a type='button' href="/addOffer">Cargar Oferta</a>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            listOffers.map((offer) => (
                                <tr key={offer._id}>
                                    <th scope="row" ></th>
                                    <td>{offer.title}</td>
                                    <td> 
                                        <Link to={`/editOffer/${offer._id}`} className="btn btn-warning">Editar</Link>
                                        <button type="button" onClick={() =>onDelete(offer._id)} className="btn btn-danger">Eliminar</button>
                                        <button type="button" onClick={() => setIdOffer(offer._id)} className="btn btn-info">Ver detalle</button>
                                    </td>
                                    <td><button type="button" onClick={() => menuPostulantes(offer.applicants)} className="btn btn-danger">{offer.applicants.length}</button></td>
                                </tr>
                              ))
                        }                
                        </tbody>
                    </table>
                </div>    
                {
                    showPostulants && 
                    <div className='col-md-6'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
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
                   
                {
                    idOffer && (
                        <OfferDetail id={idOffer} />
                    )
                }
            </div>
        </div>
    );
}

export default MyOfferts
import React from 'react'
import { getWithToken } from '../../../api'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MyOfferts = () => {

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

    const menuPostulantes = (postulantsArray) => {
        setShowPostulants(true)
        setPostulants(postulantsArray)
    }


    return (
        <div>
            <h1>Mis publicaciones</h1>
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
                                        <button type="button" className="btn btn-danger">Eliminar</button>
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
                   

            </div>
        </div>
    );
}

export default MyOfferts
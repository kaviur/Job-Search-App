
import React from 'react'
import { useState, useEffect } from 'react'
// import { offerCont } from '../../context/OfferContext'
import OfferDetail from './OfferDetail'
import { getWithToken } from '../../api'


export const ListOffers = () => {

    // const { offers, removeOffer } = useContext(offerCont)
    const [idOffer, setIdOffer] = useState("")

    const [listOffers, setListOffers] = useState([])


    useEffect(() => {
        getWithToken('/api/offer')
        .then(({data}) => {
        setListOffers(data)
        })
    }, [])

    return (
        <div className='marginT'>
            <div className='row justify-content-center'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="panel">
                                <div className="panel-heading">
                                    <div className="row justify-content-center">
                                        <h4 className="title">Lista de <span>Ofertas</span></h4>
                                    </div>
                                </div>

                                <div className="panel-body table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Título</th>
                                                <th>Acción</th>
                                                <th>Lenguaje</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            listOffers.map((offer) => (
                                                <tr key={offer._id}>
                                                    <td>{offer.title}</td>
                                                    <td> 
                                                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => setIdOffer(offer._id)} className="btn btn-info1">Más info</button>
                                                    </td>
                                                    <td>{offer.programming_languages.map((language) => (
                                                        <span key={language} className="btn btn-success m-2">{` ${language} `}</span>
                                                    ))}</td>
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

            
            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


 }

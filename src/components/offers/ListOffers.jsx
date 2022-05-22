
import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { offerCont } from '../../context/OfferContext'
import OfferDetail from './OfferDetail'
import { getWithToken } from '../../api'


export const ListOffers = () => {

    const { offers, removeOffer } = useContext(offerCont)
    const [idOffer, setIdOffer] = useState("")

    const [listOffers, setListOffers] = useState([])

    //con este fetch se pueden listar

    // useEffect(() => {
    //     fetch('https://jobsearch-350323.ue.r.appspot.com/api/offer')
    //     .then((response) => {
    //         return response.json()
    //     })
    //     .then((listOffers) => {
    //         console.log("lista de ", listOffers)
    //         setListOffers(listOffers)
    //     })
    // }, [])

    useEffect(() => {
        getWithToken('/api/offer')
        .then(({data}) => {
        console.log("lista de ", data)
        setListOffers(data)
        })
    }, [])

    return (
        <div>
            <div className='row justify-content-center'>
                <div className="col-md-12 bg-info">
                    <h2>Filtrar por:</h2>
                    acá sacaré los filtros
                </div>
                <div className='col-md-3'>
                    <table className="table">
                        <tbody>
                        {
                            listOffers.map((offer) => (
                                <tr key={offer._id}>
                                    <th scope="row" ></th>
                                    <td>{offer.title}</td>
                                    <td> 
                                        <button type="button" onClick={() => setIdOffer(offer._id)} className="btn btn-info">Más info</button>
                                    </td>
                                    <td>{offer.programming_languages.map((language) => (
                                        <span key={language} className="btn btn-outline-success m-2">{` ${language} `}</span>
                                    ))}</td>
                                </tr>
                              ))
                        }                
                        </tbody>
                    </table>
                </div> 
                <div className="col-md-9">
                    {
                        idOffer && (
                            <OfferDetail id={idOffer} />
                        )
                    } 
                </div>   
            </div>
        </div>
    );


 }

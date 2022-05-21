
import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { offerCont } from '../../context/OfferContext'


export const ListOffers = () => {

    const { offers, removeOffer } = useContext(offerCont)

    const [listOffers, setListOffers] = useState([])

    //con este fetch se pueden listar

    useEffect(() => {
        fetch('https://jobsearch-350323.ue.r.appspot.com/api/offer')
        .then((response) => {
            return response.json()
        })
        .then((listOffers) => {
            console.log("lista de ", listOffers)
            setListOffers(listOffers)
        })
    }, [])

    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <table class="table">
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
                                    <td> <Link to={`/editOffer/${offer._id}`} class="btn btn-warning">Editar</Link>
                                    <button type="button" onClick={() => removeOffer(offer.id)} class="btn btn-danger">Eliminar</button> </td>
                                </tr>
                              ))
                        }
                
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    );


 }


import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { offerCont } from '../../context/OfferContext'
export const ListOffers = () => {


    const { offers, removeOffer } = useContext(offerCont)
    
 
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
                            offers.map((offer) => (
                                <tr>
                                    <th scope="row" key={offer.id}>1</th>
                                    <td>{offer.title}</td>
                                    <td> <Link to={`/editOffer/${offer.id}`} class="btn btn-warning">Editar</Link>
                                    <button type="button" onClick={() => removeOffer(offer.id)} class="btn btn-danger">Eliminar</button> </td>
                                </tr>
                              ))
                        }
                   
                    </tbody>
                </table>
            </div>
        </div>
     
    </div>
  )
}


import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { OfferContext } from '../../context/OfferContext'

export const ListOffers = () => {


    const { offers } = useContext(OfferContext)
    console.log( offers )
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td> <Link to="/editar/1" class="btn btn-warning">Editar</Link>
                            <button type="button" class="btn btn-danger">Eliminar</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     
    </div>
  )
}

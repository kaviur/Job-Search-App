import React from 'react'
import { getWithToken } from '../../../api'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MyOfferts = () => {

  const [idOffer, setIdOffer] = useState("")
  const [listOffers, setListOffers] = useState([])

  //con este fetch se pueden listar

  useEffect(() => {
    getWithToken('/api/offer/recruiterOffers')
    .then(({data}) => {
      console.log("lista de ", data)
      setListOffers(data)
    })
  }, [])

    return (
        <div>
          hi
            {/* <div className='row justify-content-center'>
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
                                </tr>
                              ))
                        }                
                        </tbody>
                    </table>
                </div>    
            </div> */}
        </div>
    );
}

export default MyOfferts
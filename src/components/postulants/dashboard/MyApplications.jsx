import React from 'react'

export const MyApplications = () => {
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
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          // listOffers.map((offer) => (
                          //     <tr key={offer._id}>
                          //       <td>{offer.title}</td>
                          //       <td> 
                          //                               {/* <Link to={`/editOffer/${offer._id}`} className="btn btn-warning">Editar</Link> */}
                          //                               {/* <button type="button" onClick={() => removeOffer(offer._id)} className="btn btn-danger">Eliminar</button> */}
                          //         <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setIdOffer(offer._id)} className="btn btn-info2">Ver detalle</button>
                          //       </td>
                          //       <td className='text-center'><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3" onClick={() => menuPostulantes(offer.applicants)} className="btn btn-success">{offer.applicants.length}</button></td>
                          //       <td></td>
                          //     </tr>
                          //   ))
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
    </>
  )
}

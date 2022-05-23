import React from 'react'
import '../../../css/postulant.css'
export const Perfil = () => {
  return (
    <>
        <div className="container rounded bg-white mt-8 mb-8 body1  marginT" >
            <div className="row justify-content-center">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Datos personales</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label className="labels">Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre" value=""></input>
                            </div>
                            <div className="col-md-6">
                                <label className="labels">Apellido</label>
                                <input type="text" className="form-control" value="" placeholder="Apellido"></input>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label className="labels">Teléfono</label>
                                <input type="text" className="form-control" placeholder="Telefono" value=""></input>
                            </div> 
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="labels">País</label>
                                <input type="text" className="form-control" placeholder="Pais" value=""></input>
                            </div>
                            <div className="col-md-6">
                                <label className="labels">Estado/Region</label>
                                <input type="text" className="form-control" value="" placeholder="Estado/region"></input>
                            </div>
                        </div>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Guardar Perfil</button></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

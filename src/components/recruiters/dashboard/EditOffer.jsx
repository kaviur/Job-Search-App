import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { offerCont } from '../../../context/OfferContext';

export const EditOffer = ( props ) => {

  const { offers, editOffer } = useContext(offerCont)

  const [selectedOffer, setselectedOffer] = useState({
    title: '',
    description: '',
    programming_languages: '',
    countries: '',
    salary: '',
    english_level: ''
  });

  const navigate = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    const selectedOffer = offers.find( offer => offer.id === ( id ))
    setselectedOffer(selectedOffer)

  }, [id, offers])
  
  

  const onSubmit = ( event ) => {
    editOffer(selectedOffer)
    navigate("../", { replace: true });
  }

  const onChange = (e) => {
    setselectedOffer({...selectedOffer, [e.target.name]: e.target.value})
  }

  return (
    <div className="formRegister">
        <div className="row">
          <form onSubmit={ onSubmit }>
              <h4 className='titleFormRegister'>Editar oferta</h4>
              <div className="row">
                <div className='col-md-12'>
                  <div className="form-group">
                    <label>Título</label>
                    <input type="text" className="form-control" placeholder="Título" name="title" value={selectedOffer.title ?? ""} onChange={ onChange }/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className='col-md-12'>
                  <div className="form-group">
                    <label>Descripción</label>
                    <input type="text" className="form-control" placeholder="Descripción" name="description" value={selectedOffer.description ?? ""} onChange={ onChange }/>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className='col-md-8'>
                  <div className="form-group">
                    <label>Lenguaje de Programación</label><br />
                   <select name='programming_languages' value={selectedOffer.programming_languages ?? ""} onChange={ onChange }>
                      <option value="javascript">Javascript</option>
                      <option value="c++">C++</option>
                      <option value="python">Python</option>
                      <option value="react">React</option>
                   </select>
                  </div>
                </div>
              </div> 
              <br />
              <div className="row">
                <div className='col-md-8'>
                  <div className="form-group">
                    <label>Países</label><br />
                   <select name='countries' value={selectedOffer.countries ?? ""}  onChange={ onChange }>
                      <option value="argentina">Argentina</option>
                      <option value="mexico">Mexico</option> 
                      <option value="colombia">Colombia</option>
                   </select>
                  </div>
                </div>
              </div> 
              <br />
              <div className="form-group">
                <label>Salario</label>
                <input type="number" className="form-control" placeholder="Salario" name="salary"  value={selectedOffer.salary ?? ""}  onChange={ onChange }/>
              </div>

              <div className="form-group">
                <label>Nivel de inglés</label>
                <input type="text" className="form-control" placeholder="Nivel de inglés" name="english_level"  value={selectedOffer.english_level ?? ""} onChange={ onChange }/>
              </div>
                <br />
              <button className="btn btn-dark btn-lg btn-block"> Editar </button>
              
        </form>
      </div>
    </div>
  )
}

import React from 'react'
import { offerCont } from '../../../context/OfferContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { postWithToken } from '../../../api';

export const AddOffer = () => {

  const { addOffer } = useContext(offerCont)
  const navigate = useNavigate();


  const onSubmit = ( event ) => {

    event.preventDefault()
    const {title, description, programming_languages,countries, salary, english_level} = event.target

    const newOffer = {
      title: title.value,
      description: description.value,
      programming_languages: programming_languages.value,
      countries: countries.value,
      salary: salary.value,
      english_level: english_level.value
    }

    postWithToken("/api/offer/",newOffer)
    .then(data=>{
      addOffer(newOffer);
      navigate("/listOffers", { replace: true });
    })
    .catch(error=>{
      console.log(error.response.data)
    }
    )
  }


  return (
    <div className='marginT '>
      <div className='row justify-content-center'>
        <div className='title'>Nueva Oferta</div>
          <div className="formOffer">
            <div className="row">
              <form onSubmit={ onSubmit }>
                  <div className="row">
                    <div className='col-md-12'>
                      <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" placeholder="Título" name='title'  />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className='col-md-12'>
                      <div className="form-group">
                        <label>Descripción</label>
                        <input type="text" className="form-control" placeholder="Descripción" name='description'  />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className='col-md-8'>
                      <div className="form-group">
                        <label>Lenguaje de Programación</label><br />
                      <select  name='programming_languages' className="select-css" >
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
                      <select name='countries' className="select-css" >
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
                    <input type="number" className="form-control" placeholder="Salario" name="salary" />
                  </div>

                  <div className="form-group">
                    <label>Nivel de inglés</label>
                    <input type="text" className="form-control" placeholder="Nivel de inglés" name="english_level" />
                  </div>
                    <br />
                  <div className='row justify-content-center'>
                    <button className="btn btn-dark btn-lg btn-block" >Crear </button>

                  </div> 
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { useEffect } from 'react'
import { offerCont } from '../../../context/OfferContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { postWithToken, get } from '../../../api';
import BtnCheckboxes from '../../commons/BtnCheckboxes'

export const AddOffer = () => {

  const { addOffer, offers } = useContext(offerCont)
  const navigate = useNavigate();
  const [offer, setOffer] = useState('');
  const [filters, setFilters] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ error, setError ] = useState({
    isError: false,
    message: '',
    loading: false
  });
  const [ countries, setCountries ] = useState([]);
  const [ cities, setCities ] = useState([]);
  const [ programmingLanguages, setProgrammingLanguages ] = useState([]);
  const [ tools, setTools ] = useState([]);


  const onSubmit = ( event ) => {

    event.preventDefault()
    const {title, description, programming_languages,countries, salary, english_level} = event.target

    // console.log("datoos:", title.value, description.value, programming_languages.value, countries.value, salary.value)

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
      // dispatch( eventStartAddNew( formValues) );
      addOffer(newOffer);
      navigate("/listOffers", { replace: true });
    })
    .catch(error=>{
      console.log(error.response.data)
    })
  }

  useEffect(() => {
    get("/api/filter/")
    .then(({data}) => {
    console.log("lista de ", data)
    setFilters(data)
    })
  }, [])

  const onChange = (e) => {
    setOffer(e.target.value)
  }

  return (
    <div className="formRegister">
      {
        categories.map(language => {
          return <p>{language}</p>
        }
        )
      }
        <div className="">
          <form onSubmit={ onSubmit }>
              <h4 className='titleFormRegister'>Nueva oferta</h4>
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
                    <div className="row">
                      <BtnCheckboxes filters={filters} type="programming_languages" setList={setProgrammingLanguages} list={programmingLanguages} />                    
                    </div>
                  </div>
                </div>
              </div> 
              <br />
              <div className="row">
                <div className='col-md-8'>
                  <div className="form-group">
                    <label>Países</label><br />
                    <BtnCheckboxes filters={filters} type="countries" setList={setCountries} list={countries} />
                  </div>
                </div>
              </div> 
              <br />
              <div className="row">
                <div className='col-md-8'>
                  <div className="form-group">
                    <label>Países</label><br />
                    <BtnCheckboxes filters={filters} type="category" setList={setCategories} list={categories} />
                  </div>
                </div>
              </div> 
              <br />
              <div className="form-group">
                <label>Salario</label>
                <input type="number" className="form-control" placeholder="Salario" name="salary" />
              </div>
              <br />
              <div className="form-group">
                <label>Nivel de inglés</label>
                <select name='english_level'>
                    <option value="">Seleccione el nivel</option>
                    {
                      filters!=""
                      ?
                        filters[0].english_level.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))
                      :
                        <option key={uuid()} value="">cargando...</option>
                    }
                  </select>
              </div>
              <br />
              <div className="form-group">
                <label>Señority</label>
                <select name='level_of_experience'>
                    <option value="">Seleccione el nivel</option>
                    {
                      filters!=""
                      ?
                        filters[0].level_of_experience.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))
                      :
                        <option key={uuid()} value="">cargando...</option>
                    }
                  </select>
              </div>
              <br />
              <div className="form-group">
                <label>Modalidad</label>
                <select name='mode'>
                    <option value="">Elige la modalidad</option>
                    {
                      filters!=""
                      ?
                        filters[0].mode.map(item => (
                          <option key={item} value={item}>{item}</option>
                        ))
                      :
                        <option key={uuid()} value="">cargando...</option>
                    }
                  </select>
              </div>
                <br />
              <button className="btn btn-dark btn-lg btn-block" >Crear </button>
              
        </form>
      </div>
    </div>
  )
}

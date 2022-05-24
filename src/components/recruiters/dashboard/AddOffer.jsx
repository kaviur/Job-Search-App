
import { useEffect, useState, useContext } from 'react'
import { offerCont } from '../../../context/OfferContext'
import { useNavigate } from 'react-router-dom'
import { postWithToken, get } from '../../../api';
import { v4 as uuid } from 'uuid'
import BtnCheckboxes from '../../commons/BtnCheckboxes'

export const AddOffer = () => {

  const { addOffer } = useContext(offerCont)
  const navigate = useNavigate();
  const [filters, setFilters] = useState([]);
  const [ categories, setCategories ] = useState([]);
 
  const [ countries, setCountries ] = useState([]);
  const [ programmingLanguages, setProgrammingLanguages ] = useState([]);


  const onSubmit = ( event ) => {

    event.preventDefault()
    const {title, description, salary, english_level, level_of_experience, mode} = event.target

    const newOffer = {
      title: title.value,
      description: description.value,
      programming_languages: programmingLanguages,
      countries: countries,
      category: categories,
      salary: salary.value,
      english_level: english_level.value,
      level_of_experience: level_of_experience.value,
      mode:mode.value
    }

    postWithToken("/api/offer/",newOffer)
    .then(data=>{
      addOffer(newOffer);
      navigate("/myOffers", { replace: true });
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

  return (
    <div className='marginT '>
{/* 
      {
        categories.map(language => {
          return <p>{language}</p>
        }
        )
      } */}
      <div className='row justify-content-center border-3'>
        <div className='p-4'>
        
          <div className="formOffer">
            <div className="row">
            <div className='title pb-5'>Nueva Oferta</div>
            <br />
            <br /><br />
              <form onSubmit={ onSubmit }>
                  <div className="row">
                    <div className='col-md-6'>
                      <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" placeholder="Título" name='title'  />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className='col-md-6'>
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
                          <div className='col-md-10'>
                          <BtnCheckboxes filters={filters} type="programming_languages" setList={setProgrammingLanguages} list={programmingLanguages} />                    
                          </div>
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
                    <div className=''>
                      <label>Países- category</label><br />
                      <BtnCheckboxes filters={filters} type="category" setList={setCategories} list={categories} />
                    </div>
                  </div>
                  <br />
                  <div className="form-group">
                  <div className='col-md-6'>
                    <label>Salario</label>
                    <input type="number" className="form-control" placeholder="Salario" name="salary" />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className='col-md-6'>
                      <div className="form-group">
                          <label>Nivel de inglés</label>
                          <select name='english_level' className="select-css">
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
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className='col-md-6'>
                      <div className="form-group">
                        <label>Señority</label>
                        <select name='level_of_experience' className="select-css">
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
                    </div>
                  </div>
                    
                  <br />
                  <div className="row">
                    <div className='col-md-6'>
                      <div className="form-group">
                        <label>Modalidad</label>
                        <select name='mode' className="select-css">
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
                    </div>
                  </div>
                  <br /><br />

                  <div className='row justify-content-center'>
                  <div className="row">
                    <div className='col-md-6'>
                    <button className="btn btn-dark btn-lg btn-block" >Crear </button>
                    </div>
                    </div>
                  </div> 
                </form>
            </div></div>
          </div>
        </div>
    </div>
  )
}

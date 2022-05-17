import React from 'react'

export const AddOffer = () => {

  return (
    <div className="formRegister">
        <div className="row">
          <form>
              <h4 className='titleFormRegister'>Nueva oferta</h4>
              <div className="row">
                <div className='col-md-12'>
                  <div className="form-group">
                    <label>Título</label>
                    <input type="text" className="form-control" placeholder="Título" name="title"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className='col-md-12'>
                  <div className="form-group">
                    <label>Descripción</label>
                    <input type="text" className="form-control" placeholder="Descripción" name="description"/>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className='col-md-8'>
                  <div className="form-group">
                    <label>Lenguaje de Programación</label><br />
                   <select name='programming_languages'>
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
                   <select name='countries'>
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
                <input type="number" className="form-control" placeholder="Salario" name="salary"/>
              </div>

              <div className="form-group">
                <label>Nivel de inglés</label>
                <input type="text" className="form-control" placeholder="Nivel de inglés" name="english_level"/>
              </div>
                <br />
              <button className="btn btn-dark btn-lg btn-block">Crear </button>
              
        </form>
      </div>
    </div>
  )
}

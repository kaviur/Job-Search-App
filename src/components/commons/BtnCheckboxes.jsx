import React from 'react'

const BtnCheckboxes = ({filters,type,setList,list}) => {

    function createArrFilters(e) {
        const valor = e.target.value
        const identificador = list.indexOf(valor)

        if (e.target.checked){
          if(identificador === -1){
            setList([...list, valor])
            e.target.previousSibling.className = 'btn btn-primary m-2'
          }
        }
        else{
          if (identificador !== -1){
            list.splice(identificador,1)
            setList([...list])
            e.target.previousSibling.className = 'btn btn-outline-primary m-2'
          }
        }
    }

    switch (type) {
        case 'programming_languages':
            return (
                <div className="d-flex justify-content-center">
                    {
                        filters != "" ?
                        filters[0].programming_languages.map(language => {
                            return <div className="">
                                <label className="btn btn-outline-primary m-2" for={language}>{language}</label>
                                <input type="checkbox" className="btn-check" id={language} name={language} value={language} onChange={createArrFilters} />
                            </div>
                        }
                        )
                        :
                        <p>Cargando categorías...</p>
                    }
                </div>
            )
        case 'countries':
            return (
                <div className="d-flex justify-content-center">
                    {
                        filters != "" ?
                        filters[0].countries.map(country => {
                            return <div className="">
                                <label className="btn btn-outline-primary m-2" for={country}>{country}</label>
                                <input type="checkbox" className="btn-check" id={country} name={country} value={country} onChange={createArrFilters} />
                            </div>
                        }
                        )
                        :
                        <p>Cargando categorías...</p>
                    }
                </div>
            )
        case 'category':
            return (
                <div className="d-flex justify-content-center">
                    {
                        filters != "" ?
                        filters[0].categories.map(category => {
                            return <div className="">
                                <label className="btn btn-outline-primary m-2" for={category}>{category}</label>
                                <input type="checkbox" className="btn-check" id={category} name={category} value={category} onChange={createArrFilters} />
                            </div>
                        }
                        )
                        :
                        <p>Cargando categorías...</p>
                    }
                </div>
            )
        default:
            return null
    }
    
}

export default BtnCheckboxes
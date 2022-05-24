import { useEffect, useState } from 'react';
import { get, post } from '../../api';
import { v4 as uuid } from 'uuid'
import React from 'react'
// import { offerCont } from '../../context/OfferContext'
import OfferDetail from './OfferDetail'
    

export const ListOffers = () => {

    // const { offers, removeOffer } = useContext(offerCont)
    const [idOffer, setIdOffer] = useState("")
    const [listOffers, setListOffers] = useState([])
    //______________
    const [filters, setFilters] = useState({});
    const [categoria, setCategoria] = useState(""); 
    const [pais, setPais] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [nivelIngles, setNivelIngles] = useState("");
    const [nivelExperiencia, setNivelExperiencia] = useState("");
    const [modalidad, setModalidad] = useState("");
    const [ofertasFiltradas, setOfertasFiltradas] = useState({});

    //todo: sacarlo del contexto --- trae las categorías para filtrar
    useEffect(()=>{
        //trae las opciones para filtrar
        get("/api/filter")
        .then(({data})=>{
            console.log(data[0].categories);
            setFilters(
            {
                categories: data[0].categories,
                modality: data[0].mode,
                countries: data[0].countries,
                english_level: data[0].english_level,
                programming_languages: data[0].programming_languages,
                level_of_experience: data[0].level_of_experience
            }
            )
        })

        //trae las ofertas sin filtros
        // getWithToken('/api/offer')
        // .then(({data}) => {
        // setListOffers(data)
        // })
    },[])

    //ofertas con filtros
    useEffect(()=>{
        post("/api/offer/search",{
        category: categoria,
        country: pais,
        programmingLanguages: lenguaje,
        level: nivelIngles,
        mode: modalidad
        })
        .then(({data})=>{
        console.log(data);
        setListOffers(data)
        })
    },[categoria, pais, lenguaje, nivelIngles, modalidad])

    //ofertas sin filtros
    // useEffect(() => {
    //     getWithToken('/api/offer')
    //     .then(({data}) => {
    //     setListOffers(data)
    //     })
    // }, [])

    return (
        <div className="container marginT">
            <div className="container">
                <form action="" method="post">
                    <div className="row justify-content-center">
                        <div className="col-md-2">
                            <select onChange={(e)=>setNivelIngles(e.target.value)} name='english_level' className="select-css">
                                <option value="">nivel de inglés</option>
                                {
                                filters!=""
                                ?
                                    filters.english_level?.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                    ))
                                :
                                    <option key={uuid()} value="">cargando...</option>
                                }
                            </select>
                        </div>
                        <div className="col-md-2">
                            <select onChange={(e)=>setNivelExperiencia(e.target.value)} name='level_of_experience' className="select-css">
                            <option value="">señority</option>
                            {
                                filters!=""
                                ?
                                filters.level_of_experience?.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))
                                :
                                <option key={uuid()} value="">cargando...</option>
                            }
                            </select>
                        </div>
                        <div className="col-md-2">
                            <select onChange={(e)=>setPais(e.target.value)} name='countries' className="select-css">
                            <option value="">País</option>
                            {
                                filters!=""
                                ?
                                filters.countries?.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))
                                :
                                <option key={uuid()} value="">cargando...</option>
                            }
                            </select>
                        </div>
                        <div className="col-md-2">
                            <select onChange={(e)=>setLenguaje(e.target.value)} name='programming_languages' className="select-css">
                            <option value="">Lenjuaje de Programación</option>
                            {
                                filters!=""
                                ?
                                filters.programming_languages?.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))
                                :
                                <option key={uuid()} value="">cargando...</option>
                            }
                            </select>
                        </div>
                        <div className="col-md-2">
                            <select onChange={(e)=>setModalidad(e.target.value)} name='modality' className="select-css">
                                <option value="">Modalidad</option>
                                {
                                filters!=""
                                ?
                                    filters.modality?.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                    ))
                                :
                                    <option key={uuid()} value="">cargando...</option>
                                }
                            </select>
                        </div>
                        <div className="col-md-2">
                        <select onChange={(e)=>setCategoria(e.target.value)} name='categories' className="select-css">
                            <option value="">Campo</option>
                            {
                                filters!=""
                                ?
                                filters.categories?.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))
                                :
                                <option key={uuid()} value="">cargando...</option>
                            }
                            </select>
                        </div>
                    </div>
                </form>
               <h1>{
                pais + " " + lenguaje + " " + nivelIngles + " " + nivelExperiencia + " " + modalidad + " " + categoria
                }</h1>
            </div>
        
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <div className="panel">
                            <div className="panel-heading">
                                    <div className="row justify-content-center">
                                        <div className='titleOf'>Lista de ofertas</div>
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
                                            listOffers.map((offer) => (
                                                <tr key={offer._id}>
                                                    <td>{offer.title}</td>
                                                    <td> 
                                                        <button type="button" onClick={() => setIdOffer(offer._id)} className="btn btn-info2">Más info</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }  
                                        
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                    <div className="col-md-6 marginOfer">
                        
                        {
                            idOffer && (
                                <OfferDetail id={idOffer} />
                            )   
                        } 
                    </div>
                </div>
            </div>
        </div>
    );

 }

// import { useEffect, useState } from 'react';
// import { get, post } from '../../api';
//import { v4 as uuid } from 'uuid'


export default function NavFilters() {

  // const [filters, setFilters] = useState({});
  // const [categoria, setCategoria] = useState(""); 
  // const [pais, setPais] = useState("");
  // const [lenguaje, setLenguaje] = useState("");
  // const [nivelIngles, setNivelIngles] = useState("");
  // const [nivelExperiencia, setNivelExperiencia] = useState("");
  // const [modalidad, setModalidad] = useState("");
  // //const [ofertasFiltradas, setOfertasFiltradas] = useState({});

  // const [idOffer, setIdOffer] = useState("")
  //   const [listOffers, setListOffers] = useState([])

  //todo: sacarlo del contexto --- trae las categorías para filtrar
  // useEffect(()=>{
  //   get("/api/filter")
  //   .then(({data})=>{
  //       console.log(data[0].categories);
  //       setFilters(
  //         {
  //             categories: data[0].categories,
  //             modality: data[0].mode,
  //             countries: data[0].countries,
  //             english_level: data[0].english_level,
  //             programming_languages: data[0].programming_languages,
  //             level_of_experience: data[0].level_of_experience
  //         }
  //         )
  //   })
  //},[])

  // useEffect(()=>{
  //   post("/api/offer/search",{
  //     category: categoria,
  //     country: pais,
  //     programmingLanguages: lenguaje,
  //     level: nivelIngles,
  //     mode: modalidad
  //   })
  //   .then(({data})=>{
  //     console.log(data);
  //     setListOffers(data);
  //   })
  // },[categoria, pais, lenguaje, nivelIngles, modalidad])

  return (
    
    <nav className="flex flex-row content-center w-full p-2 mx-auto font-semibold bg-zinc-900 text-white dark:text-stone-50 justify-evenly">
      <ul>
        <li className="inline p-2 hover:border-t-2">
            categorias
        </li>
        <li className="inline p-2 hover:border-t-2">
          modalidad
        </li>
        <li className="inline p-2 hover:border-t-2">
          ciudad
        </li>
        <li className="inline p-2 hover:border-t-2">
          ingles
        </li>
        <li className="inline p-2 hover:border-t-2">
          lenguaje
        </li>
      </ul>
    </nav>
  );
}
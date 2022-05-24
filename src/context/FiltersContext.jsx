import { useState, createContext, useEffect } from 'react'
import { get } from '../api/index';

export const filterCont = createContext();


export const FiltersContext = ({ children }) => {

    const [filter, setFilter] = useState({
        id:""
    });

    // useEffect(()=>{
    //   get("/api/filter")
    //   .then(({data})=>{
    //       console.log(data);
    //     //   setFilter(
    //     //     {
    //     //         categories: data.categories,
    //     //         modality: data.mode,
    //     //         countries: data.countries,
    //     //         english: data.english_level,
    //     //         language: data.programming_languages,
    //     //         experience: data.level_of_experience
    //     //     }
    //     //     )
    //   })
    // },[])

    return <filterCont.Provider value={{
        filter,
        setFilter
      }}>
        { children }
    </filterCont.Provider>
}
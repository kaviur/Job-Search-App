import React, { useEffect, useState} from 'react'
import { useParams ,Navigate} from 'react-router-dom';
import { useContext } from 'react';
import { userCont } from '../context/UserContext';
import { get } from '../api';


export const Profile = () => {
    const {id} = useParams()
    const [developer, setDeveloper] = useState({})

    //todo: guardar todos los postulantes en el estado para no tener que hacer otra consulta
    //const { users } = useContext(userCont)
    //const user = users.filter(user=>user._id===id)[0]

    useEffect(() => {
        get("/api/users/id/"+id)
        .then(({data}) => {
            console.log(data)
            setDeveloper(data)
        })
    }, [])


    return (
        <>
        <h1>Perfil del desarrollador</h1>
        <h2>{developer.name+" "+developer.lastname}</h2>
        <p>{developer.email}</p>
        <p>{developer.photo}</p>
        <p>{developer.cover_page}</p>
        <p>{developer.english_level}</p>
        <p>{developer.country}</p>
        <p>{developer.profession}</p>
        <p>{developer.about}</p>
        <p>{developer.mode}</p>
        <p>{developer.experience}</p>
        <p>{developer.portafolio}</p>
        <p>{developer.level_of_experience}</p>
        {
            developer.openToWork&&<h2>Open to work</h2>
        }
        {
            developer.programming_languages?.map(language=>(
                <p>{language}</p>
            ))
        }
        </>
    )
}

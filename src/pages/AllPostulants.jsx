import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { get } from '../api'

const AllPostulants = () => {
  
  const [listPostulants, setListPostulants] = useState([])

  useEffect(() => {
      get("/api/users/developers")
      .then(({data}) => {
          console.log("lista de ", data)
          setListPostulants(data)
      })
  }, [])

  return (
    <>
    <h1>Todos los postulantes</h1>
    {
      listPostulants != "" ?
      listPostulants.map((postulant) => (
        <div key={postulant._id}>
          <h2>{postulant.name}</h2>
          <p>{postulant.email}</p>
          <Link className="btn" to={"/postulant/" + postulant._id}>Ver perfil completo</Link>
        </div>
      ))
      :
      <p>No hay postulantes</p>
    }
    </>
  )
}

export default AllPostulants
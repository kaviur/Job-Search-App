import React,{useContext, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { post } from '../../api';
import { userCont } from '../../context/UserContext';
import "../../css/register.css"

export  function Register() {

  const context = useContext(userCont);
  const navigate = useNavigate();

  const [error,setError] = useState({
    isError:false,
    message:"",
    loading:false
  })

  const email = useRef()
  const password = useRef()
  const name = useRef()
  const role = useRef()

  const handleRegister = (event) =>{
      event.preventDefault()

      console.log(role.current.value)
      setError({...error,loading:true})
      
      post("/api/auth/signup",{
        name:name.current.value,
        email: email.current.value,
        password:password.current.value,
        role:role.current.value
      })
      .then(({data})=>{
        setError({...error,loading:false})
        localStorage.setItem("token",data.token)
        context.setUser({
          id:data.user.id,
          name:data.user.name,
          logged:true
        })

        navigate("/dashboard",{
          replace:true
      })
      })
      .catch(error=>{
        console.log(error.response.data)
        setError({
          isError:true,
          message:error.response.data.message,
          loading:false
        })
      })
  }


  return (
    <div className='marginT'>
      <div className="formRegister">
        <h4 className='titleFormRegister'>Registro</h4>
         <form  onSubmit={ handleRegister} className="php-email-form"> 
            <div className="row">
              <div className="col-md-12 form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" placeholder="Nombre" ref={name} />
              </div>
              <div className="form-group mt-3">
                <label>Rol</label>
                <select ref={role} className="select-css">
                  <option value={1}>Postulante</option>
                  <option value={2}>Reclutador</option>
                </select>
              </div>
            </div>
            
            <div className="row">
                <div className="col-md-12 form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="usuario@mail.com" ref={email} ></input>
                </div>
              </div>
              <div className="form-group mt-3">
                <label>Contraseña</label>
                <input type="password" className="form-control" placeholder="Escribe tu password" ref={password}></input>
            </div>
            <div className="text-center"><button type="submit">Registrarse</button></div>
              <p className="forgot-password text-right">
                ¿Ya tienes una cuenta? <a href="/login" className='colorT'>Entrar</a>
               </p>
        </form>
      </div>
    </div>
)
}


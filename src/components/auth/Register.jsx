import React,{useContext, useRef, useState} from 'react'
import { post } from '../../api';
import { userCont } from '../../context/UserContext';
import "../../css/register.css"

export  function Register() {

  const context = useContext(userCont);

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

  const recoverSession = ()=>{
    const token = localStorage.getItem("token")

    if(token){
      fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/validate",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+ token
        },
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.failed){
          console.log(data)
        }else{
          context.setUser({
            id:data.user.id,
            name:data.user.name,
            logged:true
          })
        }
        
      })
      .catch(error=>console.log(error))
    }
    
  }

  return (
    <div className="formRegister">
         <button onClick={recoverSession}>Recuperar sesión</button>
         <div className="row">
           <form onSubmit={handleRegister}>
              <h4 className='titleFormRegister'>Registro</h4>
               <div className="row">
                 <div className='col-md-12'>
                   <div className="form-group">
                     <label>Nombre</label>
                     <input type="text" className="form-control" placeholder="Nombre" ref={name} />
                   </div>
                 </div>
               </div>
               <br />
               <div className="row">
                 <div className='col-md-6'>
                   <div className="form-group">
                     <label>Rol</label><br />
                    <select ref={role}>
                       <option value="applicant">Postulante</option>
                       <option value="employer">Reclutador</option>
                    </select>
                   </div>
                 </div>
               </div> 
               <br />
               <div className="form-group">
                 <label>Email</label>
                 <input type="email" className="form-control" placeholder="Enter email" ref={email}/>
               </div>

               <div className="form-group">
                 <label>Contraseña</label>
                 <input type="password" className="form-control" placeholder="Enter password" ref={password}/>
               </div>

               <button className="btn btn-dark btn-lg btn-block">Registrarse</button>
               <p className="forgot-password text-right">
                   ¿Ya tienes una cuenta? <a href="/login">Entrar</a>
               </p>
         </form>
       </div>
    </div>

)
}



import { useContext } from 'react';
import { userCont } from '../../context/UserContext';
import "../../css/register.css"


export const Register = () => {

  const {user,setUser } = useContext(userCont);

  const handleRegister = (event) => {
    event.preventDefault()
    const {name, role, email,password} = event.target

    fetch("https://jobsearch-350323.ue.r.appspot.com/api/auth/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      name:name.value,
      role:role.value,
      email:email.value,
      password: password.value
      })
    }).then(res=>res.json())
      .then(data=>{
        console.log("user:",data)
        setUser({logged:true,name:user.data.userName})
    }).catch(error=>setUser({logged:false}))
  }


  return (
    <div className="formRegister">
        <div className="row">
          <form onSubmit={handleRegister}>
              <h4 className='titleFormRegister'>Registro</h4>
              <div className="row">
                <div className='col-md-12'>
                  <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" name="name"/>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className='col-md-6'>
                  <div className="form-group">
                    <label>Rol</label><br />
                   <select name='role'>
                      <option value={1}>Postulante</option>
                      <option value={2}>Reclutador</option>
                   </select>
                  </div>
                </div>
              </div> 
              <br />
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email"/>
              </div>

              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password"/>
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

import { useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import { post } from '../../api';
import { userCont } from '../../context/UserContext';
import "../../css/login.css"

 
export const Login = () => {

const context = useContext(userCont);
const navigate = useNavigate()

if(context.user.logged){
    return <Navigate to="/"/>
}

  const handleLogin = (event) => {
    event.preventDefault()
    const {email,password} = event.target
   

    post("/api/auth/login",{ 
      email:email.value,
      password:password.value
    })
    .then(data=>{
      const {token,user} = data.data
      localStorage.setItem("token",token) 
      context.setUser({
          id:user.id,
          name:user.name,
          logged:true
      })
      navigate("/",{
          replace:true
      })
  })

}


  return (

      <div className="formLogin">
        <div className="row">
          <form onSubmit={ handleLogin}>
            <h4 className='titleFormLogin'> Login </h4>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="usuario@mail.com" name="email" />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control" placeholder="Escribe tu password" name="password"/>
            </div>

            <button className="btn btn-dark btn-lg btn-block">Entrar</button>
            <p>
              ¿No tienes una cuenta? <a href="register">Crear mi cuenta</a>
            </p>
          </form>
        </div>
      </div>
  )
}

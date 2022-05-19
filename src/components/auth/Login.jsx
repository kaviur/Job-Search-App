import { useContext } from 'react'
import { userCont } from '../../context/UserContext';
import "../../css/login.css"


export const Login = () => {

 const { user, setUser} = useContext(userCont);

  const handleLogin = (event) => {
    event.preventDefault()
    const {email,password} = event.target
    console.log(email.value, password.value)

    fetch("https://jobsearch-350323.ue.r.appspot.com/api/auth/login",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email:email.value,
          password:password.value
      })
    }).then(res=>
      res.json(),
      console.log("todo ok")
      )
    .then(data=>{
        
      
        localStorage.setItem("token",data.token)
        setUser({
          id:data.user.id,
          logged:true,
          name:data.data.name
        })
    
        fetch("https://jobsearch-350323.ue.r.appspot.com/api/offer/recruiterOffers",{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            })
            .then((response)=>{
                return response.json()
            })
            .then(data=>{
                console.log(data)
            })

           
    })
    .catch(error=>setUser({logged:false}))
    
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

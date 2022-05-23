import { useState, createContext, useEffect } from 'react'
import { postWithToken } from '../api/index';

export const userCont = createContext();


export const UserContext = ({ children }) => {

    const [user, setUser] = useState({
      id:"",
      name:"",
      email:"",
      logged:false,
      role:2,
    });

    useEffect(()=>{
      postWithToken("/api/auth/validate")
      .then(({data})=>{
        if(data.failed){
          console.log(data)
        }else{
          setUser(
            {
              id: data.user.id,
              role: data.user.role,
              name: data.user.name,
              email: data.user.email,
              logged:true
            }
          )
        }
      })
    },[])

    return <userCont.Provider value={{
        user,
        setUser
      }}>
        { children }
    </userCont.Provider>
}

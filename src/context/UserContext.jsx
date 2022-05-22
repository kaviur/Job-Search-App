import { useState, createContext } from 'react'

export const userCont = createContext();


export const UserContext = ({ children }) => {

    const [user, setUser] = useState({
      id:"",
      name:"",
      logged:false,
      role:2,
    });

    return <userCont.Provider value={{
        user,
        setUser
      }}>
        { children }
    </userCont.Provider>
}

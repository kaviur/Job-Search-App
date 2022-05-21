import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export default function LogOut() {

    const context = useContext(UserContext)

    const handleLogOut=()=>{
        localStorage.removeItem("token")
        context.setUser({
            logged:false,
            name:"",
            id:""
        })
    }
    return (
        <button onClick={handleLogOut}>
            Cerrar sesión
        </button>
    )
}

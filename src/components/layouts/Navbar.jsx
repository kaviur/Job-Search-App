import React from 'react'
import { useContext } from 'react';
import { userCont } from '../../context/UserContext';
import LogOut from '../auth/Logout';

export const Navbar = () => {

  const { user } = useContext(userCont);

  return (
    <div>
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex justify-content-between align-items-center">

          <div className="logo">
            <h1 className="text-light"><a href="/"><span>Job- search</span></a></h1>
        
          </div>
        
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                {!user.logged&&<a className="active " href="/">Home</a>}
              </li>
              <li>
                {user.logged&&<a href="/listOffers">Lista de ofertas</a>}
              </li>
              <li><a href="/contact">Contacto</a></li>
              <li>
                {!user.logged&&<a href="/register">Registro</a>}
              </li>
              <li>
                {!user.logged&&<a href="/login">Iniciar Sesión</a>}
              </li>
           
              <li>
                {user.logged&&<LogOut/>}
              </li>

            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav> 

        </div>
      </header>
    
    </div>
  )
}


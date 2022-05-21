import React from 'react'
import { useContext } from 'react';
import { userCont } from '../../context/UserContext';
import LogOut from '../auth/Logout';

export const Navbar = () => {

  const { user } = useContext(userCont);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#/">icono</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#/">Home</a>
              </li>
              <li className="nav-item">
                {!user.logged&&<a className="nav-link" href="/login">Login</a>}
              </li>
              <li className="nav-item">
                {!user.logged&&<a className="nav-link" href="/register">Registro</a>}
              </li>
              <li className="nav-item">
                {user.logged&&<a className="nav-link" href="/listOffers">Lista de Ofertas</a>}
              </li>
              <li className="nav-item"> 
              {user.logged&&<LogOut/>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}


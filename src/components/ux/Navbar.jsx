import React from 'react'
import { useContext } from 'react';
import { userCont } from '../../context/UserContext';
import LogOut from '../auth/Logout';

export const Navbar = () => {

  const { user } = useContext(userCont);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#/">icono</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/">Home</a>
              </li>
              <li class="nav-item">
                {!user.logged&&<a class="nav-link" href="/login">Login</a>}
              </li>
              <li class="nav-item">
                {!user.logged&&<a class="nav-link" href="/register">Registro</a>}
              </li>
              <li class="nav-item">
                {user.logged&&<a class="nav-link" href="/listOffers">Lista de Ofertas</a>}
              </li>
              <li class="nav-item"> 
              {user.logged&&<LogOut/>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}


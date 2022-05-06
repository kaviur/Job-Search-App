import React from 'react'

export const Navbar = () => {
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
                <a class="nav-link" href="#/">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

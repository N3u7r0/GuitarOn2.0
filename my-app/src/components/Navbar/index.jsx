import React from 'react'
import './styles.css'
import CartWidget from '../CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className='contenedorLogoCart'>
          <a className="navbar-brand" href="#">E-comerce</a>
          <div>
            <CartWidget />
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contacto">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="otros">otros</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="guitarras">Todos los Productos</a></li>
                <li><a className="dropdown-item" href="guitarras">Guitarras</a></li>
                <li><a className="dropdown-item" href="bajos">Bajos</a></li>
                <li><a className="dropdown-item" href="baterias">Baterias</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar
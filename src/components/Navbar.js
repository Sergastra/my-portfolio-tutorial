import React from 'react';
import logo from "../2af3d26f0fcd7f3338182df8244ec4a9.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className='container'>
  <a className="navbar-brand" href="#"><img className= "logo" src= {logo} alt='logo...'/> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    < FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Главная <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">О себе</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Мои знания</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Работы</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Портфолио</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Контакты</a>
      </li>
      
    </ul>

  </div>
</div>
</nav>
  )
}

export default Navbar

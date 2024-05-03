import React from "react";
import './Navbar.css'
import'./SENAI.png';

function Navbar(){
    return(
        <div>
             <nav className="navbar">
        <div class="logo">
            <img src={require('./SENAI.png')} alt="Logo" />
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Quem Somos</a></li>
        </ul>
    </nav>
    </div>
    );
}
export default Navbar; 
import React from "react";
import './Footer.css';
import './SESI.png';

function Footer(){
    return(
        <div>
            <footer>
        <div class="logo">
            <img src={require("./SESI.png")} alt="Logo" />
        </div>
        <p>&copy; 2024 Todos os direitos reservados</p>
    </footer>
        </div>
    );
}
export default Footer;
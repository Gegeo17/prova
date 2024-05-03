import React from "react";
import './Body.css';

function Body(){
  return(
    <div>
      <container>
        <quadro>
          <img src={require("./FOTO2.jpg")} alt="Imagem 1" />
         <figcaption>Tropinha</figcaption>
        </quadro>
        <quadro>
          <img src={require("./FOTO3.jpg")} alt="Imagem 2" />
           <figcaption>Tropinha</figcaption>
        </quadro>
        <quadro>
          <img src={require("./FOTO4.jpg")} alt="Imagem 2" />
           <figcaption>Tropinha</figcaption>
        </quadro>
        <quadro>
          <img src={require("./FOTO5.jpg")} alt="Imagem 2" />
           <figcaption>Tropinha</figcaption>
        </quadro>
        <quadro>
          <img src={require("./FOTO6.jpg")} alt="Imagem 3" />
          <figcaption> ggfffffffffhcjcykchkgchgcg</figcaption>
        </quadro>
      </container>
    </div>
    );
  }
  export default Body;
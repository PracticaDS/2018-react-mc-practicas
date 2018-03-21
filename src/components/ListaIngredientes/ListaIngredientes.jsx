import React from "react";

import Ingrediente from "../Ingrediente/Ingrediente"

import "./ListaIngrediente.css"

const ListaIngredientes = ({ lista }) => (
  <div className="lista">
    { 
      lista.map(ingrediente =>
        <Ingrediente ingrediente={ingrediente}  /> )
    }
  </div>
)

export default ListaIngredientes

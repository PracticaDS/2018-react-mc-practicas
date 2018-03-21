import React from "react"

import "./Ingrediente.css"

const Precio = ({precio}) => precio ? 
  <div className="precio">+ ${precio}</div> : 
  "GRATIS"

const Ingrediente = ({ 
  ingrediente: { nombre, precio }, 
  showingInfo,
  cuandoTeSeleccionen
}) => (
  <div className="ingrediente">
    <div className="nombre">{nombre}</div>
    <Precio precio={precio} />

    { ! showingInfo && <button onClick={cuandoTeSeleccionen}>Info</button> }
    { showingInfo && <div>Informacion nutricional</div> }
  </div>
)

export default Ingrediente

import React from "react"

import "./Ingrediente.css"

const Precio = ({precio}) => precio ? 
  <div className="precio">+ ${precio}</div> : 
  "GRATIS"

const Ingrediente = ({ ingrediente: { nombre, precio } }) => (
  <div className="ingrediente">
    <div className="nombre">{nombre}</div>
    <Precio precio={precio} />
  </div>
)

export default Ingrediente

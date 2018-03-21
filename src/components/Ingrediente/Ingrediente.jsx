import React from "react"

import "./Ingrediente.css"

const Precio = ({precio}) => precio ? 
  <div className="precio">+ ${precio}</div> : 
  "GRATIS"

export default class Ingrediente extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfo: false
    }
  }

  render() {
    const { ingrediente: { nombre, precio } } = this.props;
    return (
      <div className="ingrediente">
        <div className="nombre">{nombre}</div>
        <Precio precio={precio} />

        { ! this.state.showingInfo && 
          <button onClick={() => this.setState({
            showingInfo: true
          })}>Info</button> }
       
        { this.state.showingInfo && 
          <div>Informacion nutricional</div> }
      </div>
    )
  }

}

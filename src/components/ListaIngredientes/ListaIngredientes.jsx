import React from "react";

import Ingrediente from "../Ingrediente/Ingrediente"

import "./ListaIngrediente.css"

class ListaIngredientes extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      mostrandoInfoDe: null
    }
  }

  render() {
    return (
      <div className="lista">
        { 
          this.props.lista.map(ingrediente =>
            <Ingrediente ingrediente={ingrediente} 
              cuandoTeSeleccionen={() => this.setState({mostrandoInfoDe: ingrediente})}
              showingInfo={this.state.mostrandoInfoDe === ingrediente}  /> )
        }
      </div>
    )
  }
}

export default ListaIngredientes

import React from 'react';
import { storiesOf } from '@storybook/react';

import ListaIngredientes from "./ListaIngredientes"

storiesOf('ListaIngredientes', module)

  .add('simple usage', () => {
    return <ListaIngredientes lista={[
      { nombre: "Tomate", precio: 10 },
      { nombre: "Lechuga" },
      { nombre: "Queso", precio: 20 },
      { nombre: "Carne", precio: 50 }
    ]} />
  })


 
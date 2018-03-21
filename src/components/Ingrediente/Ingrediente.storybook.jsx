import React from 'react';
import { storiesOf } from '@storybook/react';

import Ingrediente from "./Ingrediente"

storiesOf('Ingrediente', module)

  .add('simple usage', () => {
    const ingrediente = { nombre: "Tomate", precio: 20 }
    return <Ingrediente ingrediente={ingrediente} />
  })

  .add('ingredientes gratis', () => {
    const ingrediente = { nombre: "Lechuga" }
    return <Ingrediente ingrediente={ingrediente} />
  })
 
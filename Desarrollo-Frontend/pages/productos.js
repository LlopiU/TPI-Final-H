import React, { useState } from 'react'
import Head from 'next/head'

import Cabecera from '../components/cabecera'
import ListaProductos from '../components/lista-productos'

const Productos = (props) => {

  return (
    <>
      <div className="w-full">
        <Head>
          <title>Productos - Pedro's Bar</title>
          <meta property="og:title" content="Productos - TPI - Frontend" />
          <link rel="icon" href="./Logo-reporte.png" type="image/x-icon" />
        </Head>
        <Cabecera rootClassName="cabecera-root-class-name1"></Cabecera>
        <ListaProductos></ListaProductos>
      </div>
    </>
  )
}

export default Productos

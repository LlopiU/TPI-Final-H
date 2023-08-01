import React from 'react'
import Head from 'next/head'

import Cabecera from '../components/cabecera'
import ListaCompras from '../components/lista-compras'

const Compras = (props) => {
  return (
    <>
      <div className="w-full">
        <Head>
          <title>Compras - Pedro's Bar</title>
          <meta property="og:title" content="Compras - TPI - Frontend" />
          <link rel="icon" href="./Logo-reporte.png" type="image/x-icon" />

        </Head>
        <Cabecera rootClassName="cabecera-root-class-name2"></Cabecera>
        <ListaCompras rootClassName="lista-compras-root-class-name"></ListaCompras>
      </div>
     
    </>
  )
}

export default Compras

import React from 'react'
import Head from 'next/head'

import Cabecera from '../components/cabecera'
import { useAppContext } from '../context/state'
import AgregarVenta from '../components/agregar-venta'
import AgregarCompra from '../components/agregar-compra'

const Menu = (props) => {
  const {addVentas, addCompras} = useAppContext();
  const [showAddVentas, setShowAddVentas] = addVentas;
  const [showAddCompras, setShowAddCompras] = addCompras;

  return (
    <>
      <div className="menu-container">
        <Head>
          <title>Menu - Pedro's Bar</title>
          <meta property="og:title" content="Menu - TPI - Frontend" />
        </Head>
        <Cabecera rootClassName="cabecera-root-class-name1"></Cabecera>
        <div>
            <h2 >Bienvenidos al Bar de Pedro</h2>
            <p >
                Ésta a punto de ingresar a la pagina de compra y venta de productos de la cantidad de 
                <span > Facultad Regional Resistencia</span>, 
                por favor indique que desea realizar primero.</p>
        </div>
        <div className="menu-container1">
           
          <div className="menu-section">
            <button
              id="botonNuevaVenta"
              type="button"
              className="menu-button button"
              onClick={()=>{setShowAddVentas(true)}}
            >
              <span className="menu-button-text">Nueva venta</span>
            </button>
          </div>
          <div className="menu-section menu-container3">
            <button
              name="botonNuevaCompra"
              type="button"
              className="menu-button button"
              onClick={()=>{setShowAddCompras(true)}}
            >
              <span className="menu-button-text">Nueva compra</span>
            </button>
          </div>
          
        </div>
        <div>
            <img src={process.env.PUBLIC_URL + '/Desarrollo-Frontend/public/fondo1.jpg'}/>
          </div>
        {
              showAddVentas? <AgregarVenta update={()=>{}}></AgregarVenta>: null
        }
        {
              showAddCompras? <AgregarCompra update={()=>{}}></AgregarCompra>: null
        }
      </div>
      <style jsx>
        {`
          .menu-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .menu-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 0rem;
            align-items: center;
            border-radius: 2rem;
            margin-bottom: 0rem;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          @media (max-width: 530px) {
            .menu-container1 {
              flex-direction: column;
            }
            .menu-container3 {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Menu

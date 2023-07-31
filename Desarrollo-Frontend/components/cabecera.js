import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Cabecera = (props) => {
  return (
    <>
      <div className={`cabecera-container ${props.rootClassName} `}>
        
        <div className="header-nav">
        
        <Link href="/">
            <a className="header-nav-pedro">
              <img
                id="logoHorizontal"
                alt="logo"
                src="/pedro_s.-logo.png"
                className="header-logo"
              />
            </a>
          </Link>
          
          <Link href="/" name="botonInicio">
            <a className="header-nav-button button">{props.button2}</a>
          </Link>
          <Link href="/productos" name="botonProductos">
            <a className="header-nav-button button cabecera-link3">
              {props.button23}
            </a>
          </Link>
          <Link href="/ventas" name="botonVentas">
            <a className="header-nav-button button">{props.button22}</a>
          </Link>
          <Link href="/compras" name="botonCompras">
            <a className="header-nav-button button">{props.button21}</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .cabecera-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            font-weight: bold;
          }
        `}
      </style>
    </>
  )
}

Cabecera.defaultProps = {
  button2: 'Inicio',
  image_alt1: 'image',
  image_src: '3b0193fd-a611-4c05-b0d9-17f4945bbffa',
  image_src1: '8d2967b0-9a11-4d12-9a10-e44d32f9eb52',
  button22: 'Ventas',
  image_alt: 'image',
  button: 'Button',
  button23: 'Productos',
  button21: 'Compras',
  rootClassName: '',
  image_alt2: 'image',
  button1: 'Button',
  image_src2: '/eliminar-black-1500h.png',
  text: 'Text',
}

Cabecera.propTypes = {
  button2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  button22: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
  button23: PropTypes.string,
  button21: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt2: PropTypes.string,
  button1: PropTypes.string,
  image_src2: PropTypes.string,
  text: PropTypes.string,
}

export default Cabecera

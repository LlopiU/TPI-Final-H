import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import Compra from './compra'
import ElementoVacio from './elemento-vacio'
import axios from 'axios'
import { useAppContext } from '../context/state'
import AgregarCompra from './agregar-compra'
import DetallesCompra from './detalles-compra'
import EliminarCompra from './eliminar-compra'
import { searchFilterId } from '../utils/utils'

const ListaCompras = (props) => {
  const [compras, setCompras] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const {showCompras, addCompras, eliminarCompra} = useAppContext();
  const [showAddCompras, setShowAddCompras] = addCompras;
  const [showCompra, setShowCompra] = showCompras;
  const [showEliminarCompra, setShowEliminarCompra] = eliminarCompra;

  const fetchCompras = () => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/compras`;
    axios.get(url)
    .then(res => {
        if (res.data.length != 0) {
          setCompras(res.data);
          setFiltrado(res.data);
        }
    })
    .catch(error => {
        console.log(error);
    })
  }

  useEffect(()=>{
    fetchCompras();
  }, [])

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    const aux = e.target.value;
    setFiltrado(searchFilterId(compras, aux.toLowerCase()))
  }

  const updateAdd = (id) =>{
    fetchCompras();
  }

  const updateDelete = (id) =>{
    const indiceElem = compras.findIndex(elem => {
      return elem.id === id;
    });
    compras.splice(indiceElem,1);
    setFiltrado(compras);
  }

  return (
    <>
      <div className={`lista-compras-container ${props.rootClassName} `}>
        <div className="lista-compras-container1">
          <div class="flex justify-left items-left h-screen ">
            <div className="lista-compras-container3">
              <span className="lista-compras-label label">
                <span>COMPRAS</span>
                <br></br>
              </span>
              <div class="flex justify-center items-right h-screen">
            <a className="boton mt-8 px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" onClick={()=>{setShowAddCompras(true)}}>Agregar Compras</a>
            </div>
            </div>
            
          </div>
          
          
          <div className="lista-compras-container5">
            <div className="lista-compras-encabezado">
              <div className="lista-compras-container6">
                <span className="lista-compras-text2">ID</span>
                <span className="lista-compras-text3">Proveedor</span>
                <span className="lista-compras-text4">Importe</span>
                <span className="lista-compras-text5">{props.text413}</span>
              </div>
            </div>
            <div className="lista-compras-container7">
              { //Muestra cada producto de la lista.
                (filtrado.length)?
                  filtrado.map((elemento) => {
                    return <Compra key={elemento.id} id={elemento.id} proveedor={elemento.proveedor} fecha={elemento.fecha} importe={elemento.importe}></Compra>
                  })
                  : //Si la lista no tiene elementos, se muestra una fila que indica que la lista esta vacia.
                  <ElementoVacio></ElementoVacio>
              }
              { //Si esta habilitado el popup para mostrar un producto, se lo muestra para el id del producto que lo haya habilitado
                showCompra!=-1 ? <DetallesCompra id={showCompra} proveedor={filtrado.filter(elem => {return elem.id === showCompra})[0].proveedor} fecha={filtrado.filter(elem => {return elem.id === showCompra})[0].fecha}></DetallesCompra>: null
              }
              {
                showEliminarCompra!=-1 ? <EliminarCompra id={showEliminarCompra} update={updateDelete}></EliminarCompra>: null
              }
              {
                showAddCompras? <AgregarCompra update={updateAdd}></AgregarCompra>: null
              }


            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .boton {
            margin: 30px;
          }
          .lista-compras-container {
            width: 100%;
            height: auto;
            display: flex;
            padding: 2rem;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .lista-compras-container1 {
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1300px;
            flex-direction: column;
          }
          .lista-compras-container2 {
            align-self: stretch;
            align-items: center;
            padding-left: 2rem;
            margin-bottom: 1rem;
            padding-right: 2rem;
            justify-content: space-between;
          }
          .lista-compras-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;

          }
          .lista-compras-label {
            color: var(--dl-color-gray-black);
            margin: 0px;
            font-size: 2.2rem;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }

          .lista-compras-btn-add {
            width: 7rem;
            height: 3rem;
            align-self: center;
            align-items: center;
            margin-left: 1rem;
            margin-right: 0rem;
            border-radius: 5px;
            background-color: var(--dl-color-indigo-600);
            color: var(--dl-color-gray-900);
            font-family: Poppins;
          }

          .lista-compras-btn-add:hover {
            background-color: var(--dl-color-gray-500);
          }

          .lista-compras-textinput {
            width: auto;
            height: auto;
            margin: 0rem;
            font-size: 1.2rem;
            align-self: center;
            font-family: Poppins;
            border-color: rgba(217, 217, 217, 0);
            border-width: 0px;
            background-color: transparent;
          }
          
          .lista-compras-container5 {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .lista-compras-encabezado {
            flex: 0 0 auto;
            width: 100%;
            height: 4rem;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 0rem;
            flex-direction: row;
            padding-bottom: 0rem;
            justify-content: space-between;
            background-color: black;
            border-top-radius: 5px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .lista-compras-container6 {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          .lista-compras-text2 {
            color: var(--dl-color-gray-white);
            width: 8rem;
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .lista-compras-text3 {
            color: var(--dl-color-gray-white);
            width: 15rem;
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .lista-compras-text4 {
            color: var(--dl-color-gray-white);
            width: 5rem;
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .lista-compras-text5 {
            color: var(--dl-color-gray-white);
            width: 10rem;
            height: auto;
            font-size: 1.2rem;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .lista-compras-container7 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            border-radius: 2rem;
            margin-bottom: 0rem;
            flex-direction: column;
            background-color: var(--dl-color-color-negro);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }

          @media (max-width: 1200px) {
            .lista-compras-textinput {
              align-self: stretch;
            }
            .lista-compras-text2 {
              font-style: normal;
              font-weight: 600;
            }
            .lista-compras-text3 {
              font-style: normal;
              font-weight: 600;
            }
            .lista-compras-text4 {
              font-style: normal;
              font-weight: 600;
            }
            .lista-compras-text5 {
              font-style: normal;
              font-weight: 600;
            }
          }
          @media (max-width: 991px) {
            .lista-compras-textinput {
              width: 15rem;
            }
            .lista-compras-text2 {
              font-size: 1rem;
            }
            .lista-compras-text3 {
              font-size: 1rem;
            }
            .lista-compras-text4 {
              font-size: 1rem;
            }
            .lista-compras-text5 {
              font-size: 1rem;
            }
          }
          @media (max-width: 767px) {
            .lista-compras-label {
              font-size: 1.8rem;
            }
            .lista-compras-btn-add {
              width: 2rem;
              height: 2rem;
            }
            .lista-compras-textinput {
              width: 146px;
              padding-top: 0.2rem;
              padding-bottom: 0.2rem;
            }
            .lista-compras-encabezado {
              height: 2rem;
              border-top-left-radius: 1rem;
              border-top-right-radius: 1rem;
            }
            .lista-compras-text2 {
              font-size: 0.8rem;
            }
            .lista-compras-text3 {
              font-size: 0.8rem;
            }
            .lista-compras-text4 {
              font-size: 0.8rem;
            }
            .lista-compras-text5 {
              font-size: 0.8rem;
            }
            .lista-compras-container7 {
              border-bottom-left-radius: 1rem;
              border-bottom-right-radius: 1rem;
            }
          }
          @media (max-width: 530px) {
            .lista-compras-container {
              padding: 1rem;
            }
            .lista-compras-container2 {
              padding-left: 0rem;
              padding-right: 0rem;
            }
            .lista-compras-label {
              font-size: 1.5rem;
              margin-top: 0rem;
              margin-left: 0rem;
              margin-right: 0rem;
              margin-bottom: 0rem;
            }
            .lista-compras-btn-add {
              width: 1.5rem;
              height: 1.5rem;
              margin-left: 0.5rem;
            }
            .lista-compras-image {
              width: 1rem;
              height: 1rem;
            }
            .lista-compras-textinput {
              width: 6rem;
              font-size: 0.85rem;
              padding-top: 0.2rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              padding-bottom: 0.2rem;
            }
            
            .lista-compras-encabezado {
              width: 100%;
              padding-left: 1rem;
              padding-right: 1rem;
              border-top-left-radius: 1rem;
              border-top-right-radius: 1rem;
            }
            .lista-compras-container6 {
              width: 90%;
            }
            .lista-compras-text2 {
              width: 2rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .lista-compras-text3 {
              color: var(--dl-color-gray-white);
              width: 5rem;
              font-size: 0.7rem;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .lista-compras-text4 {
              width: 4rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .lista-compras-text5 {
              width: 3rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .lista-compras-container7 {
              padding-left: 0rem;
              border-radius: 0rem;
              padding-right: 0rem;
              border-bottom-left-radius: 1rem;
              border-bottom-right-radius: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

ListaCompras.defaultProps = {
  text111: 'Id',
  text1111: 'Id',
  text1113: 'Id',
  image_src4: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  rootClassName: '',
  image_src11: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text41: 'Fecha',
  text4111: '01/01/2001',
  image_alt42: 'image',
  text11111: 'Id',
  image_src5: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_alt41: 'image',
  text412: '01/01/2001',
  text1115: 'Id',
  image_alt5: 'image',
  image_src41: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_alt4: 'image',
  text1112: 'Id',
  image_src21: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text11151: 'Id',
  text411: '01/01/2001',
  image_alt21: 'image',
  image_src42: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text413: 'Fecha',
  text11: 'Id',
  image_alt11: 'image',
}

ListaCompras.propTypes = {
  text111: PropTypes.string,
  text1111: PropTypes.string,
  text1113: PropTypes.string,
  image_src4: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src11: PropTypes.string,
  text41: PropTypes.string,
  text4111: PropTypes.string,
  image_alt42: PropTypes.string,
  text11111: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt41: PropTypes.string,
  text412: PropTypes.string,
  text1115: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src41: PropTypes.string,
  image_alt4: PropTypes.string,
  text1112: PropTypes.string,
  image_src21: PropTypes.string,
  text11151: PropTypes.string,
  text411: PropTypes.string,
  image_alt21: PropTypes.string,
  image_src42: PropTypes.string,
  text413: PropTypes.string,
  text11: PropTypes.string,
  image_alt11: PropTypes.string,
}

export default ListaCompras

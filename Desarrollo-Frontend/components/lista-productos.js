import React, { useEffect, useState } from 'react'

import PropTypes, { element } from 'prop-types'

import Producto from './producto'
import ElementoVacio from './elemento-vacio'
import axios from 'axios'
import { getPageFiles } from 'next/dist/server/get-page-files'
import { useAppContext } from '../context/state'
import AgregarProducto from './agregar-producto'
import DetallesProducto from './detalles-producto'
import EliminarProducto from './eliminar-producto'
import { searchFilterNombre } from '../utils/utils'

const ListaProductos = (props) => {
  const [productos, setProductos] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const {showProductos, addProductos, eliminarProducto} = useAppContext();
  const [showAddProductos, setShowAddProductos] = addProductos;
  const [showProducto, setShowProducto] = showProductos;
  const [showEliminarProducto, setShowEliminarProducto] = eliminarProducto;

  const fetchProductos = () => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/productos`;
    axios.get(url)
    .then(res => {
        if (res.data.length != 0) {
          setProductos(res.data);
          setFiltrado(res.data);
        }
    })
    .catch(error => {
        console.log(error);
    })
  }

  useEffect(()=>{
    fetchProductos();
  }, [])

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    const aux = e.target.value;
    setFiltrado(searchFilterNombre(productos, aux.toLowerCase()))
  }

  const updateAdd = (id) =>{
    fetchProductos();
  }

  const updateDelete = (id) =>{
    const indiceElem = productos.findIndex(elem => {
      return elem.id === id;
    });
    productos.splice(indiceElem,1);
    setFiltrado(productos);
  }

  return (
    <>
      <div className="lista-productos-container">
        <div className="lista-productos-container1">
          <div className="lista-productos-container2 pop-up-list-row">
            <div className="lista-productos-container3">
              <span className="lista-productos-label label">
                <span>PRODUCTOS</span>
                <br></br>
              </span>
            </div>
            <a className="mt-8 px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" onClick={()=>{setShowAddProductos(true)}}>Agregar Productos</a>
            <div className="lista-productos-container4">
              
                <input
                  type="text"
                  id="inputBuscarProducto"
                  placeholder="Buscar nombre"
                  className="lista-productos-textinput input"
                  onChange={handleChange}
                />
                
              
            </div>
          </div>
          <div className="lista-productos-lista">
            <div className="lista-productos-encabezado">
              <div className="lista-productos-container6">
                <span className="lista-productos-text2">ID</span>
                <span className="lista-productos-text3">Nombre</span>
                <span className="lista-productos-text4">{props.text}</span>
                <span className="lista-productos-text5">{props.text2}</span>
              </div>
            </div>
            <div className="lista-productos-container7">
              { 
                (filtrado.length)?
                  filtrado.map((elemento) => {
                    return <Producto key={elemento.id} id={elemento.id} nombre={elemento.nombre} stock={elemento.stock} precioVenta={elemento.precioVenta}></Producto>
                  })
                  : 
                  <ElementoVacio></ElementoVacio>
              }
              { 
                showProducto!=-1 ? <DetallesProducto id={showProducto}></DetallesProducto>: null
              }
              {
                showEliminarProducto!=-1 ? <EliminarProducto id={showEliminarProducto} update={updateDelete}></EliminarProducto>: null
              }
              {
                showAddProductos? <AgregarProducto update={updateAdd}></AgregarProducto>: null
              }
            </div>
          </div>
        </div>
      </div>
      <style jsx>
  {`
    .lista-productos-container {
      width: 100%;
      height: auto;
      display: flex;
      padding: 2rem;
      position: relative;
      align-items: center;
      flex-direction: column;
    }
    .lista-productos-container1 {
      width: 100%;
      height: auto;
      display: flex;
      max-width: 1300px;
      flex-direction: column;
    }
    .lista-productos-container2 {
      align-self: stretch;
      align-items: center;
      padding-left: 2rem;
      margin-bottom: 1rem;
      padding-right: 2rem;
      justify-content: space-between;
    }
    .lista-productos-container3 {
      flex: 0 0 auto;
      margin-left:5px;
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .lista-productos-label {
      color: var(--dl-color-gray-black);
      margin: 0px;
      font-size: 2.2rem;
      font-style: normal;
      font-family: Poppins;
      font-weight: 600;
    }
    .lista-productos-btn-add {
      width: 10rem;
      height: 3rem;
      align-self: center;
      box-shadow: 5px 5px 10px 0px rgba(212, 212, 212, 0);
      transition: 0.3s;
      align-items: center;
      margin-left: 1rem;
      margin-right: 0rem;
      border-radius: 3px;
      background-color: var(--dl-color-color-naranja);
    }
    .lista-productos-btn-add:hover {
      transform: scale(1.05);
    }
    .lista-productos-container4 {
      flex: 0 0 auto;
      width: auto;
      height: auto;
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      justify-content: flex-end;
    }
    .lista-productos-button {
      color: var(--dl-color-gray-white);
      font-size: 1.2rem;
      align-self: stretch;
      font-style: normal;
      transition: 0.3s;
      font-family: Poppins;
      font-weight: 400;
      margin-left: 6rem;
      padding-top: 0.5rem;
      margin-right: 2rem;
      padding-left: 1rem;
      border-radius: 3rem;
      padding-right: 1rem;
      padding-bottom: 0.5rem;
      background-color: var(--dl-color-color-naranja);
    }
    .lista-productos-button:hover {
      transform: scale(1.05);
    }
    .lista-productos-container5 {
      flex: 0 0 auto;
      width: 20rem;
      height: auto;
      display: flex;
      align-self: center;
      align-items: center;
      border-color: var(--dl-color-gray-500);
      border-width: 1px;
      border-radius: 3rem;
      justify-content: space-between;
    }
    .lista-productos-encabezado {
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
      background-color: var(--dl-color-gray-black);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .lista-productos-container6 {
      flex: 0 0 auto;
      width: 90%;
      height: auto;
      display: flex;
      align-self: center;
      align-items: center;
      justify-content: flex-start;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .lista-productos-text2 {
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
    .lista-productos-text3 {
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
    .lista-productos-text4 {
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
    .lista-productos-text5 {
      color: var(--dl-color-color-blanco);
      width: 10rem;
      height: auto;
      font-size: 1.2rem;
      text-align: center;
      font-family: Poppins;
      font-weight: 600;
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .lista-productos-container7 {
      flex: 1;
      height: auto;
      display: flex;
      align-self: stretch;
      align-items: flex-end;
      border-radius: 5px;
      margin-bottom: 0rem;
      flex-direction: column;
      background-color: var(--dl-color-color-negro);
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    @media (max-width: 1200px) {
      .lista-productos-container2 {
        align-self: stretch;
      }
      .lista-productos-text2 {
        font-style: normal;
        font-weight: 600;
      }
      .lista-productos-text3 {
        font-style: normal;
        font-weight: 600;
      }
      .lista-productos-text4 {
        font-style: normal;
        font-weight: 600;
      }
      .lista-productos-text5 {
        font-style: normal;
        font-weight: 600;
      }
    }
    @media (max-width: 991px) {
      .lista-productos-text2 {
        font-size: 1rem;
      }
      .lista-productos-text3 {
        font-size: 1rem;
      }
      .lista-productos-text4 {
        font-size: 1rem;
      }
      .lista-productos-text5 {
        font-size: 1rem;
      }
    }
    @media (max-width: 767px) {
      .lista-productos-container2 {
        padding: 0;
      }
      .lista-productos-label {
        font-size: 1.5rem;
      }
      .lista-productos-btn-add {
        width: 1.8rem;
        height: 1.8rem;
        margin-left: 0;
      }
      .lista-productos-encabezado {
        height: 2rem;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .lista-productos-text2 {
        font-size: 0.8rem;
      }
      .lista-productos-text3 {
        width: 10rem;
        font-size: 0.8rem;
      }
      .lista-productos-text4 {
        font-size: 0.8rem;
      }
      .lista-productos-text5 {
        font-size: 0.8rem;
      }
      .lista-productos-container7 {
        border-radius: 0rem;
        border-bottom-left-radius: 1rem;
      }
    }
    @media (max-width: 530px) {
      .lista-productos-container {
        padding: 1rem;
      }
      .lista-productos-container2 {
        padding-left: 0rem;
        padding-right: 0rem;
      }
      .lista-productos-label {
        font-size: 1.5rem;
      }
      .lista-productos-btn-add {
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.5rem;
      }
      .lista-productos-encabezado {
        padding-left: 1rem;
        padding-right: 1rem;
        border-top-left-radius: 5px;
        border-top-right-radius: 1px;
      }
      .lista-productos-container6 {
        width: 90%;
      }
      .lista-productos-text2 {
        width: 2rem;
        font-size: 0.7rem;
        font-style: normal;
        font-weight: 600;
        margin-left: 1rem;
        margin-right: 1rem;
      }
      .lista-productos-text3 {
        width: 5rem;
        font-size: 0.7rem;
        font-style: normal;
        font-weight: 600;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      .lista-productos-text4 {
        width: 4rem;
        font-size: 0.7rem;
        font-style: normal;
        font-weight: 600;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      .lista-productos-text5 {
        width: 3rem;
        font-size: 0.7rem;
        font-style: normal;
        font-weight: 600;
        margin-left: 1rem;
        margin-right: 0rem;
      }
      .lista-productos-container7 {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
    }
  `}
</style>

    </>
  )
}

ListaProductos.defaultProps = {
  text211: '$0,00',
  text4: 'Última actualización',
  text412: '01/01/2001',
  image_alt41: 'image',
  text41: '01/01/2001',
  text1111: 'Id',
  text: 'Stock',
  text411: '01/01/2001',
  text72: '0',
  text3: '$0,00',
  image_src2: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_src43: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_src1: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text212: '$0,00',
  image_alt4: 'image',
  image_alt2: 'image',
  image_alt42: 'image',
  text71: '0',
  image_alt43: 'image',
  text1112: 'Id',
  image_src4: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  rootClassName: '',
  text11: 'Id',
  image_src42: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_src41: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_alt1: 'image',
  button: 'Button',
  text1: '0',
  text5: 'Button',
  text2: 'Precio',
  text6: '0',
}

ListaProductos.propTypes = {
  text211: PropTypes.string,
  text4: PropTypes.string,
  text412: PropTypes.string,
  image_alt41: PropTypes.string,
  text41: PropTypes.string,
  text1111: PropTypes.string,
  text: PropTypes.string,
  text411: PropTypes.string,
  text72: PropTypes.string,
  text3: PropTypes.string,
  image_src2: PropTypes.string,
  image_src43: PropTypes.string,
  image_src1: PropTypes.string,
  text212: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt42: PropTypes.string,
  text71: PropTypes.string,
  image_alt43: PropTypes.string,
  text1112: PropTypes.string,
  image_src4: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  image_src42: PropTypes.string,
  image_src41: PropTypes.string,
  image_alt1: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
}

export default ListaProductos

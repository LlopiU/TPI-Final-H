import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useAppContext } from '../context/state';
import { parseFechaFront } from '../utils/utils';
import { useRouter } from 'next/router';

import LineaReporte from '../components/linea-reporte';

const ReporteVentasDia = (props) => {
  const [ventas, setVentas] = useState([]);
  const [totalVendido, setTotalVendido] = useState(0);
  const [costoMercaderia, setCostoMercaderia] = useState(0);
  const [margenGanancia, setMargenGanancia] = useState(0);
  const {dias, meses, anios} = useAppContext();
  const [anio, setAnio] = anios;
  const [mes, setMes] = meses;
  const [dia, setDia] = dias;
  const router = useRouter();

  const fetchVentas = async (dia, mes, anio) => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/ventas/diario/${dia}/${mes}/${anio}`;

    try {
      const response = await axios.get(url);
      const ventasData = response.data;

      if (ventasData.length !== 0) {
        setVentas(ventasData);
        calcularTotales(ventasData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLineasVenta = async (idVenta) => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/ventas/${idVenta}/lineas`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const fetchProducto = async (idProd) => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/productos/${idProd}/`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const calcularTotales = async (ventasData) => {
    let total = 0;
    let costo = 0;

    for (const venta of ventasData) {
      const lineasVenta = await fetchLineasVenta(venta.id);
      let importeVenta = 0;

      for (const linea of lineasVenta) {
        const prod = await fetchProducto(linea.id_producto);
        const { cantidad, precio_unitario } = linea;
        const precio = prod.precioVenta;
        const importeLinea = parseFloat(cantidad) * parseFloat(precio_unitario);
        importeVenta += importeLinea;
        total += importeLinea;
        costo += parseFloat(precio) * parseFloat(cantidad);
      }
      venta.importe = importeVenta;
    }

    const ganancia = total - costo;

    setTotalVendido(total);
    setCostoMercaderia(costo);
    setMargenGanancia(ganancia);
  };

  useEffect(() => {
    const dia = router.query.dia;
    const mes = router.query.mes;
    const anio = router.query.anio;
    fetchVentas(dia,mes,anio);
  }, []);

  const getFechaActual = () => {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
  
    return `${dia}/${mes}/${anio}`;
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen flex items-center justify-center">
        <Head>
          <title>Reporte anual de ventas - Pedro's Bar</title>
          <meta property="og:title" content="Reporte-Ventas - TPI - Frontend" />
          <link rel="icon" href="./Logo-reporte.png" type="image/x-icon" />
        </Head>
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl">
          <div className="flex items-center justify-between mb-4">
            <img
              alt="Logo"
              src="./Logo-reporte.png"
              className="h-16"
            />
            <span className="text-sm text-gray-800">
              {getFechaActual()}
            </span>
          </div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2 text-gray-800">
              Reporte de Ventas del día {router.query.dia}/{router.query.mes}/{router.query.anio}
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center font-bold mb-4">
            <span className="text-gray-800">ID</span>
            <span className="text-gray-800">Fecha</span>
            <span className="text-gray-800">Cliente</span>
            <span className="text-gray-800">Importe</span>
          </div>
          <div className="grid gap-4">
            {ventas.map((venta, index) => (
              <LineaReporte
                key={index}
                id={venta.id}
                fecha={venta.fecha}
                cliente={venta.cliente}
                importe={venta.importe} // Asigna el importe de la venta si está disponible
              />
            ))}
          </div>
          <div className="mt-6 ml-2">
            <span className="text-total font-bold text-lg text-gray-800 block">
              Total Vendido: ${totalVendido.toFixed(2)}
            </span>
            <span className="text-total font-bold text-lg text-gray-800 block">
              Costo mercadería vendida: ${costoMercaderia.toFixed(2)}
            </span>
            <span className="text-total font-bold text-lg text-gray-800 block">
              Margen de ganancia: ${margenGanancia.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
  
  
  
};

export default ReporteVentasDia;
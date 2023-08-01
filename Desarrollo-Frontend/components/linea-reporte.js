import React from 'react';
import PropTypes from 'prop-types';

const LineaReporte = (props) => {
  const fechaFormateada = new Date(props.fecha).toLocaleDateString();

  return (
    <div className="linea-reporte-fila reporte-fila bg-gray-100 rounded-lg p-4 mb-2">
      <div className="reporte-fila-campos grid grid-cols-4 gap-2 text-center">
        <span className="reporte-fila-id font-bold">{props.id}</span>
        <span className="reporte-fila-fecha">{fechaFormateada}</span>
        <span className="reporte-fila-cliente">{props.cliente}</span>
        <span className="reporte-fila-importe font-bold">${props.importe}</span>
      </div>
    </div>
  );
};

LineaReporte.defaultProps = {
  importe: '$0,00',
  cliente: 'Nombre',
  id: 'ID',
  fecha: '2023-07-31T00:08:32.000Z',
};

LineaReporte.propTypes = {
  importe: PropTypes.string,
  cliente: PropTypes.string,
  id: PropTypes.string,
  fecha: PropTypes.string,
};

export default LineaReporte;
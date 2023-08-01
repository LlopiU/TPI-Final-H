import React from 'react';
import Link from 'next/link';

const Cabecera = () => {
  return (
    <>
      <nav className="menu">
        <Link href="/" className="p-0" >
          <a >
          <img src="./pedro_s.-logo.png" alt="logo" className="h-10 w-full" />
          </a>
        </Link>
        <ul className="items-center justify-end pr-8">
          
          <li className="pr-4">
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className="pr-4">
            <Link href="/compras">
              <a>Compras</a>
            </Link>
          </li>
          <li className="pr-4">
            <Link href="/ventas">
              <a>Ventas</a>
            </Link>
          </li>
          <li className="pr-4">
            <Link href="/productos">
              <a>Productos</a>
            </Link>
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default Cabecera;

'use client';

import Image from "next/image";
import Card from "./componentes/card";
import Sidebar from "./sidebar/sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <h1>Datos interesantes</h1>
      
      {/* Botones */}
      <button onClick={() => alert('Botón 1 presionado')}>Botón 1</button>
      <button onClick={() => alert('Botón 2 presionado')}>Botón 2</button>

      {/* Imagen */}
      <div>
        <h2>Imagen</h2>
        <Image src="/path/to/your/image.jpg" alt="Descripción de la imagen" width={500} height={300} />
      </div>

      {/* Lista */}
      <div>
        <h2>Lista</h2>
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
      </div>

      {/* Tabla */}
      <div>
        <h2>Tabla</h2>
        <table>
          <thead>
            <tr>
              <th>Columna 1</th>
              <th>Columna 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dato 1</td>
              <td>Dato 2</td>
            </tr>
            <tr>
              <td>Dato 3</td>
              <td>Dato 4</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Enlace */}
      <div>
        <h2>Enlace</h2>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visita Example.com</a>
      </div>

      {/* Card */}
      <div>
        <h2>Card</h2>
        <Card 
          title="Título de la tarjeta" 
          data="Datos de ejemplo" 
          description="Esta es una descripción de ejemplo para la tarjeta." 
          phoneNumber="123-456-7890" 
        />
        <Card 
          title="Título de la tarjeta" 
          data="Datos de ejemplo" 
          description="Esta es una descripción de ejemplo para la tarjeta." 
          phoneNumber="123-456-7890" 
        />
        <Card 
          title="Título de la tarjeta" 
          data="Datos de ejemplo" 
          description="Esta es una descripción de ejemplo para la tarjeta." 
          phoneNumber="123-456-7890" 
        />
      </div>
    </div>
  );
}
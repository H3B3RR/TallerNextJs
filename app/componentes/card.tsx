import React from 'react';

interface CardProps {
  title: string;
  data: string;
  description: string;
  phoneNumber: string;
}

const Card: React.FC<CardProps> = ({ title, data, description, phoneNumber }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p><strong>Datos:</strong> {data}</p>
      <p><strong>Descripción:</strong> {description}</p>
      <p><strong>Teléfono:</strong> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
    </div>
  );
};

export default Card;
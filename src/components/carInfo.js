import React from "react";

const CarModal = ({ car, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{car.nome_modelo}</h2>
        <p>Ano: {car.ano}</p>
        <p>Combustível: {car.combustivel}</p>
        <p>Cor: {car.cor}</p>
        <p>Valor: R$ {car.valor}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default CarModal;
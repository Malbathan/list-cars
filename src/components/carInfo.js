import React, {useState, useEffect} from "react";
import BannerCarousel from "./carousel"
import styled from "styled-components";

import carData from "../utils/dataCars.json"

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ show }) => (show ? "block" : "none")}; 
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #000;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000; 
  display: ${({ show }) => (show ? "block" : "none")}; 
`;


const CarModal = ({ selectedCarId, onClose }) => {
  const [carDetails, setCarDetails] = useState(null);


  useEffect(() => {
    if (selectedCarId) {
      const selectedCar = carData.cars.find((car) => car.modelo_id === selectedCarId);

      if (selectedCar) {
        setCarDetails(selectedCar);
      }
    }
  }, [selectedCarId]);

  return (
    <Backdrop show={"true"}>
      <ModalWrapper show={"true"}>
        {carDetails ? (
        <>
          <BannerCarousel banners={carDetails.images} />

          <h2>{carDetails.nome_modelo}</h2>
          <p>Ano: {carDetails.ano}</p>
          <p>Combustível: {carDetails.combustivel}</p>
          <p>Cor: {carDetails.cor}</p>
          <p>Valor: R$ {carDetails.valor}</p>
          <button onClick={onClose}>Fechar</button>
        </>
      ) : (
        <p>Carregando...</p>
      )}
      </ModalWrapper >
    </Backdrop >
  );
};

export default CarModal;
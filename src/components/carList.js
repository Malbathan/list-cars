import React, { useEffect, useState } from "react";
import carData from "../utils/dataCars.json"
import brandData from "../utils/dataCarsByBrand.json"

function CarList() {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setCars(carData.cars);
    setBrands(brandData.cars);
  }, []);

  return (
    <div>
      <h1>Lista de Carros</h1>
      
    </div>
  );
}

export default CarList;
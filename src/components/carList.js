import React, { useState } from "react";

const CarList = ({ brands , cars }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
	console.log("TCL: CarList ->", selectedBrand)

  console.log(cars.filter((car) => car.brand === selectedBrand ))

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);

  };

  const filterCars = (selectedBrand) => {
    if (selectedBrand === "TODOS") {
      return [...cars];
    }

    const brandId = parseInt(selectedBrand);

    return selectedBrand
      ? cars.filter((car) => car.brand === brandId )
      : cars;
  };

  const filteredCars = filterCars(selectedBrand);

  return (
    <div>
      <h1>Lista de Carros</h1>
      <div>
        <label>Filtrar por Marca:</label>
        <select onChange={(e) => handleBrandFilter(e.target.value)}>
          <option value="TODOS">Todos</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>
            <h2>{car.nome_modelo}</h2>
            <p>Ano: {car.ano}</p>
            <p>Combustível: {car.combustivel}</p>
            <p>Cor: {car.cor}</p>
            <p>Valor: R$ {car.valor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
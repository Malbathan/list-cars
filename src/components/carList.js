import React, { useState } from "react";

const CarList = ({ brands, cars }) => {
  const [selectedBrand, setSelectedBrand] = useState("TODOS");
  const [selectedYearFilters, setSelectedYearFilters] = useState([]);
  const [selectedFuelFilters, setSelectedFuelFilters] = useState([]);
  const [selectedColorFilters, setSelectedColorFilters] = useState([]);

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
  };

  const handleYearFilter = (year) => {
    if (selectedYearFilters.includes(year)) {
      setSelectedYearFilters(selectedYearFilters.filter((filter) => filter !== year));
    } else {
      setSelectedYearFilters([...selectedYearFilters, year]);
    }
  };

  const handleFuelFilter = (fuel) => {
    if (selectedFuelFilters.includes(fuel)) {
      setSelectedFuelFilters(selectedFuelFilters.filter((filter) => filter !== fuel));
    } else {
      setSelectedFuelFilters([...selectedFuelFilters, fuel]);
    }
  };

  const handleColorFilter = (color) => {
    if (selectedColorFilters.includes(color)) {
      setSelectedColorFilters(selectedColorFilters.filter((filter) => filter !== color));
    } else {
      setSelectedColorFilters([...selectedColorFilters, color]);
    }
  };

  const filterCars = () => {

    const brandId = parseInt(selectedBrand);

    return cars.filter((car) => {
      return (
        (selectedBrand === "TODOS" || car.brand === brandId) &&
        (selectedYearFilters.length === 0 || selectedYearFilters.includes(car.ano)) &&
        (selectedFuelFilters.length === 0 || selectedFuelFilters.includes(car.combustivel)) &&
        (selectedColorFilters.length === 0 || selectedColorFilters.includes(car.cor))
      );
    });
  };

  const filteredCars = filterCars();

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
      <div>
        <label>Filtrar por Ano:</label>
        <ul>
          {[2014, 2015, 1993].map((year) => (
            <li key={year}>
              <label>
                <input
                  type="checkbox"
                  value={year}
                  checked={selectedYearFilters.includes(year)}
                  onChange={() => handleYearFilter(year)}
                />
                {year}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label>Filtrar por Combustível:</label>
        <ul>
          {["FLEX", "DIESEL"].map((fuel) => (
            <li key={fuel}>
              <label>
                <input
                  type="checkbox"
                  value={fuel}
                  checked={selectedFuelFilters.includes(fuel)}
                  onChange={() => handleFuelFilter(fuel)}
                />
                {fuel}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label>Filtrar por Cor:</label>
        <ul>
          {["BRANCA", "PRETO", "AZUL", "BEGE"].map((color) => (
            <li key={color}>
              <label>
                <input
                  type="checkbox"
                  value={color}
                  checked={selectedColorFilters.includes(color)}
                  onChange={() => handleColorFilter(color)}
                />
                {color}
              </label>
            </li>
          ))}
        </ul>
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

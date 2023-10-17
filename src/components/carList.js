import React, { useState } from "react";

import { 
  CarListContainer, 
  FilterLabel,
  FilterOption,
  CarItem,
  CarName,
  FilterOptions,
  FiltersContainer,
  CarsContainer,
  TitleContainer
} from "./styles" 

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
    <CarListContainer>
      <TitleContainer>Lista de Carros</TitleContainer>
      <FiltersContainer>
        <div>
          <FilterLabel>Filtrar por Marca:</FilterLabel>
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
          <FilterLabel>Filtrar por Ano:</FilterLabel>
          
          <FilterOptions>
            {[2014, 2015, 1993].map((year) => (
              <FilterOption key={year}>
                <label>
                  <input
                    type="checkbox"
                    value={year}
                    checked={selectedYearFilters.includes(year)}
                    onChange={() => handleYearFilter(year)}
                  />
                  {year}
                </label>
              </FilterOption>
            ))}
          </FilterOptions>
        </div>
        <div>
          <FilterLabel>Filtrar por Combustível:</FilterLabel>
          <FilterOptions>
            {["FLEX", "DIESEL"].map((fuel) => (
              <FilterOption key={fuel}>
                <label>
                  <input
                    type="checkbox"
                    value={fuel}
                    checked={selectedFuelFilters.includes(fuel)}
                    onChange={() => handleFuelFilter(fuel)}
                  />
                  {fuel}
                </label>
              </FilterOption>
            ))}
          </FilterOptions>
        </div>
        <div>
          <FilterLabel>Filtrar por Cor:</FilterLabel>
          <FilterOptions>
            {["BRANCA", "PRETO", "AZUL", "BEGE"].map((color) => (
              <FilterOption key={color}>
                <label>
                  <input
                    type="checkbox"
                    value={color}
                    checked={selectedColorFilters.includes(color)}
                    onChange={() => handleColorFilter(color)}
                  />
                  {color}
                </label>
              </FilterOption>
            ))}
          </FilterOptions>
        </div>
      </FiltersContainer>

      <CarsContainer>    
        <ul>
          {filteredCars.map((car) => (
            <CarItem key={car.id}>
              <CarName>{car.nome_modelo}</CarName>
              <p>Ano: {car.ano}</p>
              <p>Combustível: {car.combustivel}</p>
              <p>Cor: {car.cor}</p>
              <p>Valor: R$ {car.valor}</p>
            </CarItem>
          ))}
        </ul>
      </CarsContainer>    
    </CarListContainer>
  );
};

export default CarList;

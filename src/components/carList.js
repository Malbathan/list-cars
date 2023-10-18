import React, { useState } from "react";
import CarModal from "./carInfo";

import BannerCarousel from "./carousel"

import { 
  CarListContainer, 
  FilterLabel,
  FilterOption,
  CarItem,
  CarName,
  FilterOptions,
  FiltersContainer,
  CarsContainer,
  List,
  BannerContainer,
  CardImage,
  FilterTitle,
  Button
} from "./styles" 

const CarList = ({ brands, cars }) => {
  const [selectedBrand, setSelectedBrand] = useState("TODOS");
  const [selectedYearFilters, setSelectedYearFilters] = useState([]);
  const [selectedFuelFilters, setSelectedFuelFilters] = useState([]);
  const [selectedColorFilters, setSelectedColorFilters] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const banners = {
    1 : "https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/P90509733_highRes_bmw-x1-m35i-m-1-1-e1688068253589.jpg?quality=70&strip=info",
    2 : "https://quatrorodas.abril.com.br/wp-content/uploads/2023/07/mercedes-benz_cle-klasse_amg_lin-1-e1688585989690.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
    3 : "https://cdn.motor1.com/images/mgl/jlxXO6/s1/audi-rs7-sportback-performance.webp"
  }

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
  };

  const openModal = (car) => {
    setSelectedCar(car.modelo_id);
    setShowModal(true);
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
      <BannerContainer>
        <BannerCarousel banners={banners}/>
      </BannerContainer>
      <FiltersContainer>
        <FilterTitle> Filtros </FilterTitle>
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
        <List>
          {filteredCars.map((car) => (
            <CarItem key={car.id} onClick={() => openModal(car)}>
              
              <CardImage src={process.env.PUBLIC_URL + car.image} alt="imagem de um carro" />
              <CarName>{car.nome_modelo}</CarName>
              <p>{car.ano}</p>
              <p>R${car.valor}</p>
              <Button> Detalhes</Button>
            </CarItem>
          ))}
        </List>

        {showModal && (
        <CarModal selectedCarId={selectedCar} onClose={() => setShowModal(false)} />
        )}
      </CarsContainer> 

      

    </CarListContainer>
  );
};

export default CarList;

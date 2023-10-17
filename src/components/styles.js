import styled from "styled-components";

export const CarListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto; 
  grid-gap: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
`;

export const TitleContainer = styled.h3`
  grid-column: 1 / span 2;
  font-size: 38px;
`;

export const FiltersContainer = styled.div`
  text-align: left;
`;

export const CarsContainer = styled.div`
`;

export const FilterLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
  text-align: left;
`;

export const FilterOptions = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FilterOption = styled.li`
  margin-bottom: 5px;
`;

export const CarItem = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  list-style: none;
`;

export const CarName = styled.h2`
  color: #333;
`;
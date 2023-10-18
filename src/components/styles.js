import styled from "styled-components";


export const CarListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto; 
  grid-gap: 20px;
  padding: 20px;
  background: #292929
`;

export const BannerContainer = styled.div`
  grid-column: 1 / span 2;
`;

export const FiltersContainer = styled.div`
  text-align: left;
  height: 60vh;
  background: #0a0a0a85;
  padding: 10px;
  margin: 10px;
`;

export const FilterTitle = styled.div`
  font-size: 28px;
  background: #852d2d;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  padding: 5px 0;
`

export const CarsContainer = styled.div`

`;

export const List =styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`

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
  padding: 10px;
  margin: 10px 0;
  list-style: none;
  max-width: 25vw;
  background: #0a0a0a85;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0.8;
  border-radius: 5px;

  &:hover {
    transform: scale(1.1);
    opacity: 1
   }

  p {
    text-align: left;
    padding: 0 10px;
    
    &: nth-child(4){
      margin-top: -12px;
      color: red;
    }
  }
 
`;

export const CarName = styled.h2`
  color: #333;
  text-align: left;
`;

export const CardImage = styled.img`
  max-width: 20vw;
  height: 20vh;
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #333333;
  color: #fff;
`
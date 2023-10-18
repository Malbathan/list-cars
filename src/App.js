import './App.css';
import styled from 'styled-components';
import CarList from './components/carList';
import brandData from "./utils/dataCarsByBrand.json"

import Autocar from './assets/AutoCar.png'

const Logo = styled.img`
  max-width: 150px;
  transition: transform 0.3s;
  user-select: none;
  
  &:hover {
   transform: scale(1.2);
  }
`

function App() {
  return (
    <div className="App">
      <Logo src={Autocar} />
      <CarList brands={brandData.brands} cars={brandData.cars}/>
    </div>
  );
}

export default App;

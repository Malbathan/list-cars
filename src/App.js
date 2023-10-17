import './App.css';
import CarList from './components/carList';
import brandData from "./utils/dataCarsByBrand.json"

function App() {
  return (
    <div className="App">
      <p> Hello world!</p>
      <CarList brands={brandData.brands} cars={brandData.cars}/>
    </div>
  );
}

export default App;

import './App.css';
import Header from "./components/Header/Header"
import { Products } from "./components/cars/cars.jsx"


  
import SerchResults from './components/SerchResults';
import { Filters } from './components/filters/filters';

import CarBrandSelect from './components/makes';
console.log(Header)

const products =[
  {
      title:"2022 Ferrary 6.0 8cyl",
          
      price:"200,000",
      mileage:"50,000", 
      description:"Hermoso carro en excelentes condiciones.", 
      engine:"5.0L 8 Cilindros",
      vin:"111111111",
      date:"21-06-2023",
      like: true
  }, 
  {
      title:"2022 Ferrary 6.0 8cyl",
          
      price:"200,000",
      mileage:"50,000", 
      description:"Hermoso carro en excelentes condiciones.", 
      engine:"5.0L 8 Cilindros",
      vin:"222222",
      date:"21-06-2023",
      like: true
  },
  {
      title:"2022 Ferrary 6.0 8cyl",
          
      price:"200,000",
      mileage:"50,000", 
      description:"Hermoso carro en excelentes condiciones.", 
      engine:"5.0L 8 Cilindros",
      vin:"3333333",
      date:"21-06-2023",
      like: true
  }
  ]

function App() {
  
  return (
  
    <div className="App">
      <Header/>
      <CarBrandSelect></CarBrandSelect>
      <Filters></Filters>
      <SerchResults></SerchResults>
      <CarBrandSelect></CarBrandSelect>
      <Products products ={products}></Products>

      
    
     

    </div>
  );
}

export default App;

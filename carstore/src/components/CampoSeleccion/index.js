import React, { useState } from 'react';
import "./CampoSeleccion.css"
import Button from '../Button/index';
const CarMakerSelect = () => {
  const carData = [
    {
      maker: "Audi",
      models: [
        { model: "A3", startYear: 2018, endYear: 2022 },
        { model: "A4", startYear: 2017, endYear: 2020 },
        { model: "A5", startYear: 2019, endYear: 2021 },
        { model: "Q5", startYear: 2018, endYear: 2022 },
        { model: "Q7", startYear: 2017, endYear: 2020 }
      ]
    },
    {
      maker: "BMW",
      models: [
        { model: "3 Series", startYear: 2018, endYear: 2022 },
        { model: "5 Series", startYear: 2017, endYear: 2020 },
        { model: "X3", startYear: 2019, endYear: 2021 },
        { model: "X5", startYear: 2018, endYear: 2022 },
        { model: "i3", startYear: 2017, endYear: 2020 }
      ]
    },
    // Agrega más marcas, modelos y rangos de años de vehículos aquí
  ];

  const [selectedMaker, setSelectedMaker] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedStartYear, setSelectedStartYear] = useState('');
  const [selectedEndYear, setSelectedEndYear] = useState('');

  const handleMakerChange = (event) => {
    setSelectedMaker(event.target.value);
    setSelectedModel('');
    setSelectedStartYear('');
    setSelectedEndYear('');
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
    setSelectedStartYear('');
    setSelectedEndYear('');
  };

  const handleStartYearChange = (event) => {
    setSelectedStartYear(event.target.value);
  };

  const handleEndYearChange = (event) => {
    setSelectedEndYear(event.target.value);
  };

  const getModelsByMaker = (maker) => {
    const selectedCarMaker = carData.find(car => car.maker === maker);
    return selectedCarMaker ? selectedCarMaker.models : [];
  };

  const getYearsByModel = (maker, model) => {
    const selectedCarMaker = carData.find(car => car.maker === maker);
    if (selectedCarMaker) {
      const selectedModel = selectedCarMaker.models.find(carModel => carModel.model === model);
      if (selectedModel) {
        const years = [];
        for (let year = selectedModel.startYear; year <= selectedModel.endYear; year++) {
          years.push(year);
        }
        return years;
      }
    }
    return [];
  };
  const manejarEnvio = (e)=>
  {
    e.preventDefault()
    console.log("Funciona" , e)
   
  }

  return (
    <form  className='selectionField' onSubmit={manejarEnvio}>
      <div>
      <h3>Selecciona la Marca del auto</h3>
      <select value={selectedMaker} onChange={handleMakerChange}>
        <option value="">Selecciona una marca</option>
        {carData.map((car, index) => 
          <option key={index} value={car.maker}>{car.maker}</option>
        )}
      </select>

      {selectedMaker && (
        <div>
          <h3>Selecciona un modelo</h3>
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">Selecciona un modelo</option>
            {getModelsByMaker(selectedMaker).map((model, index) =>
              <option key={index} value={model.model}>{model.model}</option>
            )}
          </select>
        </div>
      )}

      {selectedModel && (
        <div>
          <h3>Selecciona año de inicio</h3>
          <select value={selectedStartYear} onChange={handleStartYearChange}>
            <option value="">Selecciona año de inicio</option>
            {getYearsByModel(selectedMaker, selectedModel).map((year, index) => 
              <option key={index} value={year}>{year}</option>
            )}
          </select>
        </div>
      )}

      {selectedStartYear && (
        <div>
          <h3>Seleciona hasta que año</h3>
          <select value={selectedEndYear} onChange={handleEndYearChange}>
            <option value="">Selecciona hasta que año</option>
            {getYearsByModel(selectedMaker, selectedModel).map((year, index) => 
              <option key={index} value={year}>{year}</option>
            )}
          </select>
        </div>
      )}

      {selectedMaker && selectedModel && selectedStartYear && selectedEndYear && (
        <p>Has seleccionado: {selectedMaker} - {selectedModel} - {selectedStartYear} to {selectedEndYear}</p>
      )}
      </div>
      <Button text="Buscar"></Button>
    </form>
    
  );
  
}

export default CarMakerSelect;

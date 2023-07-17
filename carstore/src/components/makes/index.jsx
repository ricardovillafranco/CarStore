import "./makes.css"
import React from 'react';

const CarBrandSelect = ({ onSelectBrand }) => {
  const carBrands = [
    "Audi",
    "BMW",
    "Chevrolet",
    "Ford",
    "Honda",
    "Hyundai",
    "Mercedes-Benz",
    "Nissan",
    "Toyota",
    "Volkswagen"
  ];

  return (
    <div className="brand-filter">
      <label>Selecciona una marca de auto</label>
      <select onChange={onSelectBrand}>
        <option value="">Todas las marcas</option>
        {carBrands.map((brand, index) => (
          <option key={index} value={brand}>{brand}</option>
        ))}
      </select>
    </div>
  );
};

export default CarBrandSelect;
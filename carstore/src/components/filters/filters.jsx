import "./filters.css"
import { useState } from "react"
export function Filters  () {
    const[maxPrice, setMaxPrice] = useState(0)
    const[maxYear, setMaxYear] = useState(0)
    const handleChangeMaxPrice = (e) => {
        setMaxPrice(e.target.value)
    }

    const handleChangeMaxYear = (e) => {
        setMaxYear(e.target.value)
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio</label>
                <input type="range" 
                id="price"
                min="0"
                max="200000"
                onChange={handleChangeMaxPrice}
                />
                <span>${maxPrice}</span>
            </div>
            <div>
                <label htmlFor="year">Año</label>
                <input type="range" 
                id="year"
                min="1990"
                max="2024"
                onChange={handleChangeMaxYear}

                />
                <span>${maxYear}</span>
            </div>

            <div>
                <label htmlFor="make">Marca</label>
                <select  id="make">
                    <option value="all">Todas</option>
                    <option value="bmw">BMW</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="ford">Ford</option>
                    <option value=""></option>
                </select>

            </div>
        </section>
    )
}
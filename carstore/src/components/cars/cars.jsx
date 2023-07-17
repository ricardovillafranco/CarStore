
import Card from "../Card"
import "./Cars.css"
export function Products ({products}) {
    
    return (
<main className="Cars">
    <ul className="Cars-Container">
        {products.map(({title,
          
          price,
          mileage, 
          description, 
          engine,
          vin,
          date,
          like}) =>(<Card
          key={vin}
          title={title}
          price={price}
          mileage={mileage}
          description={description}
          engine={engine}
          vin={vin}
          date={date}
          like={like}
          ></Card>))}
    </ul>

</main>

    )
}
import "./SerchResults.css"
import Card from "../Card"
const cars = [

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
    


const SerchResults =()=>{
    
        
    return <section>
        <h3 className="title">Tus resultados de busqueda</h3>
        <div className="CardContainer"> 
        {
        cars.map(car => {
          const{title, price, mileage, description, engine, vin, date, like} = car
          return (<Card 
          title={title} 
          key={vin}
          price={price}
          mileage={mileage}
          description={description}
          engine={engine}
          date={date}
          like={true} ></Card>)
        })
      }
        
          
        </div>
        
    </section>
}

export default SerchResults
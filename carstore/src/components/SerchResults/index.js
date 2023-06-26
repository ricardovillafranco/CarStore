import "./SerchResults.css"
import Card from "../Card"



const SerchResults =()=>{
    
    return <section>
        <h3 className="title">Tus resultados de busqueda</h3>
        <div className="CardContainer"> 
        <Card 
        
        title="2022 Ferrary 6.0 8cyl" 
        
        price="200,000" 
        mileage="50,000" 
        description="Hermoso carro en excelentes condiciones." 
        engine="5.0L 8 Cilindros" 
        date="21-06-2023" 
        like={true} 
        ></Card>
        <Card title="2022 Ferrary 6.0 8cyl" price="" mileage="" description="" engine="" date="" ></Card> 
        <Card title="2022 Ferrary 6.0 8cyl" price="" mileage="" description="" engine="" date="" ></Card>   
        </div>
        
    </section>
}

export default SerchResults
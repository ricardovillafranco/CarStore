import "./SerchResults.css"
import Card from "../Card"

const SerchResults =()=>{
    return <section>
        <h3 className="title">Tus resultados de busqueda</h3>
        <div className="CardContainer"> 
        <Card></Card>
        <Card></Card> 
        <Card></Card>   
        </div>
        
    </section>
}

export default SerchResults
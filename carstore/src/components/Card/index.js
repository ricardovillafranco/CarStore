import "./Card.css"
const Card = () =>
{
    return <div className="Card">    
        <h3>Titulo del vehiculo</h3>
    <img className="CardImg" src="/img/lazaro-rodriguez-30cbonTjs9Y-unsplash.jpg"></img>
        <p>Precio</p>
        <p>Mileage</p>
        <p>Aqui va la descripcion del vehiculo.</p>
        <p>Motor</p>
        <p>Fecha de publicacion</p>
        
    </div>
}

export default Card
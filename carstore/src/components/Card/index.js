import "./Card.css"
import { useState } from "react"
const Card = ({ title, price, mileage, description, engine, date, like}) =>

{   
    const [isLiked , setIsLiked] = useState(false)
    const liked = isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"
    const format = (price) => `$${price}`
    const handleLike = () =>{
        setIsLiked(!isLiked)
    }
    console.log(liked)
    return <div className="Card">    
        <h3>{title}</h3>

        <img className="CardImg"src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"></img>
        <div ><i onClick={handleLike}  className={liked}></i></div>
        <p>{format(price)}</p>
        
        <p>{mileage}</p>
        <p>{description}</p>
        <p>{engine}</p>
        <p>{date}</p>
        
    
      
    </div>
}

export default Card
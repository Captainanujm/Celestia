import react from "react";
import "./Card.css";
function Card(props){
     return(<div className="Card">
        <p className="card-para">{props.para}</p>
        <img src={props.img} alt="card-img"/>
     </div>)

}
export default Card;
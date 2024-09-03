import react from "react";
import assets from "../assets/assets.js";
import "./MainBody.css";
import random from "./Randomname.js"

function MainBody(){
    return(<div className="mainbody">
        <div className="nav">
            <h3 className="celestia">Celestia</h3>
            <img className="user-icon" src={assets.user_icon} alt="user"/>
        </div>
        <div className="greet-grandparent">
        <div className="greet-parent">
            <h1 className="message"><span>Hey,{random[Math.floor(Math.random()*random.length)]}</span></h1>
            <h1 className="assist-message">How can i assist you?</h1>
        </div>
        
        </div>
    </div>)

}
export default MainBody;
import react,{useContext,useState} from "react";
import assets from "../assets/assets.js";
import "./MainBody.css";
import random from "./Randomname.js"
import Card from "../Card/Card.jsx";
import { Context } from "../context/Context.jsx";



function MainBody(){
    const {onSent,input,setInput,showResult,setShowResult,getResult,setGetResult}=useContext(Context);
    const [name,setName]=useState(random[Math.floor(Math.random()*random.length)])
    function handleSend(event){
        setShowResult(true);
        event.preventDefault();
        onSent(input);
    }
    return(<div className="mainbody">
        <div className="nav">
            <h3 className="celestia">Celestia</h3>
            <img className="user-icon" src={assets.user_icon} alt="user"/>
        </div>
        <div className="greet-grandparent">
        {showResult==false?<div className="greet-parent">
            <h1 className="message"><span>Hey,{name}</span></h1>
            <h1 className="assist-message">How can i assist you?</h1>
        </div>:null}
        {showResult==false?<div className="card-area">
        <Card para="Suggest beautiful places to see on upcoming road trip..." img={assets.compass_icon}/>
        <Card para="Briefly summarize this concept: Urban planning..." img={assets.bulb_icon}/>
        <Card para="Brainstorm team bonding activites for our work retreat..." img={assets.message_icon}/>
        <Card para="Improve the readability of following code..." img={assets.code_icon}/>
        </div>:null}
        {showResult==true?<div className="get-Result">
            <p> {getResult} </p>
        </div>:null}
        <div className="input">
            <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} placeholder="Enter your prompt here"/>
            <div className="icons">
            <img src={assets.gallery_icon} alt="gallery-icon"/>
            <img src={assets.mic_icon} alt="mic-icon"/>
            <img onClick={handleSend} src={assets.send_icon} alt="send-icon"/>
            </div>

        </div>
        </div>
    </div>)

}
export default MainBody;
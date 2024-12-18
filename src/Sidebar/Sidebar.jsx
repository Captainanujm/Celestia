import React,{useState,useContext} from "react";
import { Context } from "../context/Context.jsx";
import "./Sidebar.css"
import assets from "../assets/assets.js";
function Sidebar(){
        const [extend,setextend]=useState(true);
    const {onSent,input,setInput,showResult,setShowResult,getResult,setGetResult,history,sethistory}=useContext(Context);
    function handlenewchat(){
        setShowResult(false);
        setInput("");
    }
    function handleClick(){
       setextend(prevExtend=>{
        return !prevExtend;
       })
        };
        return(<div className="sidebar">
        <div className="uppercomponent">
           <div className="menu">
        <img onClick={handleClick}className="menu-img" src={assets.menu_icon} alt="menu-icon"/>
        </div>
        {extend==true?<div>
        <button onClick={handlenewchat}className="newchat"><img className="plus-img" src={assets.plus_icon} alt="plus-icon"/><p>New chat</p></button>
        <p className="recent">Recent</p>
        </div>:null}
        
        {extend==true?<div className="recent-chat">
            {/* <img className="message-img" src={assets.message_icon} alt="message-icon"/>
            <div>hello</div> */}
            {history}
           </div>:null}
        </div>
       {extend==true?<div className="lowercomponent">
        <div className="help">
        <img className="history-img" src={assets.question_icon} alt="history-icon"/>
        <p>Help</p>
        </div>
        <div className="activity">
        <img className="activity-img" src={assets.history_icon} alt="activity-icon"/>
        <p>Activity</p>
        </div>
        <div className="settings">
        <img className="setting-img" src={assets.setting_icon} alt="setting-icon"/>
        <p>Settings</p>
        </div>
   
    </div>:null}
       </div> )
}
export default Sidebar;
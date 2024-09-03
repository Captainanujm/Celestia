import React,{useState} from "react";
import "./Sidebar.css"
import assets from "../assets/assets.js";
function Sidebar(){
    const [extend,setextend]=useState(false);
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
        <button className="newchat"><img className="plus-img" src={assets.plus_icon} alt="plus-icon"/><p>New chat</p></button>
        <p className="recent">Recent</p>
        </div>:null}
        
        {extend==true?<div className="recent-chat">
            <img className="message-img" src={assets.message_icon} alt="message-icon"/>
            <p>What is react...</p></div>:null}
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
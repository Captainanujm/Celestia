import React from "react";
import "./Sidebar.css"
import assets from "../assets/assets.js";
function Sidebar(){
    return(<div className="sidebar">
        <div className="uppercomponent">
        <div className="menu">
        <img className="menu-img" src={assets.menu_icon} alt="menu-icon"/>
        </div>
        <button className="newchat"><img className="plus-img" src={assets.plus_icon} alt="plus-icon"/><p>New chat</p></button>
        <p className="recent">Recent</p>
        <div className="recent-chat">
            <img className="message-img" src={assets.message_icon} alt="message-icon"/>
            <p>What is react...</p></div>
        </div>
       <div className="lowercomponent">
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
   
    </div>
        
    </div>)
}
export default Sidebar;
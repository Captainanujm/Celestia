import react from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import MainBody from "./MainBody/MainBody.jsx";
import assets from "./assets/assets.js";
import "./App.css"
function App(){
  return (<div className="app">
        <Sidebar/>
        <MainBody/>
        
  </div>)
}
export default App;
import { useState } from "react";
import react ,{createContext} from "react";
import run from "../config/celestia";
export const Context=createContext();
const ContextProvider=(props)=>{
    const[input,setInput]=useState("");
    const[showResult,setShowResult]=useState(false);
    const [getResult, setGetResult] = useState("");
    const [history,sethistory]=useState([]);
    async function onSent(prompt){
       setGetResult(await run(input));
    }

    const contextValue={
        input,
        setInput,
        onSent,
        showResult,
        setShowResult,
        getResult,
        setGetResult,
        history,
        sethistory,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;
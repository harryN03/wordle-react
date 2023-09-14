import React, { useContext } from "react";
import { AppContext } from "../App";
function Key({keyVal, disabled}) {
    const {board, setBoard, letterPos, setletterPos, onEnter, onDel, updateLetter} = useContext(AppContext)
    const updateKey =() => {
        if (keyVal ==="Enter") {
            onEnter();
        }
        else if (keyVal==="Del") {
            onDel();
        }
        else   {
            updateLetter(keyVal)
            }
    }
    return (
        <div className="key" onClick={updateKey} id ={disabled && "disabled"}>
            {keyVal}
        </div>
    )   
}

export default Key
import React, {useContext, useEffect} from 'react'
import { AppContext } from '../App'
import sadFace from "../images/sadFace.PNG"

function LosePopup() {
  const {answer, setGameOver, gameOver, setTheme} = useContext(AppContext);
  useEffect(()=> 
    setTheme("dark"))
  return (
    <div className="popup">
        <img src={sadFace} alt="Sad Face" />
        <h2>You are out of attempt</h2>
        <h3>The answer is {answer.toUpperCase()}</h3>
        <button onClick={()=> 
          {setGameOver({...gameOver, popupVisible: false})
          setTheme("light")}}>
          Close
        </button>
    </div>
  )
}

export default LosePopup
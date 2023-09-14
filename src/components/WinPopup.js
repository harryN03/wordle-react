import React, {useContext, useEffect} from 'react'
import { AppContext } from '../App'
import tick from "../images/tick.PNG"
function WinPopup() {
    const {letterPos, setGameOver, gameOver, setTheme} = useContext(AppContext);
    useEffect(() => {
    setTheme("dark")})
  return (
    <div className="popup">
        <div className="popup-inner">
          <img src={tick} alt="Smile Face" />
          <h2>Congratulation!!!!</h2>
          <h3>You win in {letterPos.row} attempt(s)</h3>
          <button onClick={()=> 
          {setGameOver({...gameOver, popupVisible: false})
          setTheme("light")}}>Close</button>
        </div>
    </div>
  )
}

export default WinPopup
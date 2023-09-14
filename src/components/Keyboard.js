import React, { useCallback, useContext, useEffect } from 'react'
import Key from './Key'
import { AppContext } from "../App";
function Keyboard() {
    const {updateLetter, onEnter, onDel, disabledLetters} = useContext(AppContext)
    const row1 = ["Q","W","E","R","T","Y","U","I","O","P"]
    const row2 = ["A","S","D","F","G","H","J","K","L"]
    const row3 = ["Z","X","C","V","B","N","M"]

    const handleKeyDown = useCallback((event) => {
          if (event.key === "Enter") {
            onEnter();
          } else if (event.key === "Backspace") {
            onDel();
          } else {
            row1.forEach((key) => {
              if (event.key.toLowerCase() === key.toLowerCase()) {
                updateLetter(key);
              }
            });
            row2.forEach((key) => {
              if (event.key.toLowerCase() === key.toLowerCase()) {
                updateLetter(key);
              }
            });
            row3.forEach((key) => {
              if (event.key.toLowerCase() === key.toLowerCase()) {
                updateLetter(key)
              }
            });
          }
        },
      );
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [handleKeyDown])
  return (
    <div>
        <div className='keyboard-row'>
            {row1.map((key) => <Key keyVal={key} disabled={disabledLetters.includes(key)} />)}
        </div>

        <div className='keyboard-row'>
            {row2.map((key) => <Key keyVal={key} disabled={disabledLetters.includes(key)}/>)}
        </div>

        <div className='keyboard-row'>
            <Key keyVal="Enter" />
            {row3.map((key) => <Key keyVal={key} disabled={disabledLetters.includes(key)}/>)}
            <Key keyVal="Del" />
        </div>
    </div>
  )
}

export default Keyboard
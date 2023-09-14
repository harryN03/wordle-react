import "./App.css";
import { BiMenu, BiQuestionMark, BiBarChartAlt2 } from "react-icons/bi";
import { DiAptana } from "react-icons/di";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard"
import { boardDefault } from "./word";
import React, { useState, createContext, useEffect } from "react";
import {WORDS} from "./word-bank"
import WinPopup from "./components/WinPopup";
import LosePopup from "./components/LosePopup";
export const AppContext = createContext();
function App() {
  const [board, setBoard] = useState(boardDefault);
  const [letterPos, setletterPos,] = useState({row:0, letter:0})
  const [answer, setAnswer] = useState("");
  const [theme, setTheme] = useState("light");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    win: false,
    popupVisible: true
  })
  useEffect(()=> {
    setAnswer(WORDS[Math.floor(Math.random()*(WORDS.length))])
  }, [])
  console.log(answer) 
  const onEnter = () => {
    if (letterPos.letter !==5) return
    let guess = "";
    for (let i=0;i<5;i++) {
        guess += board[letterPos.row][i];
    } 
    if (!WORDS.includes(guess.toLowerCase())) {
      alert("Word does not exist")
    }
    else if (guess.toLowerCase() === answer) {
      setGameOver({gameOver: true, win: true, popupVisible: true})
      setletterPos({letter: 6, row: letterPos.row + 1})
    }
    else if (letterPos.row === 5) {
      setletterPos({letter: 6, row: letterPos.row + 1})
      setGameOver({gameOver:true, win:false, popupVisible:true})
    }
    else {
      console.log("Next try")
      setletterPos({letter: 0, row: letterPos.row + 1})
    }
  }
  const onDel = () => {
    if (letterPos.letter ===0) return;
            const newBoard = [...board];
            newBoard[letterPos.row][letterPos.letter-1] ="";
            setBoard(newBoard)
            setletterPos({...letterPos, letter: letterPos.letter-1})
  }

  const updateLetter = (keyVal) => {
    if (letterPos.letter<5) {
      const newBoard = [...board];
      newBoard[letterPos.row][letterPos.letter] = keyVal;
      setBoard(newBoard)
      setletterPos({...letterPos, letter:letterPos.letter+1})
  }
  }
  const refeshPage = () => {
    window.location.reload(false);
  }
  return (
    <div className={`App ${theme}`}>
      <nav>
        <BiMenu size={25}/>
        <h1>Wordle</h1>
        <div>
          <BiQuestionMark size={25}/>
          <BiBarChartAlt2 size={25}/>
          <DiAptana size={25}/>
        </div>
      </nav>
      <AppContext.Provider value={{answer,board, setBoard, letterPos, setletterPos, onEnter, 
onDel, updateLetter, disabledLetters, setDisabledLetters, gameOver, setGameOver, setTheme}}>
        <div>
          <Board />
          <button className="playAgain" onClick={refeshPage}>Play again</button>
          <Keyboard />
          {gameOver.gameOver && gameOver.win && gameOver.popupVisible && <WinPopup />} 
          {gameOver.gameOver && !gameOver.win && gameOver.popupVisible && <LosePopup />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App
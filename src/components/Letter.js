import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
function Letter({letterCol, letterRow}) {
    const {board, answer, letterPos, setDisabledLetters} = useContext(AppContext)
    const letter = board[letterRow][letterCol]

    const correct = answer[letterCol]===letter.toLowerCase();
    const present = !correct && answer.includes(letter.toLowerCase()) && letter!=="";

    const state = letterPos.row > letterRow ? (correct ? "correct" : present ? "present" : "absent"): undefined ;
    useEffect(() => {
        if (!present && !correct) {
            setDisabledLetters((prev) => [...prev, letter])
        }
    }, [letterPos.row])
    return (<div className="letter" id={state}>
        {letter}
    </div>)
}
export default Letter
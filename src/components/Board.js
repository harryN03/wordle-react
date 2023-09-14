import React from 'react'
import Letter from './Letter'
function Board() {
  return (
    <div className='board'>
      <div className="board-row">
        <Letter letterCol={0} letterRow={0}/>
        <Letter letterCol={1} letterRow={0}/>
        <Letter letterCol={2} letterRow={0}/>
        <Letter letterCol={3} letterRow={0}/>
        <Letter letterCol={4} letterRow={0}/>
      </div>
      <div className="board-row">
        <Letter letterCol={0} letterRow={1}/>
        <Letter letterCol={1} letterRow={1}/>
        <Letter letterCol={2} letterRow={1}/>
        <Letter letterCol={3} letterRow={1}/>
        <Letter letterCol={4} letterRow={1}/>
      </div>
      <div className="board-row">
        <Letter letterCol={0} letterRow={2}/>
        <Letter letterCol={1} letterRow={2}/>
        <Letter letterCol={2} letterRow={2}/>
        <Letter letterCol={3} letterRow={2}/>
        <Letter letterCol={4} letterRow={2}/>
      </div>
      <div className="board-row">
        <Letter letterCol={0} letterRow={3}/>
        <Letter letterCol={1} letterRow={3}/>
        <Letter letterCol={2} letterRow={3}/>
        <Letter letterCol={3} letterRow={3}/>
        <Letter letterCol={4} letterRow={3}/>
      </div>
      <div className="board-row">
        <Letter letterCol={0} letterRow={4}/>
        <Letter letterCol={1} letterRow={4}/>
        <Letter letterCol={2} letterRow={4}/>
        <Letter letterCol={3} letterRow={4}/>
        <Letter letterCol={4} letterRow={4}/>
      </div>
      <div className="board-row">
        <Letter letterCol={0} letterRow={5}/>
        <Letter letterCol={1} letterRow={5}/>
        <Letter letterCol={2} letterRow={5}/>
        <Letter letterCol={3} letterRow={5}/>
        <Letter letterCol={4} letterRow={5}/>
      </div>
    </div>
  )
}

export default Board
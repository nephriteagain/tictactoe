import React from 'react'
import { useEffect } from 'react'


function Modal({winnerDeclare, isGameOver, isPlayerOneTurn, resetGame}) {

  return (
    <div className='modal-overlay'>
    <div className='modal-container'>
        <h2>{winnerDeclare(isGameOver, isPlayerOneTurn)}</h2>
        <button className='btn' onClick={resetGame}>Restart game</button>
    </div>

    </div>
  )
}

export default Modal
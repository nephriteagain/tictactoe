import React from 'react'
import { useEffect } from 'react'


function Modal({winnerDeclare, isGameOver, isPlayerOneTurn, resetGame}) {

  return (
    <div className='modal-overlay'>
    <div className='modal-container'>
      <div className='modal-items'>

        <h2>{winnerDeclare(isGameOver, isPlayerOneTurn)}</h2>
        <button className='btn' onClick={resetGame}>Restart game</button>
      </div>
    </div>

    </div>
  )
}

export default Modal
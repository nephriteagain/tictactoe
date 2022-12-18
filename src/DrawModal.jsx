import React from 'react'

function DrawModal({resetGame}) {
  return (   
    <div className='modal-overlay'>
    <div className='modal-container'>
        <div className='draw-container'>
        <h2 className='draw'>Draw!!!</h2>
        <button className='btn' onClick={resetGame}>Restart game</button>
        </div>
    </div>
    </div>
    )
}

export default DrawModal
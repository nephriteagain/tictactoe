import React from 'react'

function DrawModal({resetGame}) {
  return (   
    <div className='modal-overlay'>
    <div className='modal-container'>
        <h2>Draw!!!</h2>
        <button className='btn' onClick={resetGame}>Restart game</button>
    </div>

    </div>
    )
}

export default DrawModal
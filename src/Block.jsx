import React from 'react'


const Block = ({num, isActive, captureBlock, isPlayerOneTurn, icon}) => {





  return (
    <div 
      className='single-block'
      onClick={ () => {
        captureBlock(num, isPlayerOneTurn, isActive)
      } }  
    >
      {icon}
      {num}
    </div>
  )
}

export default Block
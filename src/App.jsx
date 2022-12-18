import { useState, useEffect } from 'react'
import './App.css'
import Block from './Block'
import {ImCross} from 'react-icons/im'
import { MdOutlineCircle } from "react-icons/md";
import Modal from './Modal';
import DrawModal from './DrawModal';


function App() {
  const blockArr = ['1','2','3','4','5','6','7','8','9']

  

  
  const arrBlockState = blockArr.map((block)=> {
    return {'num': block, 'isActive': true, 'key': block , icon: ''}
  })
  
  
  const [ isPlayerOneTurn, setIsPlayerOneTurn ]   = useState(true)
  const [ onePBlocks, setOnePBlocks ] = useState([])
  const [ twoPBlocks, setTwoPBlocks ] = useState([])
  const [ blockState, setBlockState ] = useState(arrBlockState)
  const [ isGameOver, setIsGameOver ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const [ count, setCount ] = useState(0)
  const [ showDrawModal, setShowDrawModal] = useState(false)

  
  const captureBlock = (block, player, active) => {
    if ( active ) {
      if ( player ) {
        let temp = block
        let tempoArr = [... onePBlocks, temp].sort()
        setOnePBlocks(tempoArr)
        const tempBlockState = blockState.map((el)=> {
          if (block === el.num) {
            return {...el, isActive: false, icon: <ImCross />}
          }
          return el
        })
        setBlockState([...tempBlockState])

      }
      if ( !player ) {
        let temp = block
        let tempoArr = [... twoPBlocks, temp].sort()
        setTwoPBlocks(tempoArr)
        const tempBlockState = blockState.map((el)=> {
          if (block === el.num) {
            return {...el, isActive: false, icon: <MdOutlineCircle /> }
          }
          return el
        })
        setBlockState([...tempBlockState])

      }
    setIsPlayerOneTurn(!isPlayerOneTurn)

    }
  }



  const testArr = [
  ['1','2','3'],
  ['4','5','6'],
  ['7','8','9'],
  ['1','4','7'],
  ['2','5','8'],
  ['3','6','9'],
  ['1','5','9'],
  ['3','5','7']
]


  const WinCheckerPlayerOne = () => {
    let str = [...onePBlocks]
    let check = testArr.some((arr)=> {
    return arr.every((el) => {
        return str.some((item) => {
            return el === item
        })
    })
})
  if (check) {
    setIsGameOver(true)
  }

  }

    const WinCheckerPlayerTwo = () => {
    let str = [...twoPBlocks]
    let check = testArr.some((arr)=> {
    return arr.every((el) => {
        return str.some((item) => {
            return el === item
        })
    })
})

  if (check) {
    setIsGameOver(true)
  }


  }
  
  const winnerDeclare = (gameState, player) => {
    if (gameState) {
      return `player ${!player? '1': '2'} wins!`
    }
  }
  
  const modalChecker = () => {
    if (isGameOver) {
      setShowModal(true)
    }
  }

  const drawChecker = () => {
    setCount(count + 1)
    if (!isGameOver) {
      if (count === 9) {
        setShowDrawModal(true)
      }
    }
  }
  


  const resetGame = () => {
    setBlockState(arrBlockState)
    setIsPlayerOneTurn(true)
    setOnePBlocks([])
    setTwoPBlocks([])
    setIsGameOver(false)
    setShowModal(false)
    setShowDrawModal(false)
    setCount(0)
  }

  useEffect(() => {
    drawChecker()
  }, [blockState])

  useEffect(() => {
    modalChecker()
  }, [isGameOver])


  useEffect(() => {
    WinCheckerPlayerOne()
  }, [onePBlocks])

  useEffect(() => {
    WinCheckerPlayerTwo()
  }, [twoPBlocks])


  return (
    <div className='container'>
      <h1 className='title'>TIC TAC TOE</h1>
      {showDrawModal && <DrawModal resetGame={resetGame}/>}
      {showModal && <Modal 
                      isGameOver={isGameOver} 
                      winnerDeclare={winnerDeclare}
                      isPlayerOneTurn={isPlayerOneTurn} 
                      resetGame={resetGame}
      />}
      <div className='game-container'>
        {blockState.map((block, index)=> {
          return <Block 
            key={index} 
            {...block} 
            captureBlock={captureBlock} 
            isPlayerOneTurn={isPlayerOneTurn} />
        })}
      </div>
    </div>
  )
}

export default App

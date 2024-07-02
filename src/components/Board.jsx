/* eslint-disable react/prop-types */

import '../App.css'
import { useCallback, useEffect, useState } from 'react'
import { Result, Winning, Block} from './'
import data from '../assets/data'

export default function Board({handleWrongTries, isTimerFinished, correctAudio, wrongAudio}) {

    const [blocksData, setBlocksData] = useState(data)
    const [currentFlippedBlocks, setCurrentFlippedBlocks] = useState([])

    const blocks = blocksData.map(block => {
        return (
            <Block
                key = {block.id}
                clicked = {block.isClicked}
                handleClick = {handleClick}
                icon = {block.icon}
                id = {block.id}
                isDone = {block.isDone}
                wrongMatch = {block.wrongMatch}
                disabled = {isTimerFinished || block.isDone}
            />
        )
    })

    function handleClick (_, id) {
        const currentBlock = blocksData.find(b => b.id === id)
        if(!currentBlock.isDone && currentFlippedBlocks.length < 2 && !isTimerFinished) {
            
            setBlocksData(prevBlocksData => {
                return prevBlocksData.map(block => (
                    currentBlock === block ? {...block, isClicked: !block.isClicked} : block
                ))
            })
            setCurrentFlippedBlocks(
                prevCurrentFlippedBlocks => currentBlock.isClicked ? [] : [...prevCurrentFlippedBlocks, currentBlock]
            )
        }
    }

    useEffect(() => {
        setBlocksData(prevBlocks => prevBlocks.map(
            b => ({...b, isClicked: true})
        ))
        const flipBackTimeout = setTimeout(() => {
            setBlocksData(prevBlocks => prevBlocks.map(
                b => ({...b, isClicked: false})
            ))
        return () => clearTimeout(flipBackTimeout)
        }, 3000)

    }, [])


    const handleWrongMatches = useCallback(() => {
        wrongAudio.play()
        setBlocksData(prevBlocksData => {
            return prevBlocksData.map(b => (
                (b.id === currentFlippedBlocks[0].id || b.id === currentFlippedBlocks[1].id) ? 
                {...b, wrongMatch: true} 
                : b
            ))
        })
        setTimeout(() => {
            setBlocksData(prevBlocksData => {
                return prevBlocksData.map(b => (
                    (b.id === currentFlippedBlocks[0].id || b.id === currentFlippedBlocks[1].id) ? 
                    {...b, isClicked: false, wrongMatch: false} 
                    : b
                ))
            })
            setCurrentFlippedBlocks([])
        }, 1000)
    }, [currentFlippedBlocks, wrongAudio])

    const handleRightMatches = useCallback(() => {
        correctAudio.play()
        setBlocksData(prevBlocksData => {
            return prevBlocksData.map(b => (
                currentFlippedBlocks[0].icon === b.icon ||
                currentFlippedBlocks[1].icon=== b.icon ? {...b, isClicked: true, isDone: true} : b
            ))
        })
        setCurrentFlippedBlocks([])
    }, [correctAudio, currentFlippedBlocks])

    
    const matchCurrentFlippedBlocks = useCallback(() =>  {
        return currentFlippedBlocks[0].icon === currentFlippedBlocks[1].icon
    }, [currentFlippedBlocks])

    useEffect(() => {
        if(currentFlippedBlocks.length === 2) {
            if(matchCurrentFlippedBlocks()) {
                setTimeout(handleRightMatches, 200)
            } else {
                setTimeout(() => handleWrongMatches(), 100)
                handleWrongTries()
            }
        }
    }, [currentFlippedBlocks.length, handleRightMatches, handleWrongMatches, handleWrongTries, matchCurrentFlippedBlocks])

    function isWinner() {
        return !blocksData.filter(b => !b.isDone).length
    }


    function isGameFinished() {
        const allDone = (blocksData.filter(b => b.isDone).length === 20)
        return allDone || isTimerFinished
    }

    return (
        <div className="board">
            {isWinner() && <Winning />}
            {isGameFinished() &&
                <Result 
                    result = {isWinner()}
                /> 
            }
            {blocks}
        </div>
    )
}
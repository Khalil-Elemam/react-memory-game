/* eslint-disable react/prop-types */


import useTimer from "../hooks/useTimer"
import { Header, Board } from './'
import { useCallback, useState } from "react"

export default function MemoryGame({username, correctAudio, wrongAudio}) {

    const [wrongTries, setWrongTries] = useState(0)
    const {timer, isTimerFinished} = useTimer("05:00")

    const handleWrongTries = useCallback(() => {
        setWrongTries(prevWrongTries => prevWrongTries + 1)
    }, [])

    return (
        <div className="container">
            <h1 className="title">Memory Game</h1>
            <Header 
                username = {username}
                wrongTries = {wrongTries}
                timer = {timer}
            />
            <Board
                handleWrongTries = {handleWrongTries}
                isTimerFinished = {isTimerFinished()}
                correctAudio={correctAudio}
                wrongAudio={wrongAudio}
            />
        </div>
    )
}
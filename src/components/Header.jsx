/* eslint-disable react/prop-types */

import '../App.css'

export default function Header({username, timer, wrongTries}) {
    return (
        <header className='game-info'>
            <h3 className='player-name'>Name is: {username} </h3>
            <p className="timer">Time Remaining: {timer} min</p>
            <p className='wrong-tries'>Wrong Tries: {wrongTries} </p>
        </header>
    )
}
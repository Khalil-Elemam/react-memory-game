/* eslint-disable react/prop-types */


import '../App.css'

export default function Block({clicked, isDone, wrongMatch, handleClick, id, icon, disabled}) {

    return (
        <button 
            className={`box ${clicked? 'clicked' : ''} ${isDone? 'done': ''} ${wrongMatch? 'wrong' : ''}`} 
            onClick={(event) => handleClick(event, id)}
            disabled = {disabled}
        >
            <div className='block'>
                <div className="front">
                    <i className="fa-duotone fa-question"></i>
                </div>
                <div className="back">
                    <i className={icon}></i>
                </div>
            </div>
        </button>
    )
}
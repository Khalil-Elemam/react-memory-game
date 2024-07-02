/* eslint-disable react/prop-types */


import '../App.css' 

export default function Result({result}) {

    const {res, resColor} = result ? {res: "You Win", resColor: "rgb(21, 203, 21)"} : {res: "You Lose", resColor: "red"}

    return (
        <div className="result">
            <div className="card">
                <h3 style={{color: resColor}}>{res}</h3>
                <button onClick={() => window.location.reload()}>Play again</button>
            </div>
        </div>
    )
}
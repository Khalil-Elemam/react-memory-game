/* eslint-disable react/prop-types */


import { useEffect, useState } from "react";
import Confetti from "react-confetti";


export default function Winning({duration = 4000}) {

    const [recycle, setRecycle] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRecycle(false)
        }, duration)
        return () => clearTimeout(timer)
    }, [duration])

    return (
        <Confetti className="confetti" recycle = {recycle}/>
    )
}
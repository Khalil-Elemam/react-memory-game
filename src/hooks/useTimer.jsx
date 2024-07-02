import { useState, useEffect } from "react"

export default function useTimer(initialTimer = "00:00") {

    const[timer, setTimer] = useState(initialTimer)

    useEffect(() => {

        const updateTimer = () => {
            setTimer(prevTimer => {
                const [min, sec] = timer.split(":").map(Number)
                if (!min && !sec) return "00:00"
                const newSec = sec === 0 ? 59 : sec - 1
                const newMin = sec === 0 ? min - 1 : min
                
                return `${newMin < 10 ? "0" : ""}${newMin}:${newSec < 10 ? "0" : ""}${newSec}`
            })
        }


        if(timer === "00:00")
            return
        const interval = setInterval(updateTimer, 1000)
        return () => clearInterval(interval)
    }, [timer])

    function isTimerFinished() {
        return timer === '00:00'
    }

    return {timer, isTimerFinished}
}
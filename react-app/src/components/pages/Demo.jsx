import { useState } from "react"

export default function Default() {

    {/* Hooks - useState, useEffect */ }
    const [counter, setCounter] = useState(0)

    return (
        <>

            <h1>Demo page!</h1>

            <h1>Counter Value: {counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>
                Click to ADD
            </button>

            <button onClick={() => {
                setCounter(counter - 1)
            }}>
                Click to SUB
            </button>


        </>
    )
}
import { useState } from 'react'

export const UseState = () => {

    const [ count, setCount] = useState(0)



    const incrementeCount = () => {
        setCount (prevState => prevState + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementeCount}>Increment</button>


        </div>
    )
}
import { useEffect, useState } from "react"

export const UseEffect: React.FC = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = String(counter)

        //return () => document.title = 'React App';


    }, [counter])

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
        </>
    )
}


import { useEffect, useRef, useState } from "react"

export const UseRef = () => {
    const [name, setName] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    const focusInput = () => {
        inputRef.current?.focus()
    }

    return (
        <div>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello! My name is {name}</p>
            <button onClick={focusInput}>Focus Input</button>
        </div>

    )
}
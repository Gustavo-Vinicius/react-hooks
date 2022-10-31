import React, {
    useState,
    useEffect,
    useMemo, 
    useCallback,
    useRef,
    useContext,
    useImperativeHandle,
    useReducer
} from 'react'

interface IUser {
    name : string;
    login : string;
    avatar_url : string;

}

export const UseState: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const [users, setUsers] = useState<[IUser]>()

    const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users])

    const greeting = useCallback((user: IUser) => alert(`Hello ${user.name}`),[])

    function focusOnInput(){
        inputRef.current!.focus()
    }

    return (
       <form action=''>
        <input type='text' ref={inputRef}/>
       </form>
    )
}
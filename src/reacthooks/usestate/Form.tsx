import { forwardRef } from "react"

interface IFormProps {
    initialData : string
}

export const Form: React.FC<IFormProps> = (props, ref) => {
    function submit() {
        alert('Submit')
    }

    return (
        <form action=''>
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
        </form>
    )
}
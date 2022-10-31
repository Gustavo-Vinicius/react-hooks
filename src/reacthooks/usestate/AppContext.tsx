import { useContext, useReducer } from 'react'
import { CartContext } from './CartContext'

interface IProduct{
    id: number;
    name: string;
    price: number;
}

interface ICart {
    product?: string[],
    shipping_value?: number
}

type CartActionType = {
    type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppContext: React.FC = () => {

    const cart = useReducer(
        (state: ICart, action: CartActionType) => {
            switch (action.type) {
                case 'ADD_PRODUCT':
                    return{
                        // ...state,
                        // product: [...state.product, 'Produto novo'] 
                    }
                    case 'REMOVE_PRODUCT': 
                  
                default:
                    return {};
            }
        },
        {
            products: [],
            shipping_value: 0
        },
    )

    return (
        <ul>

        </ul>
    )
} 
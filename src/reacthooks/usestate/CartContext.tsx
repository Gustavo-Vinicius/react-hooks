import { createContext } from "react";

interface IProduct{
    id: number;
    name: string;
    price: number;
}

interface ICart {
    product?: IProduct[],
    shipping_value?: number
}

export const CartContext = createContext<ICart>({
    product: []
})


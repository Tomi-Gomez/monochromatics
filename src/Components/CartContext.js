import { createContext} from 'react'
import { useState} from 'react'
import Item from './Item';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [CarList,setCarlist] = useState([]) 

    const addToCart = (dato) => {
        setCarlist([
            ...CarList,    
            dato
        ])
    }

    return(
        <>
        <CartContext.Provider value={{CarList , addToCart}}>
        {children}
        </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;
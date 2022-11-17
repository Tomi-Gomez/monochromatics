import { createContext} from 'react'
import { useState} from 'react'
import Cart from './Cart';
import Item from './Item';


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [CartList,setCarlist] = useState([]) 

    const addToCart = (dato,stock) => {
        let add = CartList.find(producto => producto.idDato===dato.id)
        if(add === undefined){
        setCarlist([
            ...CartList,    
            {
                idDato: dato.id,
                ImgDato: dato.Img,
                titleDato: dato.title,
                priceDato: dato.price,
                stockDato: stock
            }
        ])
        } else{
            add.stockDato += stock;
        }
    }

    //Borra toda la lista
    const clear = () => {
        setCarlist([])
    }

    // Remueve un item
    const removeItem = (id) => {
        let result = CartList.filter(dato => dato.id !== id);
        setCarlist(result);
    }

    return(
        <>
        <CartContext.Provider value={{CartList , addToCart ,clear,removeItem}}>
        {children}
        </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;
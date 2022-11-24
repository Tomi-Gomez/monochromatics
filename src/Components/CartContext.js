import { createContext} from 'react'
import { useState} from 'react'



export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [CartList,setCarlist] = useState([]) 

    const addToCart = (dato,stock) => {
        let add = CartList.find(producto => producto.idDato===dato.id)
        if(add === undefined){
        setCarlist([
            ...CartList,    
            {
                id: dato.id,
                Img: dato.Img,
                title: dato.title,
                price: dato.price,
                stock: stock
            }
        ])
        } else{
            const cartAux = CartList.map( p =>{
                if(p.id === dato.id){
                const newProd = {...dato,stock:p.stock + stock}
                return newProd
                }
                return p
                },
            )
            setCarlist(cartAux)
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
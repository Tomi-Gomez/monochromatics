import Item from "./Item"
import ItemCount from "./ItemCount" 

const ItemListContainer = (props) => {
    return(
        <>
        <div>
        <h1><b><i>{props.greeting}</i></b></h1>
            <Item/> 
        </div>
        <ItemCount />
        </>
    )
}

export default ItemListContainer
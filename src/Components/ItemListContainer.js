import Item from "./ItemList"
import ItemCount from "./ItemCount" 
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    return(
        <>
        <div>
        <h1><b><i>{props.greeting}</i></b></h1>
        </div>
        <ItemList/>
        <ItemCount />
        </>
    )
}

export default ItemListContainer
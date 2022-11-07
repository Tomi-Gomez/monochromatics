import ItemCount from "./ItemCount" 
import {useEffect, useState} from 'react'
import {data} from '../utils/data'
import {customFetch} from '../utils/customFetch'
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    const [datos,setDatos] = useState([])

    //componentDidMount
    useEffect(() => {
        customFetch(2000,data)
        .then(response => setDatos(response))
        .catch(err => console.log(err))
    },[])
    
    return(
    <>
    <div>
    <h1><b><i>{props.greeting}</i></b></h1>
    </div>

    { 
      datos.map(item => (
        <ItemList
        // thumbnails={buzo_beige_frente}
        title={item.title}
        genero={item.genero}
        material={item.material}
        talles={item.talles}
        Img={Item.Img}
        />
      ))
    }

    <ItemCount />
    </>
    )
}

export default ItemListContainer
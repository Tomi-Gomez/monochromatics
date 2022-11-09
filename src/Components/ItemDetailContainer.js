import {useEffect, useState} from 'react'
import {data} from '../utils/data'
import {customFetch} from '../utils/customFetch'
import ItemDetail from './ItemDetail'
import "./Styles/ItemDetailContainer.css"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = (props) => {
    const [dato,setDato] = useState({})
    const {IdItem} = useParams()

    //componentDidMount
    useEffect(() => {
        customFetch(2000,data.find(Item => Item.id == IdItem))
        .then(response => setDato(response))
        .catch(err => console.log(err))
    },[])
    
    return(
    <>
    <div>
    <h1 className='title_Container'><b><i>{props.greeting}</i></b></h1>
    </div>
    <ItemDetail dato={dato}/>
    </>
    )
}

export default ItemDetailContainer
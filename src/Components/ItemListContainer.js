import {useEffect, useState} from 'react'
import ItemList from "./ItemList"
import "./Styles/ItemListContainer.css"
import { useParams } from 'react-router-dom'
import Body from "./Body"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"

const ItemListContainer = (props) => {
    const [datos,setDatos] = useState([])
    const {IdCategory} = useParams()

    //componentDidUpodate
    useEffect( () => {
        const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFirestore = querySnapshot.docs.map(dato => ({
            id:dato.id,
            ...dato.data()
                      
        }))
        setDatos(dataFromFirestore)
        }
        getData() 
    },[IdCategory]);
    
    return(
    <>
    <Body/>
    <div className='title_Container'>
    <h1><b><i>{props.greeting}</i></b></h1>
    </div>
    <ItemList datos={datos}/>
    </>
    )
}

export default ItemListContainer
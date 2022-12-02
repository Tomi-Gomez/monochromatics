import {useEffect, useState} from 'react'
import ItemList from "./ItemList"
import "./Styles/ItemListContainer.css"
import { useParams } from 'react-router-dom'
import Body from "./Body"
import { db } from "../utils/firebaseConfig"
import { query,  where, collection, getDocs } from '@firebase/firestore';

const ItemListContainer = (props) => {
    const [datos,setDatos] = useState([])
    const {IdCategory} = useParams()

   //componentDidUpdate
   useEffect(() => {
    // creamos una función que va a obtener los datos de firebase
    const getData = async () => {
    // con una condicional, si no tiene categorías,
    const queryRef = !IdCategory
    // va a traer todos los productos
    ? collection(db, "productos")
    // si tiene categorías, firevase va a filtrarlas
    : query(
    collection(db, "productos"),
    where("category", "==", parseInt(IdCategory))
    );
    // recibimos los datos
    const response = await getDocs(queryRef);
    // y hacemos un map para crear objetos con esos datos.
    const productos = response.docs.map((docs) => {
    const newProduct = {
    ...docs.data(),
    id: docs.id,
    };
    // lo retornamos
    return newProduct;
    });
    setTimeout(() => {
    // simulamos una demora de 2' y actualizamos el estado datos con los productos
    // ya sea con los que filtramos o con todos.
    setDatos(productos);
    }, 2000)
    };
    // llamamos a la función
    getData();
    
    }, [IdCategory])


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
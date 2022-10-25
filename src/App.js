import './App.css'
import Body from './Components/Body'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'



const App = () => {
  return(
    <>
    <NavBar ItemList="Hombre" ItemList2= "Mujer" ItemList3= "Contacto"/> 
    <Body/>
    <ItemListContainer greeting="Bienvenidos"/>
    </>
  )
}

export default App;
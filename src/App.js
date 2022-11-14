import './App.css'
import Body from './Components/Body'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Cart from './Components/Cart'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar ItemList="Hombre" ItemList2= "Mujer" ItemList3= "Verano"/>
    {/* <Body/> */}
    <Routes>
      <Route path='/'element={<ItemListContainer greeting="Productos"/>}/>
      <Route path='/category/:IdCategory' element={<ItemListContainer greeting="Productos"/>}/>
      <Route path='/item/:IdItem' element={<ItemDetailContainer greeting="Producto"/>}/>
      <Route pat='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
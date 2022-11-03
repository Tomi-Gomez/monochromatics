import ItemList from "../Components/ItemList"
import imagenBuzoGrey from '../Pic/buzo_grey_frente-min.jpg'
import imagenBuzoBeige from '../Pic/buzo_beige_frente2-min.jpg'
import imagenBuzoBlack from '../Pic/buzo_black_frente1-min.jpg'
import imagenSweater from '../Pic/sweater_brown_frente1-min.jpg'


const Item = () => {
    return(
        <>
        <ItemList
        // thumbnails={buzo_beige_frente}
        title='Buzo Canguro Beige '
        genero='Genero : Hombre'
        material='Material: Poliéster'
        talles='Talles: Xl - L - M - S'
        Img={imagenBuzoBeige}
        />
         <ItemList 
        title='Buzo Canguro Black'
        genero='Genero : Hombre'
        material='Material: Poliéster'
        talles='Talles: Xl - L - M - S'
        Img={imagenBuzoBlack}
        />
        <ItemList 
        title='Buzo Canguro Grey'
        genero='Genero : Mujer'
        material='Material: Poliéster'
        talles='Talles: Xl - L - M - S'
        Img={imagenBuzoGrey}
        />
        <ItemList 
        title='Sweater brown frente'
        genero='Genero : Mujer'
        material='Material: Poliéster'
        talles='Talles: Xl - L - M - S'
        Img={imagenSweater}
        />
        </>
    )
}

export default Item
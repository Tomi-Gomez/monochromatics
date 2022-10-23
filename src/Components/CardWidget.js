import Pic from '../Pic/carrito.png'

const CardWidget = () => {
    return (
        <button type="button" class="btn btn-primary position-relative">
            <img className="img_carrito" src={Pic}></img>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              5+
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
    )
}

export default CardWidget
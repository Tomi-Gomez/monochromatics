import CardWidget from './CardWidget'

const NavBar = (props) => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b><i>MONOCHROMATICS</i></b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div classNname="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#">{props.ItemList}</a>
              <a className="nav-link" href="#">{props.ItemList2}</a>
            </div>
            <a className = "cta" href=""><button>Contacto</button></a>
            <CardWidget/>
            </div>
           
        </div>
      </nav>
      </>
    )
}

export default NavBar
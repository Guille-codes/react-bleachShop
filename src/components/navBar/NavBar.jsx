import "./NavBar.css"
import { CartWidget } from "../cartWidget/CartWidget"

const NavBar = ()=>{

    return(
        
        <div className="navbar-container">
            <div className="container-logo">
                <a href=""><img src="https://res.cloudinary.com/dohmmfmx4/image/upload/v1669458662/Nuevo/Sin_t%C3%ADtulo-1_ikxqo2.png" alt="" /></a>
            </div>
            <ul className="navbar">
                <li><a href="">Inicio</a></li>
                <li><a href="">Ropa</a></li>
                <li><a href="">Mangas</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;

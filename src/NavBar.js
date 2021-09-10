import CartWidget from "./componentes/CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
    return(
        <header id="main-header">
            <Link to="/">
             <h1>Bienvenidos</h1>
            </Link>
             <nav>
                 <Link to="/categoria/1">categoria 1</Link>
                 <Link to="/categoria/2">categoria 2</Link>
             </nav>
             <CartWidget/>
         </header>
    )
}
export default NavBar;
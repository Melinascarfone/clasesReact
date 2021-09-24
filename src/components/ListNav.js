import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const ListNav = () => {
   return(
      <div className="row list-nav">
         <ul className="row list-items">
            <li><NavLink to="/category/productos">Productos</NavLink></li>
            <li><NavLink to="/category/servicios">Servicios</NavLink></li>
         </ul>
         <CartWidget/>
      </div>
   )
}
export default ListNav
import { Link } from "react-router-dom"
const Item = ({data}) => {
   return(
      <li key={data.id} className="list-item_container">
            <img src="{data.imagen}" className="img-detail" alt="..."/>
            <h2 class="card-title">{data.nombre}</h2>
            <span>${data.precio}</span>
         <Link to={'/item/' + data.id} className="btn-vermas" >Ver mas</Link>
      </li>
   )
}
export default Item;
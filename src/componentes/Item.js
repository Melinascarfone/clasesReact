import { Link } from "react-router-dom";

const Item = ({productos}) => {

    return ( 
        <div>
            <h1>{productos.titulo}</h1>
            <p>{productos.descripcion}</p>
            <p>{productos.precio}</p>
            <Link to="/Item/productos.id">Ver mas</Link>
        </div>
    )
}

export default Item;

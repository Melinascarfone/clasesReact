const Item = ({data}) => {

    return ( 
        <li key = {data.id}>
            <h2>{data.nombre}</h2>
            <h3>{data.precio}</h3>
        </li>
     );
}

export default Item;
import ItemCount from "./ItemCount"

const ItemDetail = ({data}) => {
   return(
      <li key={data.id}>
         <h2>{data.nombre}</h2>
         <h3>$ {data.precio}</h3>
         <p>{data.descripcion}</p>
         <ItemCount initial={1} stock={5} onAdd={(cantidad) => {console.log(cantidad + " x " + data.nombre)}} /> 
      </li>
   )
}
export default ItemDetail; 
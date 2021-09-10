
const ItemDetail = ({productos}) => {
   return(
      <>
       <h1>{productos.titulo}</h1>
      </>
      // <li key={producto.id}>
      //    <h2>{producto.nombre}</h2>
      //    <h3>$ {producto.precio}</h3>
      //    <p>{producto.descripcion}</p>
      //    <ItemCount initial={1} stock={5} onAdd={(cantidad) => {console.log(cantidad + " x " + producto.nombre)}} /> 
      // </li>
   );
}
export default ItemDetail; 
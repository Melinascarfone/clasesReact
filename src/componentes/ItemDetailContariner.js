import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

   const [producto,setProducto]= useState();
   // const URL_API_SHOP = "https://mocki.io/v1/19bfe5d0-5f44-49cd-90d5-b70a0567295a";

   // const getProductos = () => {
   //    fetch(URL_API_SHOP)
   //    .then(response => response.json())
   //    .then(response => {
   //       setProductos(response)
   //    })
   // }
   
   useEffect(() => {
      setTimeout(() => {
         setProducto({titulo:"Producto 1"})
      }, 2000);
   }, [])

   return(
      <ItemDetail producto={producto}/>
   )
   //    getProductos()
   // },[])
   // return(
   //    productos === 0 ? <div> cargando productos</div> : productos.map(item => {
   //       return(
   //       <div>
   //          <p>{item.nombre}</p>
   //          <img width='200px' src={item.imagen} alt='' />
   //          <ItemDetail/>
   //       </div> 
   //       )
   //    })
   // )
}
export default ItemDetailContainer
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

   const [products,setProducts]= useState([]);
   const URL_API_SHOP = "https://mocki.io/v1/2974d4fc-c558-42fe-8c70-43681d7dc91c";

   useEffect(()=> {
      fetch(URL_API_SHOP)
      .then((respuesta)=>{
         const valor_parseado = respuesta.json();
         return valor_parseado;
      })
      .then((data)=>{
         const data_filtrada = data.find(elemento => elemento.id === 3)
         setProducts(data_filtrada)
      })
   }, []);
   return(
      <>
         <div className="item-container">
            <ItemDetail data={products}></ItemDetail>
         </div>
      </>
   )
}
export default ItemDetailContainer
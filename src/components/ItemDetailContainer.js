import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

   const [products,setProducts]= useState({});
   const URL_API_SHOP = " https://mocki.io/v1/7c267a14-0d1c-4016-9852-9f8e4a91ca43";
   const {id} = useParams();
   useEffect(()=> {
      fetch(URL_API_SHOP)
      .then(response => response.json())
      .then(response => {
         const data_find = response.filter((p) => p.id === parseInt(id))
         setProducts(...data_find)
      })
      
   }, [id]);
   return(
      <>
         <div className="item-container row">
            <ItemDetail data={products}/>
         </div>
      </>
   )
}
export default ItemDetailContainer
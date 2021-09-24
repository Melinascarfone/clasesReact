import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { firestore } from "../firebase";

const ItemListContainer = () => {

   const [products,setProducts]= useState([]);
   const URL_API_SHOP = " https://mocki.io/v1/7c267a14-0d1c-4016-9852-9f8e4a91ca43";
   const {catid} = useParams()
   
   useEffect(()=> {
      if(catid == null){
         fetch(URL_API_SHOP)
         .then(response => response.json())
         .then(response => {setProducts(response)})
      }else{
         fetch(URL_API_SHOP)
         .then(response => response.json())
         .then(response => {
            const data_find = response.filter(prod => prod.categoria === catid)
            setProducts(data_find)
         })
      }
   }, [catid]);

   return(
      <>
         <div className="item-container ">
            <ItemList data={products}/>
         </div>
      </>
   )
}
export default ItemListContainer
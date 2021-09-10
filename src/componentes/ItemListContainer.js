import ItemList from './ItemList'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [productos,setProductos]= useState([]);
    const {id} = useParams()

    useEffect(() =>{

       setTimeout(() => {
          setProductos([{titulo:"Producto 1"},{titulo:"Poducto 2"}])
       }, 2000);
    }, [])

    return(
       <ItemList productos={productos}/>
    );
//     const URL_API_SHOP = "https://mocki.io/v1/b781c633-6251-45cc-95ca-b3a68ef46659";
//     useEffect(()=> {
//         fetch(URL_API_SHOP)
//       .then((respuesta)=>{
//          const valor_parseado = respuesta.json();
//          return valor_parseado;
//       })
//       .then((productos)=>{
//         const productos_filtrados = productos.filter(elementos => elementos.destacado)
//         setProductos(productos_filtrados)
//      })
//   }, []);
//   return(
//      <>
//         <div>
//            <ItemList productos={productos}/>
//         </div>
//      </>
//   )
}
export default ItemListContainer
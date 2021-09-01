// import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'
import { useEffect } from "react"
import {useState} from "react"

// const Products = () => {

//     return new Promise ((resolve, reject) => {

//     setTimeout(() =>

//         resolve([
//             {id: 1, destacado: true, nombre:'Resaltador Filgo', categoria: 'Rosa pastel', precio: 90, stock: 3},
//             {id: 2, destacado: false, nombre:'Resaltador Filgo', categoria: 'Amarillo fluo', precio: 80, stock: 4},
//             {id: 3, destacado: true, nombre:'Cuaderno A4', categoria: 'Rayado', precio: 180, stock: 2},
//             {id: 4, destacado: false, nombre:'Lapicera Bic', categoria: 'Azul', precio: 50, stock: 4},
//             ]),
//             2000
//         )
//     })
// }

// const ItemListContainer = ({text}) => {

//     const [dataToShow, setDataToShow] = useState([]);

//     useEffect(() => {
//         Products().then((data) => {
//             let aux = data.filter(producto => producto.destacado)
//             setDataToShow(aux)
//         })
//     }, [])   

//     return dataToShow.length === 0 ? (
//         <>
//                     <h2>Cargando...</h2>
//         </> 
//         ) : (
//         <>
//                 <div>    
//                     <h3>{text}</h3>
//                 </div>
//                 <div>    
//                     <ItemList products={dataToShow} />
//                 </div>  
//         </>
//         );
// }
// export default ItemListContainer; 


const ItemListContainer = () => {

    const [products,setProducts]= useState([]);
    const URL_API_SHOP = "https://mocki.io/v1/b781c633-6251-45cc-95ca-b3a68ef46659";
    useEffect(()=> {
        fetch(URL_API_SHOP)
      .then((respuesta)=>{
         const valor_parseado = respuesta.json();
         return valor_parseado;
      })
      .then((data)=>{
        const data_filtrada = data.filter(elementos => elementos.destacado)
        setProducts(data_filtrada)
     })
  }, []);
  return(
     <>
        <div>
           <ItemList data={products}></ItemList>
        </div>
     </>
  )
}
export default ItemListContainer
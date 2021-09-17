import {useState} from "react"
import { Link} from "react-router-dom"

const ItemCount = ({initial,stock,onAdd,buttonAdd}) => {

    let [contador, setContador] = useState(initial);
   const sumar = () => {
      if(contador < stock){
         setContador(contador + 1)
      }
   }
   const restar = () => {
      if(contador > 1){
         setContador(contador - 1)
      }
   }
   const agregar = () => {
      if(stock > 0){
         onAdd(contador)
      }
   }
   return(
    <div>
       <div>
          <button onClick={sumar}>+</button>
          <p>{contador}</p>
          <button onClick={restar}>-</button>
       </div>
       {
            buttonAdd === 'add' ?
               <button disabled={stock > 0 ? false : true} onClick={agregar}>Agregar Carrito</button>
            :
               <><Link to={'/cart'} ><button >Ir a Carrito</button></Link>
               <Link to={'/'} ><button >Seguir comprando</button></Link></>
         }
      </div>
   )
}
export default ItemCount;
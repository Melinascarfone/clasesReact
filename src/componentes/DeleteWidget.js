import { context } from "../contexto/CartContext"
import {  useContext } from "react"

const DeleteWidget = ({data}) => {
   
   const {removeItem} = useContext(context)
   const remove = () => {
      removeItem(data.id)
   }
   

   return(
      <span className="material-icons" onClick={remove}>delete</span>
   )
}
export default DeleteWidget
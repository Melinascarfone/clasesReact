import {useState} from "react"

const ItemCount = ({stock,onAdd,initial}) => {

    let [contador, setContador] = useState(initial)

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
            <p>Resalador Filgo pastel: {contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button disabled={stock > 0 ? false:true} onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount
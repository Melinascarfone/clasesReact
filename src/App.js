import NavBar from "./NavBar"
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailConteiner from "./componentes/ItemDetailContariner"


const App = () => {

    return (
        <>
         <NavBar brandName='Libreria Blic'/>
         <ItemListContainer text='Productos destacados' />
         <ItemDetailConteiner />
        </>
    )
}
export default App
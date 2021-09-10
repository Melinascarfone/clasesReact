import NavBar from "./NavBar"
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailConteiner from "./componentes/ItemDetailContariner"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = () => {

    return (
        <BrowserRouter>
         <NavBar brandName='Libreria Blic'/>
         <Switch>
             <Route path="/" component={<ItemListContainer/>} exact/>
             <Route path="/categoria/:id" component={<ItemListContainer/>} exact/>
             <Route path="/Item/:id" component={<ItemDetailConteiner/>} exact/>
         </Switch>
        </BrowserRouter>
    )
}
export default App
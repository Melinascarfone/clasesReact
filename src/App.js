import NavBar from "./componentes/NavBar.js"
import ItemListContainer from "./componentes/ItemListContainer.js"
import ItemDetailContainer from "./componentes/ItemDetailContainer.js"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CustomProvider from "./contexto/CartContext"
import Cart from "./componentes/Cart.js"
const App = () => {
   return (
      <BrowserRouter>
         <CustomProvider>
            <NavBar/>
            <Switch>
               <Route path="/" component= {ItemListContainer} exact/>
               <Route path="/category/:catid" component= {ItemListContainer}/>
               <Route path="/item/:id" component= {ItemDetailContainer}/>
               <Route path="/cart" component= {Cart}/>
            </Switch>
         </CustomProvider>
      </BrowserRouter>
   )
};
export default App
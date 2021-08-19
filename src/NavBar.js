import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <header id="main-header">
             <h1>Bienvenidos</h1>
             <nav>
                 <a href="#">Link</a>
                 <a href="#">Link</a>
             </nav>
             <CartWidget/>
         </header>
    )
}
export default NavBar;
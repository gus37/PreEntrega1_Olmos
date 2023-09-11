import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'


const NavBar = () => {
    return (
        <nav className="has-background-primary">
            
            <img src={logo} alt="logo"/>  
           
            <h3 className="title">Eco-commerce</h3>

            <div>
                <button className="button m-2 is-medium is-responsive is-dark is-outlined is-rounded">Celulares</button>
                <button className="button m-2 is-medium is-responsive is-dark is-outlined is-rounded">Tablets</button>
                <button className="button m-2 is-medium is-responsive is-dark is-outlined is-rounded">NoteBooks</button>
            </div>

            <CartWidget/>
        </nav>
    )
}
 export default NavBar;
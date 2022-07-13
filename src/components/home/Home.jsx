import { Cart } from "../cart/Cart"
import { Menu } from "../menu/Menu"
import './Home.css'

export const Home = () => {
    return(
        <div className="home">
                <div className="menu-component">
                    <Menu />
                </div>
                <div className="cart-component">
                    <Cart />
                </div>
        </div>
    )
}
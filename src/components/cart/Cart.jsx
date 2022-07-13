import './Cart.css'
import { useSelector } from 'react-redux'
import { CartItem } from '../cartItem/CartItem'
import emptyCart from '../../assets/images/pizza/empty_cart.png'

export const Cart = () => {
    const cart = useSelector(state => state.cart)

    return(
        <div className="cart">
            {cart.length>0 ?
            <>
                <div className="cart-items">
                        {
                            cart.map(item => <CartItem key={ item.id } data ={ item }/>)
                        }
                </div>
                <div className="cart-footer">
                    <div className="total-div">
                            <h2 id="total-heading">Subtotal</h2>
                            <h2 id="total-heading"><span>₹</span></h2>
                    </div>
                    <button id="confirm-bt">{cart.length>0 && <span>Total {cart.length}&nbsp;&nbsp;</span> }CHECKOUT</button>
                </div>
                </>: <div className="empty-div">
                    <div className="empty-top">
                        <img src={ emptyCart } alt="" id='empty-img'/>
                    </div>
                    <div className="empty-bottom">
                        <h2 id="empty-cart-text">YOUR CART IS EMPTY</h2>
                        <p id="empt-info">Please add some items from the menu.</p>
                    </div>
                    </div>}
        </div>
    )
}
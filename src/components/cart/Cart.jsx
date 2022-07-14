import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { CartItem } from '../cartItem/CartItem'
import emptyCart from '../../assets/images/pizza/empty_cart.png'
import { FaTrash } from 'react-icons/fa'
import { useState } from 'react'

export const Cart = () => {
    const [changeQuantity, setChangeQuantity] = useState(1)
    
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const totalPrice = cart.reduce((acc, current) =>acc+Number(current.pPrize),0)*changeQuantity
    console.log(totalPrice);

    const emptyCompleteCart = () => {
        dispatch({
            type:"EMPTY_CART"
        })
    } 
    
    return(
        <div className="cart">
            {cart.length>0 ?
            <>
                <div className="cart-items">
                        {
                            cart.map(item => <CartItem 
                                key={ item.id } 
                                data ={ item } 
                                setChangeQuantity={ setChangeQuantity } 
                                qty={ changeQuantity }
                                />)
                        }
                </div>
                <div className="cart-footer">
                    <div className="total-div">
                            <h2 id="total-heading">Subtotal <FaTrash id='empty-total-cart' onClick={ emptyCompleteCart }/></h2>
                            <h2 id="total-heading"><span>₹</span>{ totalPrice }</h2>
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
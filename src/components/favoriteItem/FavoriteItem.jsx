import './FavoriteItem.css'
import { BsTrash } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

export const FavoriteItem = ({ data }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const deleteItem = (id) => {
        dispatch({
            type:"REMOVE_FROM_FAVOURITE",
            payload: id
        })
    }

    const removeFromCart = (id) => {
        dispatch({
            type:"REMOVE_FROM_CART",
            payload: id
        })
    }

    const addToCart = (id) => {
        dispatch({
            type:"ADD_TO_CART",
            payload: data
        })
        dispatch({
            type:"REMOVE_FROM_FAVOURITE",
            payload: id
        })
    }
    return(
        <div className="favorite-item">
            <div className="fav-left">
                    <img src={ data.pImage } alt="" id='i-image'/>
                    <p id="i-name">{ data.pName }</p>
                    <p id="i-price">₹{ data.pPrice }</p>
            </div>
            <div className="fav-right">
                    <BsTrash id='delete-bt' onClick={() => deleteItem(data.id)} />
                   {cart.some(i => i.id === data.id) ?
                     <button id='remove-bt' onClick={() => removeFromCart(data.id) }>REMOVE FROM CART</button>:
                     <button id="add-bt" onClick={() => addToCart(data.id)}>ADD TO CART</button>}
            </div>  
        </div>
    )
}
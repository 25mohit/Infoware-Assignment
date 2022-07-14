import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import './PizzaCard.css'

export const PizzaCard = ({ data }) => {

    const dispatch = useDispatch()
    const favourite = useSelector(state => state.favourites)
    const cart = useSelector(state => state.cart)

    const addToCart = () => {
        dispatch({
            type:"ADD_TO_CART",
            payload: data
        })
    }

    const addToFavourite = () => {
        dispatch({
            type:"ADD_TO_FOVOURITES",
            payload: data
        })
    }

    const removeFavouriteItem = (id) => {
        dispatch({
            type:"REMOVE_FROM_FAVOURITE",
            payload: id
        })
    }
    const removeItemFromCart = (id) => {
        dispatch({
            type:"REMOVE_FROM_CART",
            payload: id
        })
    }
    return(
        <div className="pizza-card">
            <div className="top-section">
                    <img src={ data.pImage } id='pizza-image' alt="" />
                    { favourite.some(i => i.id === data.id)? 
                    <AiFillHeart id='heart-fill-icon' onClick={ () => removeFavouriteItem(data.id) }/>: 
                    <AiOutlineHeart id='heart-icon' onClick={ addToFavourite }/>}
                    <p id="item-price">₹ { data.pPrice }</p>
            </div>
            <div className="mid-section">
                    <p id="pizza-name">{ data.pName }</p>
                    <p id="pizza-detail">{ data.pDescription }</p>
                    {data.pSize &&
                    <div className="option">
                        <div>
                                <p id="option-heading">Size</p>
                                <select name="" id="">
                                    {data.pSize.map((val, i) =><option value={i} key={i}>{ val }</option>)}
                                </select>
                        </div>
                        <div>
                                <p id="option-heading">Crust</p>
                                <select>
                                    {data.pCrust.map((val, i) =><option value={i} key={i}>{ val }</option>)}
                                </select>
                        </div>
                    </div>}
                        <div className="card-footer">
                               {cart.some(i => i.id === data.id) ?
                                <button id='remove' onClick={() => removeItemFromCart( data.id )}>REMOVE FROM CART</button>:
                                <button id="add" onClick={ addToCart }>ADD TO CART</button>}
                        </div>
            </div>
        </div>
    )
}
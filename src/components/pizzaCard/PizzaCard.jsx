import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import './PizzaCard.css'

export const PizzaCard = ({ data }) => {
    const dispatch = useDispatch()
    const favourite = useSelector(state => state.favourites)

    const addToCart = () => {
        dispatch({
            type:"ADD_TO_CART",
            payload: data
        })
        console.log('Added .. !!!');
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
    return(
        <div className="pizza-card">
            <div className="top-section">
                    <img src={ data.pImage } id='pizza-image' alt="" />
                    { favourite.some(i => i.id === data.id)? 
                    <AiFillHeart id='heart-fill-icon' onClick={ () => removeFavouriteItem(data.id) }/>: 
                    <AiOutlineHeart id='heart-icon' onClick={ addToFavourite }/>}
            </div>
            <div className="bottom-section">
                    <p id="pizza-name">{ data.pName }</p>
                    <p id="pizza-detail">{ data.pDescription }</p>
                        <div className="card-footer">
                                <button id="add" onClick={ addToCart }>ADD TO CART</button>
                        </div>
            </div>
        </div>
    )
}
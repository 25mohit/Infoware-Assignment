import { useDispatch } from 'react-redux'
import {AiOutlineHeart} from 'react-icons/ai'
import './PizzaCard.css'

export const PizzaCard = ({ data }) => {
    const dispatch = useDispatch()

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
    return(
        <div className="pizza-card">
            <div className="top-section">
                    <img src={ data.pImage } id='pizza-image' alt="" />
                    <AiOutlineHeart id='heart-icon' onClick={ addToFavourite }/>
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
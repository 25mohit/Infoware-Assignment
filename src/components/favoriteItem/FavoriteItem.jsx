import './FavoriteItem.css'
import { BsTrash } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

export const FavoriteItem = ({ data }) => {
    const dispatch = useDispatch()
    
    const deleteItem = (id) => {
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
                    <p id="i-price">₹{ data.pPrize }</p>
            </div>
            <div className="fav-right">
                    <BsTrash id='delete-bt' onClick={() => deleteItem(data.id)} />
                    <button id="add-bt">ADD TO CART</button>
            </div>  
        </div>
    )
}
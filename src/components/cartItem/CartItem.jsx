import './CartItem.css'
import { useDispatch } from 'react-redux'
import { BsTrash } from 'react-icons/bs'
import { MdOutlineAdd } from 'react-icons/md'
import { AiOutlineMinus } from 'react-icons/ai'

export const CartItem = ({ data, setChangeQuantity, qty }) => {
    const dispatch = useDispatch()

    const removeItemFromCart = (id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload:id
        })
    }

    return(
        <div className="cart-item">
            <div className="item-top">
                <div className="side-lft">
                    <img src={data.pImage} alt="" id='item-img'/>
                </div>
                <div className="side-rgt">
                    <p id="item-name">{ data.pName }</p>
                    <p id="item-info">{ data.pDescription }</p>
                </div>
            </div>
            <div className="item-bottom">
                <div className="bottom-left">
                    { qty >1 ?
                    <AiOutlineMinus id='minus-item' onClick={() => setChangeQuantity(() => qty-1)}/>:
                    <BsTrash id='trash' onClick={() =>removeItemFromCart(data.id)}/>}
                    <p className="item-qty">{qty}</p>
                    <MdOutlineAdd id='add-item' onClick={() => setChangeQuantity(() => qty+1)}/>
                </div>
                <div className="bottom-right">
                    <p id="item-price"><span>₹</span>{ data.pPrize }</p>
                </div>
            </div>
        </div>
    )
}
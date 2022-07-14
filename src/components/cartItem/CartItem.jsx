import './CartItem.css'
import { useDispatch } from 'react-redux'
import { BsTrash } from 'react-icons/bs'
import { MdOutlineAdd } from 'react-icons/md'
import { AiOutlineMinus } from 'react-icons/ai'

export const CartItem = ({ data, setquantity, quantity }) => {

    const dispatch = useDispatch()

    const removeItemFromCart = (id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload:id
        })
    }

    const increaseItem = (id) => {
        setquantity(() => quantity+1)
        dispatch({
            type: "INCREASE_CART_ITEM",
            payload:{
                id
            }
        })
    }

    const decreaseItem = (id) => {
        setquantity(() => quantity+1)
        dispatch({
            type: "DECREASE_CART_ITEM",
            payload:{
                id
            }
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
                    {data.pSize && <p id="item-size-info">{ data.pSize} | { data.pCrust }</p>}
                </div>
            </div>
            <div className="item-bottom">
                <div className="bottom-left">
                    { data.pQuantity >1 ?
                    <AiOutlineMinus id='minus-item' onClick={() => decreaseItem(data.id)}/>:
                    <BsTrash id='trash' onClick={() =>removeItemFromCart(data.id)}/>}
                    <p className="item-qty">{data.pQuantity}</p>
                    <MdOutlineAdd id='add-item' onClick={() => increaseItem(data.id)}/>
                </div>
                <div className="bottom-right">
                    <p id="item-price"><span>₹</span>{ data.pPrice }</p>
                </div>
            </div>
        </div>
    )
}

import './CartItem.css'
import { useDispatch } from 'react-redux'
import { BsTrash } from 'react-icons/bs'
import { MdOutlineAdd } from 'react-icons/md'
import { AiOutlineMinus } from 'react-icons/ai'
import { useEffect, useState } from 'react'

export const CartItem = ({ data }) => {

    const [pPrize, setPPrize] = useState(data.pPrize)
    const [quantity, setquantity] = useState(1)
    const dispatch = useDispatch()

    const removeItemFromCart = (id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload:id
        })
    }

    useEffect(() => {
        console.log('useEffect Runs');
        console.log( pPrize);
    },[])
    
    const updateProduct = (id) => {
        setPPrize(() => 500)
        setquantity(() => quantity+1)
        dispatch({
            type: "INCREASE_CART_ITEM",
            payload:{
                id, pPrize
            }
        })
        console.log(id, pPrize);
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
                    { quantity >1 ?
                    <AiOutlineMinus id='minus-item' onClick={() => setquantity(() => quantity-1)}/>:
                    <BsTrash id='trash' onClick={() =>removeItemFromCart(data.id)}/>}
                    <p className="item-qty">{quantity}</p>
                    <MdOutlineAdd id='add-item' onClick={() => updateProduct(data.id)}/>
                </div>
                <div className="bottom-right">
                    <p id="item-price"><span>₹</span>{ data.pPrize }</p>
                </div>
            </div>
        </div>
    )
}

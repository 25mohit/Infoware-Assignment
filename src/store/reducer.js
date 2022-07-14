import { createStore } from "redux"

const initialState = {
    cart: [],
    favourites:[]
}

const reducer = (state = initialState, action) => {
    switch( action.type ){
        case "ADD_TO_CART":
            return{
                ...state,
                cart:[...state.cart, action.payload]
            }

        case "REMOVE_FROM_CART":
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload )
            }
            
        case "EMPTY_CART":
            return{
                ...state,
                cart:[]
            }

        case "ADD_TO_FOVOURITES":
            return{
                ...state,
                favourites:[...state.favourites, action.payload]
            }

        case "REMOVE_FROM_FAVOURITE":
            return{
                ...state,
                favourites: state.favourites.filter(item => item.id !== action.payload)
            }

        case "INCREASE_CART_ITEM":
            const findIndex = state.cart.findIndex( item => item.id == action.payload.id )
            if(findIndex>=0){
                console.log(state.cart[findIndex]);
              state.cart[findIndex].pPrice += (state.cart[findIndex].pPrice /  state.cart[findIndex].pQuantity)
              console.log(state.cart[findIndex]);
              state.cart[findIndex].pQuantity += 1
            }
            return state;
        case "DECREASE_CART_ITEM":
            const findItemIndex = state.cart.findIndex( item => item.id == action.payload.id )
            if(findItemIndex>=0){
                if(state.cart[findItemIndex].pQuantity >=1){
                    console.log(state.cart[findItemIndex]);
                    state.cart[findItemIndex].pPrice -= (state.cart[findItemIndex].pPrice /  state.cart[findItemIndex].pQuantity)
                    console.log(state.cart[findItemIndex]);
                    state.cart[findItemIndex].pQuantity -= 1
                }else if(state.cart[findItemIndex].pQuantity<1){

                }
            }
            return state;

        case "EMPTY_FAVOURITES":
            return{
                ...state,
                favourites:[]
            }

            default:
            return state;
    }
}

export default createStore( reducer );
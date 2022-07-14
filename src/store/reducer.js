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
import * as actionTypes from './actions';
import initialState from './initialState';
import {sortProducts, filterProducts, AddItemToCart, buyItems, removeCartItem} from './helperFunctions';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SORT_PRODUCTS:
            return {
                ...state,
                productInformations: sortProducts(state,action),
                selectedItem: action.selectedItem
            }
        case actionTypes.FILTER_PRODUCTS:
            const [clonedFilterButtons, clonedProductInformations] = filterProducts(state, action)
            return {
                ...state,
                filterButtons: clonedFilterButtons,
                productInformations: clonedProductInformations
            }
        case actionTypes.ADD_ITEM_TO_CART:
            if(action.chosenSize) {
                return {
                    ...state,
                    cartItems: AddItemToCart(state, action)
                }        
            }
        case actionTypes.BUY_ITEMS:       
            return {
                ...state,
                cartItems: buyItems(state)
            } 
        case actionTypes.REMOVE_CART_ITEM:       
            return {
                ...state,
                cartItems: removeCartItem(state, action)
            }    
    }
    return state;
};

export default reducer;
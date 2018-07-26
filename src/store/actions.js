import * as actionTypes from './actionTypes';

export const addItemToCart = (addedProduct, chosenSize) => {
    return {
        type: actionTypes.ADD_ITEM_TO_CART,
        addedProduct: addedProduct,
        chosenSize: chosenSize
    }
}

export const buyItems = () => {
    return {
        type: actionTypes.BUY_ITEMS
    }
}
export const removeItem = (elementIndex) => {
    return {
        type: actionTypes.REMOVE_CART_ITEM,
        elementIndex: elementIndex
    }
}

export const onSelectChange = (selectedItem) => {
    return {
        type: actionTypes.SORT_PRODUCTS,
        selectedItem: selectedItem
    }
}

export const filterButtonClick = (clickedButton) => {
    return {
        type: actionTypes.FILTER_PRODUCTS,
        clickedButton: clickedButton
    }
}
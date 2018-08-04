import * as actionTypes from "./actionTypes";

export const addItemToCart = (addedProduct, chosenSize) => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  addedProduct: addedProduct,
  chosenSize: chosenSize
});

export const buyItems = () => ({
  type: actionTypes.BUY_ITEMS
});

export const removeItem = elementIndex => ({
  type: actionTypes.REMOVE_CART_ITEM,
  elementIndex: elementIndex
});

export const onSelectChange = selectedItem => ({
  type: actionTypes.SORT_PRODUCTS,
  selectedItem: selectedItem
});

export const filterButtonClick = clickedButton => ({
  type: actionTypes.FILTER_PRODUCTS,
  clickedButton: clickedButton
});

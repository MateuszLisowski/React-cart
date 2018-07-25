export const sortProducts = (state, action) => {
    const clonedProducts = state.productInformations.slice(0)
    const sortedProducts = action.selectedItem === 'Ascending' ?
        clonedProducts.sort((a, b) => a.price - b.price) :
        clonedProducts.sort((a, b) => b.price - a.price)
    return sortedProducts
}

export const filterProducts = (state, action) => {
    // update filter buttons
    const clonedFilterButtons = state.filterButtons.slice(0)
    const currentElement = {
        ...clonedFilterButtons[action.clickedButton - 1]
    };
    currentElement.clicked = !currentElement.clicked
    clonedFilterButtons.splice(action.clickedButton - 1, 1, currentElement)
    // filter sizes logic
    const clonedProductInformations = state.productInformations.slice(0)
    clonedProductInformations.forEach((product, i) => {
        const currentProduct = {
            ...product
        };
        const filterSizes = [];
        clonedFilterButtons.forEach(e => {
            if (e.clicked) {
                filterSizes.push(e.value);
            }
        })
        if (filterSizes.length) {
            const filterResult = Boolean(
                filterSizes
                    .map(size => product.sizes.find(el => el === size))
                    .filter(item => item !== undefined).length
            );
            currentProduct.isVisible = filterResult;
        } else {
            currentProduct.isVisible = true;
        }
        clonedProductInformations.splice(i, 1,currentProduct);
        clonedProductInformations.sort((a, b) => a.price - b.price);
    })
    return [clonedFilterButtons, clonedProductInformations]
}


export const AddItemToCart = (state, action) => {
    const clonedCartItems = state.cartItems.slice(0)
    const productAddedToCart = {
        ...action.addedProduct
    };
    productAddedToCart.chosenSize = action.chosenSize
    clonedCartItems.push(productAddedToCart)
    return clonedCartItems
}


export const buyItems = (state) => {
    const emptyCart = state.cartItems.slice(0)
    emptyCart.length = 0
    return emptyCart
}


export const removeCartItem = (state, action) => {
    const updateProductCart = state.cartItems.slice(0)
    updateProductCart.splice(action.elementIndex, 1)
    return updateProductCart
}

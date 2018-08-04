import initialState from '../initialState';
import { sortProducts, filterProducts, AddItemToCart, buyItems, removeCartItem } from '../helperFunctions';
import { sortedAscending, sortedDescending } from './sortedProducts';

describe('helperFunctions correctly works', () => {
    describe('sortProducts works', () => {
        // it('input: initialState action: "Descending"', () => {
        //     expect(sortProducts(initialState, {selectedItem: 'Descending'})).toEqual(sortedDescending)
        // })
        // it('input: initialState action: "Ascending"', () => {
        //     expect(sortProducts(initialState, {selectedItem: 'Ascending'})).toEqual(sortedAscending)
        // })
        // describe('should pass random tests', () => {
        //     const sliceRanges = [...Array(30).fill(0).map(_ => [Math.floor(Math.random() * 12),Math.floor(Math.random() * 12)].sort((a,b) => a - b))]
        //     const clonedState = initialState.productInformations.slice(0)
        //     const randomProducts = sliceRanges.map(range => clonedState.slice(range[0], range[1])).filter(array => array.length)
        //     randomProducts.forEach(products => {
        //         it('Ascending order', () => {
        //             const expectedSortedProducts = products.sort((a,b) => a.price - b.price)
        //             expect(sortProducts({productInformations: products}, {selectedItem: 'Ascending'})).toEqual(expectedSortedProducts)
        //         })
        //         it('Descending order', () => {
        //             const expectedSortedProducts = products.sort((a,b) => b.price - a.price)
        //             expect(sortProducts({productInformations: products}, {selectedItem: 'Descending'})).toEqual(expectedSortedProducts)
        //         })
        //     })
        // })
    })
    describe('filterProducts works', () => {
    })
    describe('AddItemToCart works', () => {
        const chosenSizes = [...Array(30).fill(0).map(_ => Math.floor(Math.random() * 4) + 1)]
        const clonedState = initialState.productInformations.slice(0).map(e => ({price: e.price}))
        const cloneSizes = chosenSizes.slice(0)   
        const randomProducts = cloneSizes.map((size,index) => {
            const againCopy = initialState.productInformations.slice(0).map(e => ({price: e.price}))
            const productToAdd = [againCopy[Math.floor(Math.random() * 12)]]
            const [cloneToObject] = [...productToAdd]
            cloneToObject.chosenSize = size
            return cloneToObject
        }) 
        randomProducts.forEach((products,index) => {
            const expectedCart = clonedState.slice(0)
            expectedCart.push(products)
            it('Correctly ', () => {
                expect(AddItemToCart({cartItems: clonedState},{chosenSize: chosenSizes[index], addedProduct: products})).toEqual(expectedCart)
            })
        })
    })
    describe('buyItems works', () => {
        const sliceRanges = [...Array(30).fill(0).map(_ => [Math.floor(Math.random() * 12),Math.floor(Math.random() * 12)].sort((a,b) => a - b))]
        const clonedState = initialState.productInformations.slice(0)
        const randomProducts = sliceRanges.map(range => clonedState.slice(range[0], range[1])).filter(array => array.length)
        randomProducts.forEach(products => {
            it('Correctly clear cart for random products in cart', () => {
                const emptyCart = []
                expect(buyItems({cartItems: products})).toEqual(emptyCart)
            })
        })
    })
    describe('removeCartItem works', () => {
        const sliceRanges = [...Array(30).fill(0).map(_ => Math.floor(Math.random() * 12))]
        const clonedCart = initialState.productInformations.slice(0)
        sliceRanges.forEach(index => {
            it('Correctly remove chosen product from cart depends on random index', () => {
                const cloneCartItems = clonedCart.slice(0)
                cloneCartItems.splice(index,1)
                expect(removeCartItem({cartItems: clonedCart}, {elementIndex: index})).toEqual(cloneCartItems)
            })
        })
    })
})
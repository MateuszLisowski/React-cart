import initialState from '../initialState';
import { sortProducts, filterProducts, AddItemToCart, buyItems, removeCartItem } from '../helperFunctions';
import { sortedAscending, sortedDescending } from './sortedProducts';

describe('helperFunctions correctly works', () => {
    describe('sortProducts works', () => {
        it('input: initialState action: "Descending"', () => {
            expect(sortProducts(initialState, {selectedItem: 'Descending'})).toEqual(sortedDescending)
        })
        it('input: initialState action: "Ascending"', () => {
            expect(sortProducts(initialState, {selectedItem: 'Ascending'})).toEqual(sortedAscending)
        })
        describe('should pass random tests', () => {
            const sliceRanges = [...Array(30).fill(0).map(_ => [Math.floor(Math.random() * 12),Math.floor(Math.random() * 12)].sort((a,b) => a - b))]
            const clonedState = initialState.productInformations.slice(0)
            const randomProducts = sliceRanges.map(range => clonedState.slice(range[0], range[1])).filter(array => array.length)
            randomProducts.forEach(products => {
                it('Ascending order', () => {
                    const expectedSortedProducts = products.sort((a,b) => a.price - b.price)
                    expect(sortProducts({productInformations: products}, {selectedItem: 'Ascending'})).toEqual(expectedSortedProducts)
                })
                it('Descending order', () => {
                    const expectedSortedProducts = products.sort((a,b) => b.price - a.price)
                    expect(sortProducts({productInformations: products}, {selectedItem: 'Descending'})).toEqual(expectedSortedProducts)
                })
            })
        })
    })
    describe('filterProducts works', () => {
    })
    describe('AddItemToCart works', () => {
    })
    describe('buyItems works', () => {
        const sliceRanges = [...Array(30).fill(0).map(_ => [Math.floor(Math.random() * 12),Math.floor(Math.random() * 12)].sort((a,b) => a - b))]
        const clonedState = initialState.productInformations.slice(0)
        const randomProducts = sliceRanges.map(range => clonedState.slice(range[0], range[1])).filter(array => array.length)
        randomProducts.forEach(products => {
            it('Correctly clear cart', () => {
                const emptyCart = []
                expect(buyItems({cartItems: products})).toEqual(emptyCart)
            })
        })
    })
    describe('removeCartItem works', () => {
    })
})
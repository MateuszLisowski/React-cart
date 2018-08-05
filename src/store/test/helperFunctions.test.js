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
        // filterButtons
        const clonedFilterButtons = initialState.filterButtons.slice(0)
        const randomSelectedItems = [...Array(50).fill(0)].map(_ => Math.floor(Math.random() * 4) + 1)
        const filterButtons = [...Array(50).fill(0)].map(_ => {
            const filterButtonsBase = clonedFilterButtons.slice(0);
            const randomFilterButtons = filterButtonsBase.map(object => ({
                value: object.value, 
                clicked: Boolean(Math.floor(Math.random() * 2))       
            }))
            return randomFilterButtons
        })
        const expectedFilterButtons = []
        filterButtons.forEach((wrapper, index) => {
            const newObject = []
            wrapper.forEach(object => object.value === randomSelectedItems[index] ? newObject.push({value: object.value, clicked: !object.clicked }) : newObject.push(object))
            expectedFilterButtons.push(newObject)
        })
        // products
        const originalProducts = []
        const expectedProducts = []
        const clonedProducts = [...Array(50).fill(0)].map(_ => initialState.productInformations.slice(0).splice(Math.floor(Math.random() * 12),1).map(e => {
            originalProducts.push({sizes: e.sizes, isVisible: false,price: e.price})
            return {sizes: e.sizes, isVisible: false,price: e.price}
        }))
        clonedProducts.forEach((product, i) => {
            const filterSizes = [];
            expectedFilterButtons[i].forEach(e => {
                if (e.clicked) {
                    filterSizes.push(e.value);
                }
            })
           const [prod] = [...product]
            if (filterSizes.length) {
                const filterResult = Boolean(
                    filterSizes
                        .map(size => prod.sizes.find(el => el === size))
                        .filter(item => item !== undefined).length
                );
                prod.isVisible = filterResult;
            } else {
                prod.isVisible = true;
            }
            expectedProducts.push(prod)
        }) 
        describe('should pass random tests', () => {
            expectedFilterButtons.forEach((_,index) => {
                it('pass random test', () => {
                    expect(filterProducts({filterButtons:filterButtons[index], productInformations: [originalProducts[index]]},{clickedButton: randomSelectedItems[index]})).toEqual([[...expectedFilterButtons[index]],[expectedProducts[index]]])
                })
            })
       })
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
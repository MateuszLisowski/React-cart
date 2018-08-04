
import * as actionTypes from '../actionTypes';
import { addItemToCart, buyItems, removeItem, onSelectChange, filterButtonClick } from '../actions'

describe('Correctly dispatch different actions', () => {
    it('should create action to addItemToCart', () => {
        const addedProduct = {
            name: "nike 1",
            sizes: [1, 2, 3, 4],
            price: 19,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "1 product",
            id: 1,
            isVisible: true
        }
        const chosenSize = 3
        const expectedAction = {
                type: actionTypes.ADD_ITEM_TO_CART,
                addedProduct,
                chosenSize
        }
        expect(addItemToCart(addedProduct, chosenSize)).toEqual(expectedAction)
    })
    it('should create action to buyItems', () => {
       const expectedAction = {
            type: actionTypes.BUY_ITEMS
       }
       expect(buyItems()).toEqual(expectedAction)
    })
    it('should create action to removeItem', () => {
        const elementIndex = 2
        const expectedAction = {
             type: actionTypes.REMOVE_CART_ITEM,
             elementIndex
        }
        expect(removeItem(elementIndex)).toEqual(expectedAction)
     })
     it('should create action to onSelectChange', () => {
        const selectedItem = 'Sort by price'
        const expectedAction = {
             type: actionTypes.SORT_PRODUCTS,
             selectedItem
        }
        expect(onSelectChange(selectedItem)).toEqual(expectedAction)
     })
     it('should create action to filterButtonClick', () => {
        const clickedButton = 1
        const expectedAction = {
             type: actionTypes.FILTER_PRODUCTS,
             clickedButton
        }
        expect(filterButtonClick(clickedButton)).toEqual(expectedAction)
     })
})
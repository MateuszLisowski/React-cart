
import * as actionTypes from '../actionTypes';
import { addItemToCart, buyItems, removeItem, onSelectChange, filterButtonClick } from '../actions'

describe('Correctly calls different actions', () => {
    it('csss', () => {
       const expectedAction = {
            type: actionTypes.BUY_ITEMS
       }
       expect(buyItems()).toEqual(expectedAction)
    })
})
import React from 'react';
import CartItems from './CartItems';
import { shallow } from 'enzyme';

describe('<CartItems />', () => {
    const wrapper = shallow(<CartItems 
        removeItem={() => { }} 
        buyItems={() => { }} 
        cartItems={[{ name: 'nike', price: 22, chosenSize: 2 }]}
    />);
    describe('have correct list length', () => {
        const singleProduct = { name: 'nike', price: 22, chosenSize: 2 }
        const productItems = [...Array(30).keys()].map(e => {
            return [...Array(e).fill(singleProduct)]
        })
        productItems.forEach(cartItems=> {      
            const randomWrapper = shallow(<CartItems 
                removeItem={() => { }} 
                buyItems={() => { }} 
                cartItems={cartItems}
            />);
            it(`product list = ${cartItems.length}` , () => {
                expect(randomWrapper.find('ul').children().length).toBe(cartItems.length);
            })
        })
    })
    it('should contain buy items button', () => {
        expect(wrapper.find('.buyButton').length).toBe(1);
    })
    it('Aux as a fake wrapper works and I can have multiple childrens', () => {
        expect(wrapper.children().length).toBe(2);
    })
})
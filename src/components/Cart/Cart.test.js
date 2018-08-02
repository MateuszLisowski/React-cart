import React from 'react';
import Cart from './Cart';
import { shallow } from 'enzyme';

describe('<Cart />', () => {
    const func = () => { }
    describe('should correct show and hide cart', () => {
        const wrapper = shallow(<Cart isCartVisible={true} showCart={func} hideCart={func} buyItems={func} removeItem={func} cartItems={[{ name: 'nike', price: 22, chosenSize: 2 }]}/>) 
        it('correct display carticon', () => {
            wrapper.setProps({isCartVisible: false})
            expect(wrapper.find('.cartIcon').length).toBe(1);
        })
        it('correct display cart', () => {
            wrapper.setProps({isCartVisible: true})
            expect(wrapper.find('.cartContent').length).toBe(1);
        })
    })
})
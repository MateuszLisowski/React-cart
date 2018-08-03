import React from 'react';
import { App } from './Layout';
import { shallow } from 'enzyme';

describe('<Layout />', () => {
    const cartItems = [{
            name: "nike 2",
            sizes: [1],
            price: 99,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "2 product",
            id: 2,
            isVisible: true
    }]
    const func = () => {}
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<App buyItems={func} removeItem={func} cartItems={cartItems}/>).shallow()
    })
    it('contains app wrapper', () => {
        expect(wrapper.find('.App').length).toEqual(1)
    })
    it('correctly render header', () => {
        expect(wrapper.find('header').length).toBe(1)
    })
    it('first element is img with correct source', () => {
        expect(wrapper.find('main').length).toBe(1)
    })
})
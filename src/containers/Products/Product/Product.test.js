import React from 'react';
import { Product } from './Product';
import { shallow } from 'enzyme';

describe('<Product />', () => {
    const productData = {
            name: "nike 2",
            sizes: [1],
            price: 99,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "2 product",
            id: 2,
            isVisible: true
    }
    const func = () => {}
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<Product addItemToCart={func} productData={productData}/>).shallow()
    })
    it('contains product wrapper', () => {
        expect(wrapper.find('.singleProduct').length).toEqual(1)
    })
    it('render correct amount of products', () => {
        expect(wrapper.find('.singleProduct').children().length).toBe(5)
    })
    it('first element is img with correct source', () => {
        expect(wrapper.find('.singleProduct').children().first().filterWhere(item => item.prop('src') === productData.imageSrc).length).toBe(1)
    })
    it('first element is img with correct alt text', () => {
        expect(wrapper.find('.singleProduct').children().first().filterWhere(item => item.prop('alt') === productData.alt).length).toBe(1)
    })
    it('correctly insert product name from props', () => {
        expect(wrapper.find('.productName').text()).toBe(productData.name)
    })
    it('correctly insert product price from props', () => {
        expect(wrapper.find('.productPrice').text()).toBe(`${productData.price} zł`)
    })
    it('contains container for choosing sizes', () => {
        expect(wrapper.find('.sizes').length).toBe(1)
    })
    it('contains button to add product to cart with correct text', () => {
        expect(wrapper.find('.addProduct').text()).toBe(`Add product`)
    })
})
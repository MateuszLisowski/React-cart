import React from 'react';
import { Products } from './Products';
import { shallow } from 'enzyme';

describe('<Products />', () => {
       const products = [{
            name: "nike 2",
            sizes: [1],
            price: 99,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "2 product",
            id: 2,
            isVisible: true
        },
        {
            name: "nike 3",
            sizes: [1, 4],
            price: 1909,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "3 product",
            id: 3,
            isVisible: true
        },
        {
            name: "nike 3",
            sizes: [1, 4],
            price: 1909,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "3 product",
            id: 3,
            isVisible: true
        }] 
   let wrapper
    beforeEach(()=>{
        wrapper = shallow(<Products products={products}/>).shallow()
    })
    it('contains ul wrapper', () => {
        expect(wrapper.find('.productsWrapper').length).toEqual(1)
    })
    it('render correct amount of products', () => {
        expect(wrapper.find('.productsWrapper').children().length).toBe(3)
    })
})
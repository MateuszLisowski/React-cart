import React from 'react';
import CartItem from './Cartitem';
import { shallow } from 'enzyme';

describe('<CartItem />', () => {
    const wrapper = shallow(<CartItem index={1} product={{ name: 'nike', price: 22, chosenSize: 2 }} removeItem={() => { }} />);
    it('contains three paragraphs with single item data', () => {
        expect(wrapper.find('p').length).toBe(3);
    })
    it('contains button removing current item from cart', () => {
        expect(wrapper.find('.removeItem').length).toBe(1);
    })
    describe('item wrapper have correct structure', () => {
        it('contains <li></li> wrapper', () => {
            expect(wrapper.find('li').length).toBe(1);
        })
        it('<li></li> have two childs - img and div', () => {
            expect(wrapper.find('li').children().length).toBe(2);
        })
        it('first child is img', () => {
            expect(wrapper.find('li').childAt(0).type()).toBe('img')
        })
        it('second child is div', () => {
            expect(wrapper.find('li').childAt(1).type()).toBe('div')
        })
    })
    describe('correctly read and insert to DOM random props', () => {
        const names = ['Nike', 'Umbro', 'Adidas', 'Puma', 'Reebok', 'Bershka']
        const products = [...Array(30).keys()].map(() => ({
            price: Math.floor(Math.random() * 1000) + 1,
            chosenSize: Math.floor(Math.random() * 4) + 1,
            name: names[Math.floor(Math.random() * 6)]
         }))
        products.forEach(object => {      
            const randomWrapper =  shallow(<CartItem index={1} product={{ name: object.name, price: object.price, chosenSize: object.chosenSize }} removeItem={() => { }} />);
            it(`correctly render name(${object.name}) prop`, () => {
                expect(randomWrapper.find('div').children().first().html()).toBe(`<p>${object.name}</p>`)
            })
            it(`correctly render price(${object.price}) prop`, () => {
                expect(randomWrapper.find('div').childAt(1).html()).toBe(`<p>${object.price} zł</p>`)
            })
            it(`correctly render chosenSize(${object.chosenSize}) prop`, () => {
                expect(randomWrapper.find('div').childAt(2).html()).toBe(`<p>chosen size: ${object.chosenSize}</p>`)
            })
        })
    })
})

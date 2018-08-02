import React from 'react';
import FilterButton from './FilterButton';
import { shallow } from 'enzyme';

describe('<FilterButton />', () => {
    const func = () => { }
    const randomValues = [...Array(10).keys()].map(e => Math.floor(Math.random() * 4) + 1)
    randomValues.forEach(randomValue => {
        const randomWrapper = shallow(<FilterButton onClick={func} value={randomValue} className='' />) 
        it('button is a wrapper', () => {
            expect(randomWrapper.children().type()).toBe('button');
        })
        it(`value ${randomValue} is correctly added to button`, () => {
            expect(randomWrapper.children().text()).toBe(randomValue.toString());
        })
    })
})
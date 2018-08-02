import React from 'react';
import Select from './Select';
import { shallow } from 'enzyme';

describe('<Select />', () => {
    const wrapper = shallow(<Select 
        onChange={() => { }} 
        value={'descending'}
    />);
    it('correctly read "descending" value', () => {
        wrapper.setProps({ value: 'descending' });
        expect(wrapper.find('select').props().value).toBe('descending');
    })
    it('correctly read "ascending "value', () => {
        wrapper.setProps({ value: 'ascending' });
        expect(wrapper.find('select').props().value).toBe('ascending');
    })
    it('correctly read "Sort by price" value', () => {
        wrapper.setProps({ value: 'Sort by price' });
        expect(wrapper.find('select').props().value).toBe('Sort by price');
    })
})
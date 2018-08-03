import React from 'react';
import { Filters } from './Filters';
import { shallow } from 'enzyme';

describe('<Filters />', () => {
    const filterButtons = [
        { value: 1, clicked: false },
        { value: 2, clicked: false },
        { value: 3, clicked: false },
        { value: 4, clicked: false }
    ]
    const func = () => {}
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<Filters onSelectChange={func} filterButtonClick={func} selectedItem={'Sort by price'} filterButtons={filterButtons} />).shallow()
    })
    it('contains correct wrapper', () => {
        expect(wrapper.find('#filtersWrapper').length).toEqual(1)
    })
})
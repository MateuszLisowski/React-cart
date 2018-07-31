import React from 'react';
import CartItem from './Cartitem';
import renderer from 'react-test-renderer';

describe('<CartItem />', () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<CartItem index={1} product={{name: 'nike', price: 22, chosenSize: 2}} removeItem={() => {}}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
})

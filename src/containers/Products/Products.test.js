import React from 'react';
import Products from './Products';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';

describe('<Products />', () => {
    const props = {
        products: [{
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
        }]
      }
    const wrapper = <Products {...props} />;
    const mapStateToProps = (state) => ({
        state,
      });
    const ConnectedComponent = connect(mapStateToProps)(wrapper);
    it('', () => {
        expect(ConnectedComponent.find('ul').children().length).toBe(2);
    })
})
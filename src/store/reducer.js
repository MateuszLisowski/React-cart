import * as actionTypes from './actions';

const initialState = {
    productInformations: [
        {
            name: "nike 1",
            sizes: [1, 2, 3, 4],
            price: 19,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "1 product",
            id: 1,
            isVisible: true
        },
        {
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
            name: "nike 4",
            sizes: [1, 2, 4],
            price: 190,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "4 product",
            id: 4,
            isVisible: true
        },
        {
            name: "nike 5",
            sizes: [2, 3, 4],
            price: 399,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "5 product",
            id: 5,
            isVisible: true
        },
        {
            name: "nike 6",
            sizes: [4],
            price: 669,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "6 product",
            id: 6,
            isVisible: true
        },
        {
            name: "nike 7",
            sizes: [1, 2],
            price: 555,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "7 product",
            id: 7,
            isVisible: true
        },
        {
            name: "nike 8",
            sizes: [3, 4],
            price: 777,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "8 product",
            id: 8,
            isVisible: true
        },
        {
            name: "nike 9",
            sizes: [1, 3],
            price: 666,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "9 product",
            id: 9,
            isVisible: true
        },
        {
            name: "nike 10",
            sizes: [1, 2, 3, 4],
            price: 888,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "10 product",
            id: 10,
            isVisible: true
        },
        {
            name: "nike 11",
            sizes: [1, 3, 4],
            price: 452,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "11 product",
            id: 11,
            isVisible: true
        },
        {
            name: "nike 12",
            sizes: [2, 3, 4],
            price: 743,
            imageSrc: "https://imgurbancity.pl/files/sc_staging_images/brand/full_151/694/921/4_03/13406750.jpg",
            alt: "12 product",
            id: 12,
            isVisible: true
        }
    ],
    selectedItem: 'Sort by price',
    filterButtons: [
        { value: 1, clicked: false },
        { value: 2, clicked: false },
        { value: 3, clicked: false },
        { value: 4, clicked: false }
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SORT_PRODUCTS:
            const clonedProducts = state.productInformations.slice(0)
            const sortedProducts = action.selectedItem === 'Ascending' ?
                clonedProducts.sort((a, b) => a.price - b.price) :
                clonedProducts.sort((a, b) => b.price - a.price)
            return {
                ...state,
                productInformations: sortedProducts,
                selectedItem: action.selectedItem
            }
        case actionTypes.FILTER_PRODUCTS:
            const clonedFilterButtons = state.filterButtons.slice(0)
            const currentElement = {
                ...clonedFilterButtons[action.clickedButton - 1]
            };
            currentElement.clicked = !currentElement.clicked
            clonedFilterButtons.splice(action.clickedButton - 1, 1, currentElement)
            // filter sizes logic
            const clonedProductInformations = state.productInformations.slice(0)
            clonedProductInformations.forEach((product, i) => {
                const currentProduct = {
                    ...product
                };
                const filterSizes = [];
                clonedFilterButtons.forEach(e => {
                    if (e.clicked) {
                        filterSizes.push(e.value);
                    }
                })
                if (filterSizes.length) {
                    const filterResult = Boolean(
                        filterSizes
                            .map(size => product.sizes.find(el => el === size))
                            .filter(item => item !== undefined).length
                    );
                    currentProduct.isVisible = filterResult;
                } else {
                    currentProduct.isVisible = true;
                }
                clonedProductInformations.splice(i, 1,currentProduct);
                clonedProductInformations.sort((a, b) => a.price - b.price);
            })
            console.log(clonedProductInformations)
            return {
                ...state,
                filterButtons: clonedFilterButtons,
                productInformations: clonedProductInformations
            }
    }
    return state;
};

export default reducer;
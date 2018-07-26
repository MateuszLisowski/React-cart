import React from 'react';
import './FilterButton.css';
import Aux from '../../../hoc/Aux';

const FilterButton = ({ className, onClick, value }) => {
    return (
        <Aux>
            <button className={className} onClick={onClick}>
                {value}
            </button>
        </Aux>
    );
};

export default FilterButton;
import React from 'react';
import './FilterButton.css';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

const FilterButton = ({ className, onClick, value }) => {
    return (
        <Aux>
            <button className={className} onClick={onClick}>
                {value}
            </button>
        </Aux>
    );
};

FilterButton.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

export default FilterButton;
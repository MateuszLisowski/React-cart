import React from 'react';
import PropTypes from 'prop-types';

const Select = ({value, onChange}) => {
    return (
        <select value={value} onChange={onChange}>
            <option disabled>Sort by price</option>
            <option>Ascending</option>
            <option>Descending</option>
        </select>
    );
};

Select.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default Select;
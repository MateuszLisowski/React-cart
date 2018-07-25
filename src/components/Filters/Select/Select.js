import React from 'react';

const Select = ({value, onChange}) => {
    return (
        <select value={value} onChange={onChange}>
            <option disabled>Sort by price</option>
            <option>Ascending</option>
            <option>Descending</option>
        </select>
    );
};

export default Select;
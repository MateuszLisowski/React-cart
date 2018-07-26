import React from 'react';
import './SizeButton.css';
import PropTypes from 'prop-types';

const SizeButton = ({ value, click, isClicked }) => (
    <button onClick={click} className={isClicked}>
        {value}
    </button>
);

SizeButton.propTypes = {
    click: PropTypes.func,
    value: PropTypes.number,
    isClicked: PropTypes.string
};

export default SizeButton

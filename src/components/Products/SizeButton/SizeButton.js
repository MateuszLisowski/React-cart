import React from 'react';
import './SizeButton.css';

const SizeButton = ({ value, click, isClicked }) => (
    <button onClick={click} className={isClicked}>
            {value}
    </button>
);

export default SizeButton

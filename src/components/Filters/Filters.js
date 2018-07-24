import React, { Component } from 'react';
import './Filters.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Filters extends Component {
    render() {
        return (
            <div id='filtersWrapper'>
                <select value={this.props.selectedItem} onChange={(e) => this.props.onSelectChange(e.target.value)}>
                    <option disabled>Sort by price</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
                {this.props.filterButtons.map(object => {
                    return <button 
                        className={object.clicked ? 'sizeFilter clickedButton' : 'sizeFilter'} 
                        onClick={() => this.props.filterButtonClick(object.value)} 
                        key={object.value}> 
                        {object.value}
                    </button>
                })}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        selectedItem: state.selectedItem,
        filterButtons: state.filterButtons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectChange: (selectedItem) => dispatch({ type: actionTypes.SORT_PRODUCTS, selectedItem: selectedItem }),
        filterButtonClick: (clickedButton) => dispatch({ type: actionTypes.FILTER_PRODUCTS, clickedButton: clickedButton })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

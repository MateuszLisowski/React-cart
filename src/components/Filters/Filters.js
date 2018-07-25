import React, { Component } from 'react';
import './Filters.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import Select from './Select/Select';
import FilterButton from './FillterButton/FilterButton';

class Filters extends Component {
    render() {
        return (
            <div id='filtersWrapper'>
                <Select 
                    value={this.props.selectedItem} 
                    onChange={(e) => this.props.onSelectChange(e.target.value)}
                />
                {this.props.filterButtons.map(object => {
                    return <FilterButton 
                        className={object.clicked ? 'sizeFilter clickedButton' : 'sizeFilter'} 
                        onClick={() => this.props.filterButtonClick(object.value)} 
                        key={object.value}
                        value={object.value} />
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

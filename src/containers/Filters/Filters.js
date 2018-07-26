import React, { Component } from 'react';
import './Filters.css';
import { connect } from 'react-redux';
import Select from '../../components/Filters/Select/Select';
import FilterButton from '../../components/Filters/FillterButton/FilterButton';
import { onSelectChange, filterButtonClick } from '../../store/actions';

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
        onSelectChange: (selectedItem) => dispatch(onSelectChange(selectedItem)),
        filterButtonClick: (clickedButton) => dispatch(filterButtonClick(clickedButton))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

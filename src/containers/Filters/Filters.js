import React, { Component } from 'react';
import './Filters.css';
import { connect } from 'react-redux';
import Select from '../../components/Filters/Select/Select';
import FilterButton from '../../components/Filters/FillterButton/FilterButton';
import { onSelectChange, filterButtonClick } from '../../store/actions';
import PropTypes from 'prop-types';

export class Filters extends Component {
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


const mapStateToProps = state => ({
    filterButtons: state.filterButtons,
    selectedItem: state.selectedItem
});

const mapDispatchToProps = dispatch => ({
    onSelectChange: (selectedItem) => dispatch(onSelectChange(selectedItem)),
    filterButtonClick: (clickedButton) => dispatch(filterButtonClick(clickedButton))
});

Filters.propTypes = {
    onSelectChange: PropTypes.func.isRequired,
    filterButtonClick: PropTypes.func.isRequired,
    filterButtons: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedItem: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

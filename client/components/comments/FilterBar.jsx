import React, { Component } from 'react';
import styles from './FilterBar.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchText } from 'redux/modules/searchText/actions';

class FilterBar extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { setSearchText } = this.props;
        setSearchText(e.target.value);
    }

    render() {
        return <input className={styles.filter} type='text' placeholder='Filter' onChange={this.handleChange} />;
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ setSearchText }, dispatch);

export default connect(null, mapDispatchToProps)(FilterBar);
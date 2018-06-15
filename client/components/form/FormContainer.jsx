import React, { Component } from 'react';
import axios from 'axios';
import { API_BASE_URL } from 'config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLastUpdated } from 'redux/modules/lastUpdated/actions';
import PropTypes from 'prop-types';
import Form from './Form';

const initialState = {
    email: '',
    message: ''
}

class FormContainer extends Component {
    static propTypes = {
        setLastUpdated: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = initialState;

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(name, value) {
        this.setState({ [name]: value });
    }

    onSubmit(){
        axios.post(`${API_BASE_URL}/comments`, this.state)
            .then(() => this.setState(initialState, this.props.setLastUpdated));
    }

    render() {
        return <Form onSubmit={this.onSubmit} onChange={this.onChange} {...this.state} />;
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ setLastUpdated }, dispatch);

export default connect(null, mapDispatchToProps)(FormContainer);
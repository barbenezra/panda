import React, { Component } from 'react';
import styles from './Form.scss';
import PropTypes from 'prop-types';

export default class Form extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        email: PropTypes.string,
        message: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { onSubmit } = this.props;
        onSubmit();
    }

    handleChange = (e) => {
        const { onChange } = this.props;
        onChange(e.target.name, e.target.value);
    }

    render() {
        const { email, message } = this.props;

        return (<form className={styles.container} onSubmit={this.handleSubmit}>
            <input className={styles.input} type='text' name='email' placeholder='Email' value={email} onChange={this.handleChange} />
            <textarea className={styles.input} rows={3} name='message' placeholder='Message' value={message} onChange={this.handleChange} />
            <button className={styles.button} type='submit'>SUBMIT</button>
        </form>);
    }
}
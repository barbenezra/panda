import React, { Component } from 'react';
import md5 from 'utils/md5';
import styles from './Comment.scss'

export default class Comment extends Component {
    render() {
        const { email, message } = this.props;
        const hashedEmail = md5(email.trim().toLowerCase());

        return (<div className={styles.container}>
            <img className={styles.img} src={`https://www.gravatar.com/avatar/${hashedEmail}`} />
            <div className={styles.content}>
                <div className={styles.email}>{email}</div>
                <div className={styles.message}>{message}</div>
            </div>
        </div>);
    }
}
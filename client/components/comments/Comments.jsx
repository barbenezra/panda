import React, { Component } from 'react';
import Comment from './Comment';
import styles from './Comments.scss';

export default class Comments extends Component {
    render() {
        const { comments } = this.props;

        return (<div className={styles.container}>
            {comments.map(comment => <Comment key={comment.id} {...comment} />)}
            {!comments && <div>No messages to be displayed</div>}
        </div>);
    }
}
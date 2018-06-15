import React, { Component } from 'react';
import styles from './App.scss';
import FormContainer from 'form';
import CommentsContainer from 'comments';

class App extends Component {
    render() {
        return (<div className={styles.container}>
            <h1>bigpanda</h1>
            <FormContainer />
            <CommentsContainer />
        </div>)
    }
}

export default App;
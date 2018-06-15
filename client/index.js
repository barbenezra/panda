import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './redux';
import 'globals/global.scss';

render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './Src/store'; //Import the store
import Login from './Src/Pages/Login'; //Import the component file

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Login />
            </Provider>
        );
    }
}

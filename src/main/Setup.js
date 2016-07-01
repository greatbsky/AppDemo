'use strict';

import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import App from './Views/App'

export default class extends Component {
    constructor() {
        super();
        this.state = {
            store: createStore(reducers),
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>
        );
    }
}

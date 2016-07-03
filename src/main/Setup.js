'use strict';

import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import codePush from "react-native-code-push";

import App from './Views/App'

export default class extends Component {
    constructor() {
        super();
        var middlewares = [];
        if (process.env.NODE_ENV === `development`) { //Log only in development
            const logger = require(`redux-logger`)();
            middlewares.push(logger);
        }
        this.state = {
            store: createStore(reducers, applyMiddleware(...middlewares)),
        };
    }

    componentDidMount() {
        codePush.sync(); //If you are using Redux and Redux Saga, you can alternatively use the react-native-code-push-saga module, which allows you to customize when sync is called in simpler/more idiomatic way.
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>
        );
    }
}

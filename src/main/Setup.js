'use strict';

import React, { Component } from 'react';
import {
    AsyncStorage
} from 'react-native';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducers from './reducers';
import codePush from "react-native-code-push";

import initStore from './conf/InitStore';
import App from './views/App';
import Loading from './views/Loading';

export default class extends Component {
    constructor() {
        super();
        var middlewares = [];
        if (process.env.NODE_ENV === `development`) { //Log only in development
            const logger = require(`redux-logger`)();
            middlewares.push(logger);
        }
        this.state = {
            loading: true,
            store: createStore(reducers, initStore, compose(
                applyMiddleware(...middlewares),
                autoRehydrate(),
            )),
        };
        persistStore(this.state.store, {storage: AsyncStorage}, () => {this.setState({loading: false})});
    }

    componentDidMount() {
        codePush.sync(); //If you are using Redux and Redux Saga, you can alternatively use the react-native-code-push-saga module, which allows you to customize when sync is called in simpler/more idiomatic way.
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>
        );
    }
}

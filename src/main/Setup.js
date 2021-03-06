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
import thunk from 'redux-thunk';

import initStore from './conf/InitStore';
import App from './views/App';
import Welcome from './views/Welcome';

export default class extends Component {
    constructor() {
        super();
        var middlewares = [thunk];
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
        //codePush.sync(); //If you are using Redux and Redux Saga, you can alternatively use the react-native-code-push-saga module, which allows you to customize when sync is called in simpler/more idiomatic way.
    }

    render() {
        if (this.state.loading) {
            return <Welcome />
        }
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>
        );
    }
}

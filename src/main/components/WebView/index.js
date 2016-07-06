'use strict';

import React, { Component } from 'react';
import {
    View,
    WebView
} from 'react-native';

import styles from './style/index.css';

/**
*/
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props, {
            startInLoadingState: true,
            style: styles.webview
        });
    }

    render() {
        return (
            <View>
                <WebView startInLoadingState={this.state.startInLoadingState} source={{uri:this.state.url}} style={this.state.style} />
            </View>
        );
    }
}

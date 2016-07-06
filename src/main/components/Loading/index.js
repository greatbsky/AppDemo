'use strict';

import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

import styles from './style/index.css';

/**
*/
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props, {
            color: 'red',
        });
    }

    render() {
        return (
            <ActivityIndicator size="large" animating={true} style={styles.indicator} color={this.state.color} />
        );
    }
}

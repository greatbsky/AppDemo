'use strict';

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './style/index.css';

export default class extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
}

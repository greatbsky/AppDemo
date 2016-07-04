'use strict';

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                <Icon name="rocket" size={30} color="#900" />
                <Text>Loading...</Text>
            </View>
        );
    }
}

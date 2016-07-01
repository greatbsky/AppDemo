'use strict';

import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Button from '../../components/Button';
import styles from './style/index.css';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Button onPress={() => this.props.onLogin('great', '123')}>登录</Button>
            </View>
        );
    }
}

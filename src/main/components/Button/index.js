'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import styles from './style/index.css';

/**
<Button onPress={} style={} label={}>xxxx</Button>
*/
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props, {});
    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={[styles.button, this.props.style]}>
                    <Text style={styles.text}>
                        {this.props.children ? this.props.children : this.props.label}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

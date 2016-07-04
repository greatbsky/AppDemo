'use strict';

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import Video from 'react-native-video';

import styles from './style/index.css';

export default class extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Video style={{width: 400, height: 400}} source={{uri: "background"}} rate={1.0}  volume={1.0} muted={false} paused={false} resizeMode="cover" repeat={true} playInBackground={false} playWhenInactive={false} />
            </View>
        );
    }
}

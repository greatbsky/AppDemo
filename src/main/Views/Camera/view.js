'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import Camera from 'react-native-camera';

import styles from './style/index.css';

export default class extends Component {

    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
    }

    takePicture() {
        this.camera.capture().then((data) => console.log(data)).catch(err => console.error(err));
    }

    render() {
        return (
            <View>
                <Text onPress={this.takePicture}>拍照</Text>
                <Camera ref={(cam) => {this.camera = cam;}} style={{flex: 1,justifyContent: 'flex-end',alignItems: 'center',height: Dimensions.get('window').height,width: Dimensions.get('window').width}}
                    aspect={Camera.constants.Aspect.fill}>
                </Camera>
            </View>
        );
    }
}

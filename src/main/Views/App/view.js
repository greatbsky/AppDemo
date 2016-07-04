'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    BackAndroid
} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import Button from '../../components/Button';
import Camera from '../Camera';
import Video from '../Video';
import styles from './style/index.css';

export default class extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            //this.drawer && this.drawer.closeDrawer();
            return false;
        });
    }

    render() {
        return (
            <ScrollableTabView style={{marginTop: 20, }} renderTabBar={() => <DefaultTabBar />}>
                <Text tabLabel='Tab #1'>My</Text>
                <Text tabLabel='Tab #2'>favorite</Text>
                <Camera tabLabel='camera' />
                <Video tabLabel='video' />
                <View tabLabel='Tab #4'>
                    <Button onPress={() => this.props.onLogin('great', '123')}>
                        登录{this.props.loginCount}
                    </Button>
                </View>
            </ScrollableTabView>
        );
    }
}

'use strict';

import {
  StyleSheet
} from 'react-native';

import appConf from '../../../conf/AppConf';

export default StyleSheet.create({
    webview: {
        width: appConf.screen.width,
        height: appConf.screen.height - 60
    }
});

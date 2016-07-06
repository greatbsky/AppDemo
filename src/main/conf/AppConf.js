'use strict';

import {
    Dimensions,
    PixelRatio
} from 'react-native';

export default {
    appuid: 'aslkklwdilkklasdkfemlasdkjfdas',
    pixel: 1 / PixelRatio.get(), //单位像素
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
}

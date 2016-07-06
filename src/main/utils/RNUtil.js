'use strict';

//React native相关的util方法
export default class {

    /**
    获取位置
    */
    // static getGeoLocation() {
    //     /*navigator.geolocation.getCurrentPosition(
    //       (initialPosition) => {
    //         console.log(initialPosition.coords.latitude + "|" + initialPosition.coords.longitude);
    //         this.props.onGetCoords(initialPosition.coords.latitude, initialPosition.coords.longitude);
    //       },
    //       (error) => {alert(error)},
    //       {enableHighAccuracy: false, timeout: 60000, maximumAge: 1000}
    //   );*/
    // }

    //相册
    // static CameraRoll() {
    //     /*
    //     CameraRoll.getPhotos({first: 6}).done((data) => {
    //             console.log(data);
    //             this.setState({
    //               photoSource: {uri: data.edges[5].node.image.uri}
    //             })},(error) => {
    //             console.warn(error);
    //           });
    //           */
    // }

    static getData(k) { //todo...
        return await AsyncStorage.getItem(k);
    }

    static setData(k, v) { //todo...
        AsyncStorage.setItem(k, v);
    }

    static delData(k) { //todo...
        AsyncStorage.delItem(k);
    }
}

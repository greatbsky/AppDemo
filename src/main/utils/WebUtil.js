'use strict';

//Web相关的util方法
export default class {

    static get(url, successCB, failCB) { //web get method, request fetch
        var opt = {
            method: 'GET'
        };
        fetch(url, opt).then((response) => successCB(response.text())).catch((err) => failCB(err));
    }
    static getJSON(url, successCB, failCB) { //web getJSON method, request fetch
        var opt = {
            method: 'GET'
        };
        fetch(url, opt).then((response) => successCB(JSON.parse(response.text()))).catch((err) => failCB(err));
    }
    static post(url, data, successCB, failCB) { //web post method, request fetch
        var opt = {
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
            body: JSON.stringify(data)
        };
        fetch(url, opt).then((response) => successCB(JSON.parse(response.text()))).catch((err) => failCB(err));
    }

    // fetchWithTimeout (timeout, ...args) {
    //     return Promise.race([fetch(...args), delay(timeout)])
    // }
}

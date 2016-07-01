'use strict';

import A from '../consts/ActionTypes'

export default (state = {}, action) => {
    return Object.assign({}, state, reducer(state, action));
}
const reducer = (store, action) => {
    switch (action.type) {
        case A.login:
            return {
                isLogin: true
            };
        default:
            return state;
    }
}

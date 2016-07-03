'use strict';

import A from '../consts/ActionTypes';

export default (store = {}, action) => {
    switch (action.type) {
        case A.login:
            return {
                isLogin: true,
                loginCount: store.loginCount >= 0 ? store.loginCount + 1 : 0
            };
        default:
            return store;
    }
}

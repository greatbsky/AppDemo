'use strict';

import A from '../consts/ActionTypes'

export const login = (name, pwd) => {
    console.log(`name: ${name} pwd: ${pwd}`);
    return {
        type: A.login,
        name,
        pwd
    }
}
export const logout = (id) => {
    return {
        type: A.logout,
        id
    }
}

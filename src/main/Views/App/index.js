'use strict';

import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { connect } from 'react-redux';

import { login } from '../../actions';
import v from './view';

const mapStateToProps = (store) => {
    return store;
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (name, pwd) => dispatch(login(name, pwd));
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(v);

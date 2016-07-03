'use strict';

import {connect} from 'react-redux';

import {loginAsync} from '../../actions';
import v from './view';

const mapStateToProps = (store) => {
    console.log(store);
    return store.user;
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (name, pwd) => dispatch(loginAsync(name, pwd)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(v);

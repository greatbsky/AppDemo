'use strict';

import {connect} from 'react-redux';

import {loginAsync} from '../../actions';
import v from './view';

const mapStateToProps = (store) => {
    return store;
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(v);

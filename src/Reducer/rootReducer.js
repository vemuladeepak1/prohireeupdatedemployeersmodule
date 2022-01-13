
import { combineReducers } from 'redux';
// import { registerReducer } from './registerReducer';
// import { loginReducer } from './loginReducer';
// import changeReducer from './reducer';

import changeReducer from './changeReducer';

const rootReducer = combineReducers({
    auth:changeReducer,

});
export default rootReducer
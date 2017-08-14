import {combineReducers} from 'redux';
import filme from './filmeReducer';

const rootReducer = combineReducers({
    filme
});

export default rootReducer;
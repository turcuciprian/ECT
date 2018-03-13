import {combineReducers} from 'redux';
import layoutOrig from './original/layout';
import dateTimeOrig from './original/dateTime';
import layoutSel from './modifiers/layout';
import dateTimeSel from './modifiers/dateTime';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    dateTimeOrig: dateTimeOrig,
    layoutOrig: layoutOrig,
    layoutSel: layoutSel,
    dateTimeSel: dateTimeSel
});

export default allReducers;
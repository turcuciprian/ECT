import {combineReducers} from 'redux';
import layouts from './original/layout';
import layoutSel from './modifiers/layout';
import dateTime from './original/dateTime';
import dateTimeSel from './modifiers/dateTime';
import customTexts from './original/customTexts';
import newCustomTexts from './modifiers/customTexts';
import origStyle from './original/style';
import styleSel from './modifiers/style';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    dateTime: dateTime,
    layouts: layouts,
    dateTimeSel: dateTimeSel,
    layoutSel: layoutSel,
    customTexts: customTexts,
    newCustomTexts: newCustomTexts,
    origStyle: origStyle,
    styleSel: styleSel,
});

export default allReducers;
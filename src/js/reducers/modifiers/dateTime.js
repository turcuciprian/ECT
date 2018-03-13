export default function (state = null, action) {
    switch (action.type) {
        case 'SELECTED_DATE_TIME':
            return action.data;
            break;
    }
    return state;
}
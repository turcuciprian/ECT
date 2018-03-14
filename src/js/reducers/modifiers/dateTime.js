export default function (state = null, action) {
    switch (action.type) {
        case 'DATE_SELECTED':
            return action.payload;
            break;
    }
    return state;
}
export default function (state = null, action) {
    switch (action.type) {
        case 'SELECTED_LAYOUT':
            return action.data;
            break;
    }
    return state;
}
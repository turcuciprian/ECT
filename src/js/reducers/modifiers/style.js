export default function (state = null, action) {
        switch (action.type) {
        case 'STYLE_CHANGED':
            return action.payload;
            break;
    }
    return state;
}
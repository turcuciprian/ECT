export default function (state = null, action) {
        switch (action.type) {
        case 'CUSTOM_TXT_CHANGED':
            return action.payload;
            break;
    }
    return state;
}
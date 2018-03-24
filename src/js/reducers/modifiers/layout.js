export default function (state = null, action) {
    switch (action.type) {
        case 'SELECTED_LAYOUT':
        console.log(action.payload);
        
            return action.payload;
            break;
    }
    return state;
}

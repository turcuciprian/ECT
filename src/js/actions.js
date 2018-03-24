
export const selectDate = (date) => {
        return {
        type: 'DATE_SELECTED',
        payload: date
    }
};

export const changeLayout = (layout) => {
    return {
        type: 'SELECTED_LAYOUT',
        payload: layout
    }
};
export const changeCustomText = (newTexts) =>{
    return {
        type:'CUSTOM_TXT_CHANGED',
        payload:newTexts
    }
}
export const changeStyle = (newStyle) =>{
    return {
        type:'STYLE_CHANGED',
        payload:newStyle
    }
}

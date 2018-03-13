
export const selectDate = (date) => {
    return {
        type: 'DATE_SELECTED',
        payload: date
    }
};

export const selectLayout = (layout) => {
    return {
        type: 'LAYOUT_SELECTED',
        payload: layout
    }
};
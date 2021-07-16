const counterReducer = (state = 0, action) => {
    const payload = action.payload ? action.payload : 1; 
    switch(action.type){
        case 'INCREASEMENT':
            return state + payload;
        case 'DESCREASEMENT':
            return state - payload;
        default:
            return state;
    }
}

export default counterReducer;
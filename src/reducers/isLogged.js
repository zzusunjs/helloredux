const LoggedReducer = (state=false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return true;
        case 'TOGGLE_LOGIN':
            return !state; 
        default:
            return false;
    }
}

export default LoggedReducer;
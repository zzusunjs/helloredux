export const increasement  = (parameter) => {
    return {
        type: 'INCREASEMENT',
        payload: parameter
    }
}

export const descreasement = (parameter) => {
    return {
        type: 'DESCREASEMENT',
        payload: parameter
    }
}

export const toggleLogIn = () => {
    return {
        type: 'TOGGLE_LOGIN'
    }
}
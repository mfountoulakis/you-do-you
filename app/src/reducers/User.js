import firebase from '../firebase';

const initialState = {
    authorized: false
}

const User = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_AUTHORIZING':
            return Object.assign({}, state, {
                username: action.username,
                authorizing: true
            });
        case 'USER_AUTHORIZED':
            return Object.assign({}, state, {
                username: action.username,
                authorizing: false,
                authorized: true
            });
        case 'SIGNUP_ERROR':
            return Object.assign({}, state, {
                authorizing: false,
                error: action.error
            });

        default:
            return state
    }
}

export default User;

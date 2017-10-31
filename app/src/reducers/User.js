import firebase from '../firebase';

const initialState = {
    authorized: false
}

const User = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_AUTHORIZING':
            return Object.assign({}, state, {
                authorizing: true
            });
        case 'USER_AUTHORIZED':
            return Object.assign({}, state, {
                authorizing: false,
                authorized: true
            });
        default:
            return state
    }
}

export default User;

import { combineReducers } from 'redux';
import affirmation from './Affirmation';

const initialState = {
    isFetching: false,
}

const meta = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_AFFIRMATIONS':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'RECEIVED_AFFIRMATIONS':
            return Object.assign({}, state, {
                isFetching: false,
                lastFetched: action.receivedAt
            });
        default:
            return state
    }
}

const affirmationList = combineReducers({
    affirmation,
    meta
});

export default affirmationList;
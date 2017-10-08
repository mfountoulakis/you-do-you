import { combineReducers, createStore } from "redux";

import affirmationList from './AffirmationList';

const rootReducer = combineReducers({
    affirmationList
});

export default rootReducer;

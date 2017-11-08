import { combineReducers, createStore } from "redux";

import affirmationList from './AffirmationList';
import User from './User'

const rootReducer = ({
    affirmationList,
    User
});

export default rootReducer;

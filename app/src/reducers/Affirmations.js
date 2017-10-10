import firebase from '../firebase';

const affirmation = (state, action) => {
    switch (action.type) {
        case 'ADD_AFFIRMATION':
            console.log("ACTION.AFFIRMATIOM ", action.affirmation, state);
            return {
                affirmation: action.affirmation
            }
        default:
            return state
    }
}

const affirmations = (state = [], action) => {
    switch (action.type) {
        case 'ADD_AFFIRMATION':
            if (state.map(m => m.affirmation).includes(action.affirmation)) {
                return state;
            } else {
                return [
                ...state,
                affirmation(undefined, action)
                ]
            }

        default:
            return state
    }
};


export default affirmations;

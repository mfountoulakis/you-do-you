import firebase from '../firebase';

const affirmation = (state, action) => {
    switch (action.type) {
        case 'ADD_AFFIRMATION':
            return {
                id: action.affirmation.id,
                affirmation: action.affirmation,
                time: action.affirmation.time
            }
        default:
            return state
    }
};

const affirmations = (state = [], action) => {
    switch (action.type) {
        case 'ADD_AFFIRMATION':
            // check for duplicate AffirmationItems
            if (state.map(m => m.id).includes(action.affirmation.id)) {
                return state;
            } else {
                return [
                    ...state,
                    affirmation(undefined, action)
                ]
            }
        case 'SUBMIT_AFFIRMATION':
            return [
                ...state,
                affirmation(undefined, action)
            ]
        case 'REMOVE_AFFIRMATION':
            console.log("action.affirmation.id ", action.affirmation.id)
            console.log("action ", action)
            
            return state.filter(affirmations => {
                return action.id !== action.affirmation.id;
            });
        default:
            return state
    }
};


export default affirmations;

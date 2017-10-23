import firebase from '../firebase';

const affirmation = (state, action) => {
    switch (action.type) {
        case 'ADD_AFFIRMATION':
            return {
                id: action.affirmation.id,
                affirmation: action.affirmation,
                time: action.affirmation.time,
                isEditing: false
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
                return state
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
            return state.filter(affirmation => {
                return affirmation.id !== action.affirmation.id;
            });

        case 'EDIT_AFFIRMATION':
            return state.map(affirmation =>
                affirmation.id === action.affirmation.id ?
                    Object.assign({}, affirmation, { isEditing: true }) : affirmation
            )
        default:
            return state
    }
};


export default affirmations;

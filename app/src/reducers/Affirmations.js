import firebase from '../firebase';

const affirmation = (state, action) => {
    switch (action.type) {
        case 'ADD_AFFIRMATION':
            return {
                id: action.affirmation.id,
                affirmation: action.affirmation.affirmation,
                time: action.affirmation.time,
                isEditing: false,
                fire_date: action.fire_date
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
                return affirmation.id !== action.id;
            });

        case 'EDIT_AFFIRMATION':
            return state.map(affirmation =>
                affirmation.id === action.id ?
                    Object.assign({}, affirmation, { isEditing: action.isEditing }) : affirmation
            )
        case 'UPDATE_AFFIRMATION':
            return state.map(affirmation =>
                affirmation.id === action.id ?
                    Object.assign({}, affirmation, { affirmation: action.affirmation, isEditing: false }) : affirmation
            )

        case 'SCHEDULE_AFFIRMATION':
            console.log("ACTION DATE ", action.date)
            return state.map(affirmation =>
                affirmation.id === action.id ?
                    Object.assign({}, affirmation, { fire_date: action.fire_date }) : affirmation
            )
        default:
            return state
    }
};


export default affirmations;

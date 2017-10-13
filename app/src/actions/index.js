import firebase from '../firebase';

//boot actions
export const startFetchingMessages = () => ({
    type: 'FETCH_AFFIRMATIONS'
});

export const receivedAffirmations = () => ({
    type: 'RECEIVED_AFFIRMATIONS',
    receivedAt: Date.now()
});

export const addAffirmation = (affirmation) => ({
    type: 'ADD_AFFIRMATION',
    affirmation
});

export const remove = (affirmation) => ({
    type: 'REMOVE_AFFIRMATION',
    affirmation,
    isDeleting: true
    
});

export const removeAffirmation = (affirmation) => {
    return function (dispatch) {
        dispatch(remove(affirmation));
        const AffirmationsRef = firebase.database()
            .ref(`affirmations/${affirmation.id}`)
            .remove()
            .then(snapshot => {
                return

            }, error => {
                alert(JSON.stringify(error.message));
            });


    }
}


export const submitAffirmation = (text) => {
    return function (dispatch) {
        let affirmation = {
            affirmation: text,
            time: Date.now()
        }

        const AffirmationsRef = firebase.database()
            .ref('affirmations')
            .push();

        affirmation.id = AffirmationsRef.key;
        AffirmationsRef.set(affirmation);

        dispatch(addAffirmation(affirmation));
    }
}

export const fetchMessages = () => {
    return function (dispatch) {
        dispatch(startFetchingMessages());

        firebase.database()
            .ref('affirmations')
            .on('value', (snapshot) => {
                // gets around Redux panicking about actions in reducers
                setTimeout(() => {
                    const affirmations = snapshot.val() || [];

                    dispatch(receiveAffirmations(affirmations))
                }, 0);
            });
    }
}

export const receiveAffirmations = (affirmations) => {
    return function (dispatch) {
        Object.values(affirmations).forEach(affirmation => dispatch(addAffirmation(affirmation)));

        dispatch(receivedAffirmations());
    }
}
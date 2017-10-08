import firebase from '../firebase';

//boot actions
export const startFetchingMessages = () => ({
    type: 'FETCH_AFFIRMATIONS'
});

export const receivedAffirmations = () => ({
    type: 'RECEIVED_AFFIRMATIONS',
    receivedAt: Date.now()
});

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
        // Object.values(affirmations).forEach(affirmation => dispatch(addAffirmation(affirmation)));
        dispatch(receivedAffirmations());
    }
}
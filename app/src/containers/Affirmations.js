//either show AffirmationList or something else
import React from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard
} from 'react-native';

import AffirmationList from '../components/AffirmationList';

const mapStateToProps = (state) => ({
    isFetching: state.affirmationList.meta.isFetching
});

const Affirmations = connect(
    mapStateToProps
)(({ affirmations, isFetching, dispatch }) => {
    if (isFetching) {
        return (
           <Text>Loading Some Data</Text>
        )
    } else {
        return <AffirmationList affirmations={affirmations}/>
    }
});

export default Affirmations;


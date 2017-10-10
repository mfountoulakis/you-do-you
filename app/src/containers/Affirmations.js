//either show AffirmationList or something else
import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Spinner } from 'native-base';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard
} from 'react-native';

import AffirmationList from '../components/AffirmationList';

const mapStateToProps = (state) => ({
    isFetching: state.affirmationList.meta.isFetching,
    affirmations: state.affirmationList.affirmations
});

const Affirmations = connect(
    mapStateToProps
)(({ affirmations, isFetching, dispatch }) => {
    if (isFetching) {
        return (
            <View>
                <Spinner />
            </View>
        )
    } else {
        return (
            <AffirmationList affirmations={affirmations} />
        )
    }

});

export default Affirmations;



import React, { Component } from 'react';
import { Input } from 'native-base';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard
} from 'react-native';

// import { Input } from 'native-base';
import TextInput from '../containers/TextInput'
import Affirmations from '../containers/Affirmations'

class AffirmationInput extends Component {

    sendMessage() {
        alert('hi');
    }

    render() {
        return (
            <View style={styles.container}>
                <Input style={styles.input} placeholder="Say Something Nice" submitAction={this.sendMessage} />
                < Affirmations />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        height: 10
    },
    input: {
    }
})

export default AffirmationInput;

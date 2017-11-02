
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, List, Input } from 'native-base';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// import { Input } from 'native-base';
import TextInput from '../containers/TextInput'
import Affirmations from '../containers/Affirmations'

import { submitAffirmation } from '../actions';

class AffirmationInput extends Component {
    submitAffirmation = (text) => {
        return submitAffirmation(text)
    }

    render() {
        return (
            <Content padder>
                <View>
                    <TextInput
                        style={styles.mainInput}
                        placeholder="Say Something Nice"
                        submitAction={this.submitAffirmation}
                    />
                    < Affirmations navigator={this.props.navigator} style={{ backgroundColor: "transparent" }} />
                </View>
            </ Content>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        marginTop: 20,
    },
    mainInput: {
        fontSize: 30
    }
});

export default AffirmationInput;

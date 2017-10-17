
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
            <Container>
                <Content>
                    <LinearGradient colors={['#aa4cf9', '#9785f4', '#91adc5']} style={styles.linearGradient}>
                        <View style={styles.container}>
                            <TextInput style={styles.input}
                                placeholder="Say Something Nice"
                                submitAction={this.submitAffirmation}
                            />
                            < Affirmations style={{ backgroundColor: "transparent" }} />
                        </View>
                    </LinearGradient>
                </ Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default AffirmationInput;

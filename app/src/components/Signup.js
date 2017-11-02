import React, { Component } from 'react';
import { Container, Spinner, Button, Header, Content, Form, Item, Label, Input } from 'native-base';
import SignupForm from '../containers/SignupForm';
import { AffirmationList } from '../components/AffirmationList';
import LinearGradient from 'react-native-linear-gradient';

import { signUp } from '../actions';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    TextInput
} from 'react-native';


class Signup extends Component {
    t = (username, password) => {
        return signUp(username, password);

    }
    render() {
        return (
            <LinearGradient colors={['#aa4cf9', '#9785f4', '#91adc5']} style={styles.container}>
                <Container>
                    <Header />
                    <Content padder>
                        <SignupForm
                            navigator={this.props.navigator}
                            submitAction={this.t}
                        />
                    </Content>
                </Container>
            </LinearGradient>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default Signup;
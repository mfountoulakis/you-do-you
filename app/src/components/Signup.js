import React, { Component } from 'react';
import { Container, Spinner, Button, Header, Content, Form, Item, Label, Input } from 'native-base';
import SignupForm from '../containers/SignupForm';
import { AffirmationList } from '../components/AffirmationList';

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
            <Container>
                <Header />
                <Content>
                    <SignupForm
                        submitAction={this.t}
                    />
                </Content>
            </Container>
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
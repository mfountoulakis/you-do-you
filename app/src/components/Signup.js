import React, { Component } from 'react';
import { Container, Spinner, Button, Header, Content, Form, Item, Label, Input } from 'native-base';
import SignupInput from '../containers/SignupInput';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    TextInput
} from 'react-native';

class Signup extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <SignupInput />
                    </Form>
                </Content>
            </Container>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

export default Signup;
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    TextInput
} from 'react-native';

import { Container, Spinner, Button, Header, Content, Form, Item, Input, Label } from 'native-base';

class SignupContainer extends Component {

    state = {
        username: '',
        password: '',
        error: '',
        loggingIn: false
    }

    changeUsername = (username) => {
        this.setState({
            username
        });
    }

    changePassword = (password) => {
        this.setState({
            password
        });
    }

    onSubmitEditing = () => {
        console.log("this.state ", this.state)
        // this.props.dispatch(
        //     this.props.submitAction(this.state.text)
        // );
        // if (!this.props.noclear) {
        //     this.setState({
        //         text: null
        //     });
        // }
    }

    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Header />
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input
                                    onChangeText={this.changeUsername}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    blurOnSubmit
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input
                                    onChangeText={this.changePassword}
                                    onSubmitEditing={this.onSubmitEditing()}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    blurOnSubmit
                                />
                            </Item>
                            <Button block onPress={this.submit}>
                                {this.state.loggingIn ? <Spinner /> : <Text>LOGIN</Text>}
                            </Button>
                        </Form>
                    </Content>
                </Container>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',

    },
    input: {
        alignSelf: 'stretch',
        // marginLeft: 0
    }
});

export default SignupContainer;
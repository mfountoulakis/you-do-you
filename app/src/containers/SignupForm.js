import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Spinner, Button, Header, Content, Form, Item, Input, Label } from 'native-base';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    TextInput
} from 'react-native';
import { signUp } from '../actions';
import AffirmationInput from '../components/AffirmationInput';
import Affirmations from './Affirmations';

class SignupForm extends Component {
    state = {
        username: '',
        password: '',
        error: '',
        authorizing: false,
        authorized: false,
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
        this.props.dispatch(
            this.props.submitAction(this.state.username, this.state.password)
        );
    }
    render() {

        let authorized = this.props.authorized
        let authorizing = this.props.authorizing
        let error = this.props.error

        if (authorized) {
            return (
                <View style={styles.container}>
                    <AffirmationInput navigator={this.props.navigator}
                    />
                </View>
            )
        }
        else if (authorizing) {
            return (
                <View style={styles.container}>
                    <Spinner color='blue' />
                </View>
            )
        }
        else {
            return (
                <Form>
                    <Item floatingLabel>
                        <Label style={{color: "white"}}>Username</Label>
                        <Input
                            style={{color: 'white'}}
                            onChangeText={this.changeUsername}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Label style={{color: "white"}}>Password</Label>
                        <Input
                            style={{color: 'white'}}
                            onChangeText={this.changePassword}
                            secureTextEntry
                            autoCapitalize="none"
                            autoCorrect={false}
                            blurOnSubmit
                        />
                    </Item>
                    <Button style={{marginTop: 40}} light block onPress={() => this.onSubmitEditing()}>
                        <Text>Sign Up</Text>
                    </Button>

                    <Text style={styles.Error}>{error}</Text>

                </Form>

                

            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    inputPlaceholder: {
        color: 'white'
    },
    Error:{
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
        marginTop: 30

    }
});

const mapStateToProps = (state) => {
    return {
        username: state.User.username,
        authorized: state.User.authorized,
        authorizing: state.User.authorizing,
        error: state.User.error

    }
}


export default connect(mapStateToProps)(SignupForm);

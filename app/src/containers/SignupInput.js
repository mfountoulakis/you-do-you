import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    TextInput
} from 'react-native';

import { Container, Spinner, Button, Header, Content, Form, Item, Input, Label } from 'native-base';
import { signUp } from '../actions';
import AffirmationList from '../components/AffirmationList';

class SignupInput extends Component {

    constructor(props) {
        super(props);
        state = {
            username: '',
            password: '',
            error: '',
            authorizing: false,
            authorized: false,
            loggingIn: false
        }
    }

    changeUsername = (username) => {
        this.setState({
            username
        });
        console.log(this.props)
    }

    changePassword = (password) => {
        this.setState({
            password
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log("received props")
        this.props.navigator.push(nextRoute)

        const nextRoute = {
            component: AffirmationList,
            title: 'Bar That',
            passProps: { myProp: 'bar' }
        };

    }

    // componentDidMount(){
    //     console.log("PROPPPZZZ ", this.props)
    // }

    onSubmitEditing = () => {
        this.props.dispatch(
            signUp(this.state.username, this.state.password)
        );
    }


    render() {
        return (
            <Item floatingLabel last>
                <Label>Password</Label>
                <Input
                    onChangeText={this.changePassword}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    blurOnSubmit
                />
            </Item>
        )
    }
}

const styles = StyleSheet.create({

});

export default connect()(SignupInput);

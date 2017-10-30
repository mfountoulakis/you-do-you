import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Icon, ListItem } from 'native-base';
import { Input, Button } from 'native-base';
import SignupContainer from '../containers/SignupContainer';

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
            <View style={styles.container}>
                <SignupContainer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
    }
});

export default Signup;
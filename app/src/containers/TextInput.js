import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Input, Button } from 'native-base';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard
} from 'react-native';

class TextInput extends Component {

    state = {
        text: null
    }

    onChangeText = text => this.setState({ text: text });

    onSubmitEditing = () => {
        console.log("submit text state ", this.state.text)
        this.props.dispatch(
            this.props.submitAction(this.state.text)
        );
        if (!this.props.noclear) {
            this.setState({
                text: null
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder={this.props.placeholder}
                    onChangeText={this.onChangeText}
                    value={this.state.text}
                />

                <Button bordered warning onPress={() => this.onSubmitEditing()}>
                    <Text>Warning</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        marginTop: 40
    }
});

export default connect()(TextInput);

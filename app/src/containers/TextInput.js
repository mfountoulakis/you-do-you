import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Input } from 'native-base';

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
                    onSubmitEditing={this.onSubmitEditing}
                    value={this.state.text}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 90
    }
});

export default connect()(TextInput);

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
        text: this.props.affirmation
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
        console.log("isEditing from text input ", this.props.isEditing)
        const isEditing = this.props.isEditing
        const submitButton = (
            <Button bordered light block style={styles.submitButton} onPress={() => this.onSubmitEditing()}>
                <Text>Submit</Text>
            </Button>
        )

        const disabledSubmit = (
            <Button block style={styles.submitButton} disabled>
                <Text>Disabled</Text>
            </Button>
        )

        const editingComponent = (
            <View style={styles.container}>
                <Input
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    onChangeText={this.onChangeText}
                    value={this.state.text}
                />
                {this.state.text ? submitButton : disabledSubmit}
            </View>
        )

        const ListItemComponent = (
            <View style={styles.container}>
                <Input
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    onChangeText={this.onChangeText}
                    value={this.state.text}
                />
                {this.state.text ? submitButton : disabledSubmit}
            </View>
        )

        return (

            <View>
                {isEditing ? editingComponent : ListItemComponent}
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

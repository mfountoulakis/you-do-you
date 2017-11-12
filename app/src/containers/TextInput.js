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
        const isEditing = this.props.isEditing
        submitButton = () => {
            if (this.state.text && isEditing) {
                return (
                    <View>
                        <Button bordered light style={styles.submitButtonEditing} onPress={() => this.onSubmitEditing()}>
                            <Text style={{ color: "white" }}>Submit</Text>
                        </Button>
                    </View>
                )
            } else {
                return (
                    <View>
                        <Button bordered light block style={styles.submitButton} onPress={() => this.onSubmitEditing()}>
                            <Text style={{ color: "white" }}>Submit</Text>
                        </Button>
                    </View>
                )
            }
        }

        const disabledSubmit = (
            <Button bordered danger block style={styles.submitButton} >
                <Text style={{ color: "red" }}>Disabled</Text>
            </Button>
        )

        const editingComponent = (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Input
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    onChangeText={this.onChangeText}
                    value={this.state.text}
                />
                {submitButton()}
            </View>
        )

        const ListItemComponent = (
            <View style={styles.container}>
                <Input
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    onChangeText={this.onChangeText}
                    value={this.state.text}
                />
                {submitButton()}
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
    },
    input: {
        color: "white",
        fontSize: 20,
        flexDirection: 'row'
    },
    submitButtonEditing: {
        padding: 10
    }
});

export default connect()(TextInput);
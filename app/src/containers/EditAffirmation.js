import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Icon, ListItem } from 'native-base';

import { connect } from 'react-redux';

import { Input, Button } from 'native-base';
import { submitAffirmationUpdate } from '../actions';

import Swipeout from 'react-native-swipeout';

import TextInput from './TextInput';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard
} from 'react-native';


class EditAffirmation extends Component {
    submitAffirmationUpdate = (affirmation) => {
        return submitAffirmationUpdate(affirmation, this.props.affirmation.id)
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    isEditing={this.props.isEditing}
                    affirmation={this.props.affirmation.affirmation}
                    placeholder={this.props.affirmation.affirmation}
                    submitAction={this.submitAffirmationUpdate}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
        // height: 90,
        // marginTop: 40
    },
    input: {
        // flexDirection: 'row',
        // marginLeft: 0
    }
});

export default connect()(EditAffirmation);

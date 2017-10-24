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
            <TextInput style={styles.input}
                isEditing ={this.props.isEditing}
                affirmation={this.props.affirmation.affirmation}
                placeholder={this.props.affirmation.affirmation}
                submitAction={this.submitAffirmationUpdate}
            />
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: 90,
        marginTop: 40
    },
    ListItem: {
        backgroundColor: "transparent",
        marginLeft: 0
    }
});


export default connect()(EditAffirmation);

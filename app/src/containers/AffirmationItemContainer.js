import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Icon, ListItem } from 'native-base';

import { connect } from 'react-redux';

import { Input, Button } from 'native-base';
import Swipeout from 'react-native-swipeout';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard
} from 'react-native';


class AffirmationItemContainer extends Component {
    state = {
        isEditing: false
    }

    TogglEditAffirmation = () => {
        this.props.dispatch(
            this.props.TogglEditAffirmation(this.props)
        );
    }

    removeAffirmation = () => {
        console.log("props from affirmationitemcontainer ",  this.props)
        this.props.dispatch(
            this.props.removeAffirmation(this.props.affirmation)
        );
    }

    render(affirmation) {
        let swipeoutBtns = [
            {
                text: 'Edit',
                backgroundColor: 'yellow',
                onPress: () => {
                    this.TogglEditAffirmation();    
                }
            },

            {
                text: 'Remove',
                backgroundColor: 'red',
                onPress: () => {
                    this.removeAffirmation();   
                }
            },
            {
                text: 'Button2',
                backgroundColor: 'green',
                onPress: () => { this._onForward(nextRoute) }
            }
        ]

        return (
            <Swipeout autoClose={true} right={swipeoutBtns}>
                <ListItem style={styles.ListItem}>
                    <Text style={{ color: "black" }}>{this.props.affirmation.affirmation}</Text>
                </ListItem>
            </ Swipeout >
        );
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


export default connect()(AffirmationItemContainer);

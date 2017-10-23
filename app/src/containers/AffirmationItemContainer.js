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
    togglEditAffirmation = () => {

        this.props.dispatch(
            this.props.togglEditAffirmation(this.props.affirmation)
        );
    }

    removeAffirmation = () => {
        console.log("props from affirmationitemcontainer ", this.props)
        this.props.dispatch(
            this.props.removeAffirmation(this.props.affirmation)
        );
    }

    componentWillReceiveProps(nextProps) {
    }

    render(affirmation) {
        const isEditing = this.props.isEditing
        console.log(this.props.isEditing)
        let swipeoutBtns = [
            {
                text: 'Edit',
                backgroundColor: 'yellow',
                onPress: () => {
                    this.togglEditAffirmation();
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

        const editingComponet = (
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <Text>EDITING . . .</Text>
            </ View>
        )

        const ListItemComponent = (
            <Text style={{ color: "white" }}>{this.props.affirmation.affirmation}</Text>
        )

        return (
            <Swipeout autoClose={true} right={swipeoutBtns}>
                <ListItem style={styles.ListItem}>
                    {isEditing ? editingComponet : ListItemComponent}
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

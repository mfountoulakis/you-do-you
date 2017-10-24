import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Icon, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { Input, Button } from 'native-base';
import Swipeout from 'react-native-swipeout';
import EditAffirmation from "./EditAffirmation"

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

    togglEditAffirmation = () => {
        this.props.dispatch(
            this.props.togglEditAffirmation(this.props.affirmation)
        );
    }

    removeAffirmation = () => {
        this.props.dispatch(
            this.props.removeAffirmation(this.props.affirmation)
        );
    }

    componentWillReceiveProps(nextProps) {
        console.log("received some new props ", nextProps.isEditing)
        const isEditing = nextProps.isEditing
        this.setState({
            isEditing: nextProps.isEditing
        });
    }

    render(affirmation) {
        const isEditing = this.state.isEditing
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
            <EditAffirmation isEditing={this.props.isEditing} affirmation={this.props.affirmation} />
        )

        const ListItemComponent = (
            <Text style={{ color: "white" }}>{this.props.affirmation.affirmation}</Text>
        )

        return (
            <Swipeout style={styles.ListItem} autoClose={true} right={swipeoutBtns}>
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

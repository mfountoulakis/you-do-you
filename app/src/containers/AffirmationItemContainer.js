import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Icon, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { Input, Button } from 'native-base';
import Swipeout from 'react-native-swipeout';
import EditAffirmation from "./EditAffirmation"
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm';

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

    _onForward() {
        this.props._onForward(this.props.affirmation)
    }

    componentWillReceiveProps(nextProps) {
        const isEditing = nextProps.isEditing
        this.setState({
            isEditing: nextProps.isEditing
        });

        const date = nextProps.affirmation.fire_date

        if (nextProps.affirmation.fire_date !== undefined) {
            FCM.scheduleLocalNotification({
                fire_date: date,
                id: "UNIQ_ID_STRING",
                body: nextProps.affirmation.affirmation,
                repeat_interval: "week",
                show_in_foreground: true
            })
        }


    }

    render(affirmation) {
        const isEditing = this.state.isEditing
        let swipeoutBtns = [
            {
                text: 'Edit',
                backgroundColor: '#F99945',
                onPress: () => {
                    this.togglEditAffirmation();
                }
            },

            {
                text: "Schedule",
                backgroundColor: '#F46959',
                onPress: () => {
                    this._onForward()
                }

            },
            {
                text: "Remove",
                backgroundColor: '#EE2A74',
                onPress: () => {
                    this.removeAffirmation();
                },            
            }
        ]

        const editingComponet = (
            <EditAffirmation isEditing={this.props.isEditing} affirmation={this.props.affirmation} />
        )

        const ListItemComponent = (
            <Text style={{ color: "white", fontSize: 30 }}>{this.props.affirmation.affirmation}</Text>
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
    },
});


export default connect()(AffirmationItemContainer);

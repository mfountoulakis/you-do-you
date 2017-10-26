import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Button, Icon, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { removeAffirmation, togglEditAffirmation } from '../actions';
import AffirmationItemContainer from '../containers/AffirmationItemContainer';
import LinearGradient from 'react-native-linear-gradient';
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm';

import moment from 'moment'
import { scheduleAffirmation } from '../actions';


import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    ListView,
    DatePickerIOS
} from 'react-native';


class DatePickerContainer extends Component {



    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    onSubmitEditing = () => {
        this.props.dispatch(
            scheduleAffirmation(this.props.affirmation.id, this.state.date)
        );
    }


    render() {
        return (
            <LinearGradient colors={['#aa4cf9', '#9785f4', '#91adc5']} style={styles.container}>
                <Content padder>
                    <DatePickerIOS
                        date={this.state.date}
                        mode="time"
                        onDateChange={(date) => this.setState({ date: date })}
                    />
                    {/* <List style={styles.affirmationSchedule}>
                        <ListItem>
                            <Text style={{ color: "white" }}>{this.props.affirmation.affirmation}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>
                    </List> */}
                    <Button bordered light block style={styles.submitButton} onPress={() => this.onSubmitEditing()}>
                        <Text style={{ color: "white" }}>Submit</Text>
                    </Button>
                </Content>
            </LinearGradient>



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
    },
    submitButton: {
        color: "white"
    }
});

export default connect()(DatePickerContainer);
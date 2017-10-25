import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Button, Icon, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { removeAffirmation, togglEditAffirmation } from '../actions';
import AffirmationItemContainer from '../containers/AffirmationItemContainer';
import LinearGradient from 'react-native-linear-gradient';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';

import moment from 'moment'


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
            //hide datepicker initially until button is pressed
            date: new Date(),
            // hour: moment(this.date).format('LT'),
            timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
        };
    }

    onSubmitEditing = () => {
        console.log("THIS.STATE ", this.state)
        FCM.scheduleLocalNotification({
            fire_date: this.state.date,      //RN's converter is used, accept epoch time and whatever that converter supports
            id: "UNIQ_ID_STRING",    //REQUIRED! this is what you use to lookup and delete notification. In android notification with same ID will override each other
            body: `fired at ${this.state.date}`,
            repeat_interval: "week",//day, hour
            show_in_foreground: true
        })

    }

    render() {
        return (
            <LinearGradient colors={['#aa4cf9', '#9785f4', '#91adc5']} style={styles.container}>
                <Content padder>
                    <DatePickerIOS
                        date={this.state.date}
                        mode="time"
                        timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                        onDateChange={(date) => this.setState({ date: date })}                
                    />
                    
                    <Text>{this.props.affirmation.affirmation}</Text>
                    <Button
                        block
                        style={styles.submitButton}
                        onPress={() => this.onSubmitEditing()}
                    >
                        <Text>Submit</Text>
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
    }
});

export default connect()(DatePickerContainer);
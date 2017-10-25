import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Button, Icon, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { removeAffirmation, togglEditAffirmation } from '../actions';
import AffirmationItemContainer from '../containers/AffirmationItemContainer';
import LinearGradient from 'react-native-linear-gradient';
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


class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //hide datepicker initially until button is pressed
            date: new Date(),
            hour: moment(this.date).format('LT'),
            timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
        };
    }

    render() {
        return (
            <DatePickerIOS
                date={this.state.date}
                mode="time"
                timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                onDateChange={(date) => this.setState({ date: date })}
            />
        )
    }
}


export default DatePicker;
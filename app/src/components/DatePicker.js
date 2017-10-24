import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Button, Icon, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { removeAffirmation, togglEditAffirmation } from '../actions';
import AffirmationItemContainer from '../containers/AffirmationItemContainer';
import LinearGradient from 'react-native-linear-gradient';


import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    ListView,
} from 'react-native';


class DatePicker extends Component{
    render(){
        return(
            <Text>DATEPICKER</Text>
        )
    }
}

export default DatePicker;
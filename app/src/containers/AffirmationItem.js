import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Icon, ListItem } from 'native-base';

import { connect } from 'react-redux';
import { Input, Button } from 'native-base';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard
} from 'react-native';

class AffirmationItem extends Component {
    render() {
        return (
            <ListItem style={ styles.ListItem }>
                <Text style = {{ color: "white" }}>{this.props.affirmation}</Text>
            </ListItem>
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


export default connect()(AffirmationItem);

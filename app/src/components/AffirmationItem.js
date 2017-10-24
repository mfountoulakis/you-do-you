
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, ListItem, Button, Left, Right, Body, Icon, Item, List, Input } from 'native-base';
import { removeAffirmation, togglEditAffirmation } from '../actions';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// import { Input } from 'native-base';
import TextInput from '../containers/TextInput'
import AffirmationItemContainer from '../containers/AffirmationItemContainer'


class AffirmationItem extends Component {
    
    togglEditAffirmation = (affirmation) => {
        return togglEditAffirmation(affirmation, affirmation.id)
    }
    
    render() {
        return(
            <AffirmationItemContainer 
                affirmation={this.props.affirmation}
                togglEditAffirmation = { this.togglEditAffirmation }
            />
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default AffirmationItem;

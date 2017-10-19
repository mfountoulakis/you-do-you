import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Button, Icon, ListItem } from 'native-base';
import { connect } from 'react-redux';
// import { removeAffirmation } from './components/AffirmationList';
import AffirmationItemContainer  from '../containers/AffirmationItemContainer';
import { TogglEditAffirmation } from '../actions';


import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    ListView,
} from 'react-native';


class AffirmationItem extends Component {

    TogglEditAffirmation = (text) => {
        return TogglEditAffirmation(text)
    }

    removeAffirmation = () => {
      this.props.dispatch(
            this.props.removeAffirmation(this.props)
        );
    }


    render() {
        console.log('tihs.props.affirmation ', this.props)
        return (
            <View>
                <AffirmationItemContainer
                    TogglEditAffirmation={this.TogglEditAffirmation}
                    style={styles.ListView}
                    affirmation={this.props.affirmation}
                    removeAffirmation={this.removeAffirmation}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ListView: {
        alignSelf: "stretch"
    }
});

export default connect()(AffirmationItem);

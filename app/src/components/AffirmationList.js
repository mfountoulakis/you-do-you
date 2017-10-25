import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Button, Icon, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { removeAffirmation, togglEditAffirmation } from '../actions';
import AffirmationItemContainer from '../containers/AffirmationItemContainer';
import DatePicker from '../containers/DatePickerContainer';
import LinearGradient from 'react-native-linear-gradient';


import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    ListView,
} from 'react-native';


class AffirmationList extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            basic: true,
            dataSource: dataSource.cloneWithRows(props.affirmations)
        };
        refreshing: false
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.affirmations)
        });
    }

    removeAffirmation = (affirmation) => {
        return removeAffirmation(affirmation, affirmation.id)
    }

    togglEditAffirmation = (affirmation) => {
        return togglEditAffirmation(affirmation, affirmation.id)
    }

    _onForward(affirmation) {
        this.navigator.push({
            component: DatePicker,
            title: "Scheduler",
            passProps: { affirmation: affirmation }
        });
    }


    _renderAffirmation(data) {        
        return (
            < AffirmationItemContainer
                navigator={this.props.navigator}
                isEditing={data.isEditing}
                affirmation={data}
                removeAffirmation={this.removeAffirmation}
                togglEditAffirmation={this.togglEditAffirmation}
                _onForward={this._onForward}
            />
        )

    }


    render() {
        return (
            <View style={styles.container}>
                <ListView
                    style={styles.ListView}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderAffirmation.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: 0
    },
    ListView: {
        alignSelf: "stretch",
        backgroundColor: "transparent"
    },
    LinearGradient: {
        alignSelf: "stretch"
    }
});

export default AffirmationList;

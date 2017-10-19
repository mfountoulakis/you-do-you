import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Button, Icon, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { removeAffirmation } from '../actions';
import AffirmationItem from '../containers/AffirmationItemContainer';


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
        return removeAffirmation(affirmation)
    }


    _renderAffirmation(data) {
        return (
            < AffirmationItem
                affirmation={data.affirmation}
                removeAffirmation={this.removeAffirmation}
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
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
    },
    ListView: {
        alignSelf: "stretch"
    }
});

export default AffirmationList;

import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Button, Icon, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { removeAffirmation } from '../actions';


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

    removeAffirmation = (secId, rowId, rowMap, data) => {
        this.props.dispatch(
            removeAffirmation(data)
        );
        rowMap[`${secId}${rowId}`].props.closeRow();
    }


    _renderAffirmation(data) {
        return (
            <ListItem style={styles.ListItem} >
                <Text> {data.affirmation.affirmation} </Text>
            </ListItem>
        )

    }


    render() {
        return (
            <ListView
                style={{ backgroundColor: "transparent" }}
                dataSource={this.state.dataSource}
                renderRow={this._renderAffirmation.bind(this)}
                renderLeftHiddenRow={data =>
                    <Button full onPress={() => alert(data)}>
                        <Icon active name="information-circle" />
                    </Button>}

            />
        );
    }
}

const styles = StyleSheet.create({
    affirmationList: {
        backgroundColor: "transparent"
    },
    ListItem: {
        backgroundColor: "transparent"
    }
});

export default connect()(AffirmationList);

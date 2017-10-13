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
            <ListItem >
                <Text> {data.affirmation.affirmation} </Text>
            </ListItem>
        )

    }


    render() {
        return (
            <Container>
                <Content>
                    <List style={styles.affirmationList}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderAffirmation.bind(this)}
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => alert(data)}>
                                <Icon active name="information-circle" />
                            </Button>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.removeAffirmation(secId, rowId, rowMap, data)}>
                                <Icon active name="trash" />
                            </Button>}

                        renderRight2HiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.removeAffirmation(secId, rowId, rowMap, data)}>
                                <Icon active name="trash" />
                            </Button>}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                        right2OpenValue={-200}

                        enableEmptySections={true}

                    />
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({

});

export default connect()(AffirmationList);

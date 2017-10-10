import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Row, List, Button, Icon, ListItem } from 'native-base';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Clipboard,
    ListView,
} from 'react-native';

class AffirmationItem extends Component {
    constructor(props, ) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            listViewData: props.affirmations
        };
    }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Container style={ styles.container }>
                <Header />
                <Content>
                    <List style={styles.affirmationList}
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>
                            <ListItem >
                                <Text> {data.affirmation} </Text>
                            </ListItem>}
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => alert(data)}>
                                <Icon active name="information-circle" />
                            </Button>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active name="trash" />
                            </Button>}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                </Content>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({

// });

module.exports = AffirmationItem;

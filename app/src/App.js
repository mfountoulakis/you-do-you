
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { fetchMessages } from './actions';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Clipboard,
  NavigatorIOS
} from 'react-native';

import FCM from "react-native-fcm";
import PushController from "./PushController";
import logger from 'redux-logger'
import rootReducer from './reducers';
// import Affirmations from './containers/Affirmations';
import AffirmationInput from './components/AffirmationInput';

import AffirmationList from './components/AffirmationList';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      tokenCopyFeedback: ""
    }
  }


  componentDidMount() {
    store.dispatch(fetchMessages());
    FCM.getInitialNotification().then(notif => {
      this.setState({
        initNotif: notif
      })
    });
  }

  showLocalNotification() {
    FCM.presentLocalNotification({
      vibrate: 500,
      title: 'Hello',
      body: 'Test Notification',
      big_text: 'i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large',
      priority: "high",
      sound: "bell.mp3",
      large_icon: "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg",
      show_in_foreground: true,
      number: 10
    });
  }

  scheduleLocalNotification() {
    FCM.scheduleLocalNotification({
      id: 'testnotif',
      fire_date: new Date().getTime() + 5000,
      vibrate: 500,
      title: 'Hello',
      body: 'Test Scheduled Notification',
      sub_text: 'sub text',
      priority: "high",
      large_icon: "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg",
      show_in_foreground: true,
      picture: 'https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png'
    });
  }

  render() {
    let { token, tokenCopyFeedback } = this.state;

    return (
      <Provider store={store}>
        <View style={styles.container}>

          <NavigatorIOS
            initialRoute={{
              component: AffirmationInput,
              title: 'My Initial Scene',
              passProps: { index: 1 },
            }}
            style={{ flex: 1 }}
          />
          <PushController
            onChangeToken={token => this.setState({ token: token || "" })}
          />

        </View>
      </Provider>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
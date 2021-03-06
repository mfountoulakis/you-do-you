
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import configureStore from './store/configureStore';
import { createStore, applyMiddleware } from 'redux';
import { fetchMessages } from './actions';
import { PersistGate } from 'redux-persist/es/integration/react';

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
import Signup from './components/Signup';

const { persistor, store } = configureStore()

const onBeforeLift = () => {
 console.log("BEFORE LIFT")
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      tokenCopyFeedback: "",
      authorized: false,
      authorizing: false

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

        <PersistGate
          onBeforeLift={onBeforeLift}
          persistor={persistor}>
          <View style={styles.container}>
            <NavigatorIOS
              initialRoute={{
                component: Signup,
                title: 'Welcome',
                passProps: { username: this.props.username, authorizing: this.props.authorizing, authorized: this.props.authorized },
              }}
              style={{ flex: 1 }}
            />
            <PushController
              onChangeToken={token => this.setState({ token: token || "" })}
            />
          </View>
        </PersistGate>
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

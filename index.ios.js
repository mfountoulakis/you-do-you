/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import App from "./app/src/App";

export default class you_do_you extends Component {
  render() {
    return (<App />);
  }
}

AppRegistry.registerComponent('you_do_you', () => you_do_you);
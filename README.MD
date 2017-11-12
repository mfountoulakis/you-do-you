## You Do You
A simple project demonstrating the use of firebase with react-native and redux.

![](https://media.giphy.com/media/26u4hqp3cRJRd9STK/giphy.gif)


## Installation

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

if you don't have react-native-cli
```
npm install -g react-native-cli
```

```
git clone https://github.com/mfountoulakis/you-do-you.git
npm install
react-native link
```

Create a firebase config file inside you-do-you/src named firebase.js and add your firebase credentials
```
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: “your-firebase-apiKey-key”,
  authDomain: "your-firebase-authDomain",
  databaseURL: "your-firebase-dadabaseURL”,
  storageBucket: "your-firebase-storageBucket”,
  messagingSenderId: "your-firebase-messagingSenderId"
});

firebase.initializeApp(config);

export default firebase;

```

To run the project use react-native-cli use
```
react-native run-ios
```

## Development

#### Start local server

```bash
npm start
```

## LICENSE

[MIT](LICENSE)

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './components/tosign/Login';
import {name as appName} from './app.json';
// import 'tailwindcss-react-native/types.d';
AppRegistry.registerComponent(appName, () => Login);

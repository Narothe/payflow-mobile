/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './components/tosign/Login';
import {name as appName} from './app.json';
import Navigation from './router/Navigation';

AppRegistry.registerComponent(appName, () => Navigation);

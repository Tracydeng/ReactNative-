/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React from 'react';

//或者 import React, {} from 'react';

import {
  AppRegistry,
} from 'react-native';


var MyListComponent = require('./MyListComponent');
//或者 import MyListComponent from './MyListComponent'


AppRegistry.registerComponent('Helloworld', () => MyListComponent);

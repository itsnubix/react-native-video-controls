/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import VideoPlayer from './VideoPlayer';

export default class App extends Component {
  render() {
    return (
      <VideoPlayer source={{ uri: 'http://vjs.zencdn.net/v/oceans.mp4' }} />
    );
  }
}

AppRegistry.registerComponent('App', () => App);

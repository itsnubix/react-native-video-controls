import {
  Image,
  PropTypes,
  PanResponder,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Control } from 'react-native-video-controls';
import React, { Component } from 'react';

import Video from 'react-native-video';
import { theme } from 'react-native-video-controls/src/assets/styles/theme';

class VideoPlayer extends Component {
  static defaultProps = {
    title: null,
    muted: false,
    paused: false,

    topControls: [
      <Control style={this._theme.backControl} onPress={this._onBack}>
        <Image
          source={require('react-native-video-controls/src/assets/img/back.png')}
        />
      </Control>,
      <Text style={this._theme.titleText}>{this.props.title}</Text>,
    ],

    middleControls: [
      <Control
        style={this._theme.playPauseRestartControl}
        onPress={this._togglePlayPauseRestart}>
        {this.isPaused && (
          <Image
            source={require('react-native-video-controls/src/assets/img/play.png')}
          />
        )}
        {this.isPlaying && (
          <Image
            source={require('react-native-video-controls/src/assets/img/pause.png')}
          />
        )}
        {this.isComplete && (
          <Image
            source={require('react-native-video-controls/src/assets/img/restart.png')}
          />
        )}
      </Control>,
    ],

    bottomControls: [
      <View style={this._theme.timerContainer}>
        <Text style={this._theme.currentTime}>{this.currentTime}</Text>
        <Text style={this._theme.duration}>{this.duration}</Text>
      </View>,
      <View style={this._theme.seekbarContainer}>
        <View onLayout={this._onSeekbarLayout} style={this._theme.seekbarTrack}>
          <View style={[this._theme.seekbarFill]}>
            <View
              style={this._theme.seekbarHandle}
              {...this._seekbarPanResponder}
            />
          </View>
        </View>
      </View>,
    ],

    loaderView: (
      <View>
        <Image
          source={require('react-native-video-controls/src/assets/img/loader.png')}
        />
      </View>
    ),

    errorView: (
      <View>
        <Text>Error!</Text>
      </View>
    ),
  };

  static propTypes = {
    muted: PropTypes.bool,
    paused: PropTypes.bool,
    title: PropTypes.string,

    topControls: PropTypes.array,
    middleControls: PropTypes.array,
    bottomControls: PropTypes.array,
    loader: PropTypes.element,
  };

  state = {
    isMuted: this.props.muted,
    isPaused: this.props.paused,
    isLoading: false,
    isSeeking: false,

    duration: 0,
    currentTime: 0,

    error: null,
  };

  _videoReference = null;

  get videoReference() {
    return this._videoReference;
  }

  get hasErrors() {
    return this.state.error !== null;
  }

  get hasNoErrors() {
    return this.state.error === null;
  }

  get duration() {
    return this.state.duration;
  }

  get currentTime() {
    return this.state.currentTime;
  }

  get percentComplete() {
    let percentage = this.currentTime / this.duration;

    if (percentage < 0) {
      return 0;
    }

    if (percentage > 1) {
      return 1;
    }

    return percentage;
  }

  get isPlaying() {
    return !this.state.isPaused;
  }

  get isPaused() {
    return this.state.isPaused;
  }

  get isLoading() {
    return this.state.isLoading;
  }

  get isFinished() {
    return this.state.isPaused && this.currentTime >= this.duration;
  }

  get isSeeking() {
    return this.state.isSeeking;
  }

  get isNotSeeking() {
    return !this.state.isSeeking;
  }

  seekTo(time) {
    console.log(time);
  }

  pause() {
    this.setState(() => ({ playing: false }));
  }

  play() {
    this.setState(() => ({ playing: true }));
  }

  clearErrors() {
    this.setState(() => ({ error: null }));
  }

  _theme = this.props.theme || theme;

  _seekerPosition = 0;

  _seekerWidth = 0;

  _seekbarPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: true,

    onMoveShouldSetPanResponder: true,

    onPanResponderGrant: () =>
      this.setState(() => ({
        isSeeking: true,
      })),

    onPanResponderRelease: () =>
      this.setState(() => ({
        isSeeking: false,
      })),

    onPanResponderMove: (event, gesture) => {
      this._seekerPosition = gesture.dx;
    },
  });

  _onSeekbarLayout = event => {
    this._seekerWidth = event.nativeEvent.layout.width;
  };

  _onError = error => {
    this.setState(() => ({ error }));

    this._performPropCallback('onError', error);
  };

  _onLoad = event => {
    this.setState(() => ({
      isLoading: false,
      duration: event.duration,
    }));

    this._performPropCallback('onLoad', event);
  };

  _onLoadStart = event => {
    this.setState(() => ({ isLoading: true }));

    this._performPropCallback('onLoadStart', event);
  };

  _onProgress = event => {
    if (this.isSeeking) {
      this._seekerPosition = this.state.currentTime / this.state.duration;
    }

    this._performPropCallback('onProgress', event);
  };

  _onEnd = event => {
    this._performPropCallback('onEnd', event);
  };

  _hasPropCallback(name) {
    return typeof this.props[name] === 'function';
  }

  _performPropCallback(name, payload = null) {
    if (this._hasPropCallback(name)) {
      this.props[name](payload);
    }
  }

  _onPlay() {
    this._performPropCallback('onPlay');
  }

  _onPause() {
    this._performPropCallback('onPause');
  }

  _onError(error) {
    this.setState(() => ({ error }));

    this._performPropCallback('onError');
  }

  render() {
    return (
      <View style={this._theme.playerContainer}>
        <Video
          {...this.props}
          ref={component => (this._videoReference = component)}
          muted={this.state.muted}
          paused={this.state.paused}
          onLoad={this._onLoad}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
          onProgress={this._onProgress}
          onEnd={this._onEnd}
          style={this._theme.video}
        />

        {this.hasNoErrors && !this.isNotLoading && (
          <View style={this._theme.controlsContainer}>
            <SafeAreaView style={this._theme.controlsContainer}>
              <View style={this._theme.topControlsContainer}>
                {this.props.topControls.join()}
              </View>

              <View style={this._theme.middleControlsContainer}>
                {this.props.middleControls.join()}
              </View>

              <View style={this._theme.bottomControlsContainer}>
                {this.props.bottomControls.join()}
              </View>
            </SafeAreaView>
          </View>
        )}

        {this.hasErrors && this.props.errorView}

        {this.isLoading && this.props.loaderView}
      </View>
    );
  }
}

export default VideoPlayer;

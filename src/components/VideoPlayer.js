import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  PanResponder,
  PropTypes,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Control, Error, Loader} from 'react-native-video-controls';
import React, {Component} from 'react';

import Video from 'react-native-video';
import {theme} from 'react-native-video-controls/src/assets/styles/theme';

class VideoPlayer extends Component {
  /**
   * Default props to use
   *
   * @return  {Object}
   */
  static defaultProps = {
    title: null,
    muted: false,
    paused: false,

    showSeekbar: true,
    topControls: [
      <Control
        defaultImage={require('react-native-video-controls/src/assets/img/back.png')}
      />,
      <Text style={this._theme.titleText}>{this.props.title}</Text>,
      <Control />,
    ],
    middleControls: [<Control />],
    bottomControls: [<Control />, <Control />, <Control />],

    loaderView: (
      <Image
        source={require('react-native-video-controls/src/assets/img/loader.png')}
      />
    ),
  };

  /**
   * Property types
   *
   * @return  {Object}
   */
  static propTypes = {
    muted: PropTypes.bool,
    paused: PropTypes.bool,
    title: PropTypes.string,

    showSeekbar: PropTypes.bool,
    topControls: PropTypes.array,
    middleControls: PropTypes.array,
    bottomControls: PropTypes.array,
    loaderView: PropTypes.element,
  };

  /**
   * The starting state
   *
   * @return  {Object}
   */
  state = {
    isMuted: this.props.muted,
    isPaused: this.props.paused,

    isLoading: false,
    isSeeking: false,
    isFullscreen: false,
    isControlBarVisible: false,

    duration: 0,
    currentTime: 0,

    error: null,
  };

  _seekbarResponder = PanResponder.create({
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
      this._setSeekerPosition(gesture.dx);
    },
  });

  _videoReference = null;
  get videoReference() {
    return this._videoReference;
  }

  /**
   * The components styles
   *
   * @return  {react-native/StyleSheet}
   */
  _theme = this.props.theme || theme;

  _onError = error => {
    this.setState(() => ({error}));

    this._performUserCallback('onError');
  };

  _onLoad = event => {
    console.log(event);
    this._performUserCallback('onLoad');
  };

  _onLoadStart = event => {
    console.log(event);
    this._performUserCallback('onLoadStart');
  };

  _onProgress = event => {
    if (!this.state.isSeeking) {
      this._setSeekerPosition(
        (this.state.currentTime / this.state.duration) * this._seekerWidth,
      );
    }

    this._performUserCallback('onProgress', event);
  };

  _onEnd = event => {
    this._performUserCallback('onEnd');
  };

  /**
   * Check if a callback has been pass with the associated name
   *
   * @param   {string}  name
   *
   * @return  {bool}
   */
  _hasPropCallback(name) {
    return typeof this.props[name] === 'function';
  }

  /**
   * If available, fires off a callback passed to the component
   *
   * @param   {string}  name
   * @param   {mixed}  payload
   *
   * @return  {void}
   */
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
    this.setState(() => ({error}));

    this._performPropCallback('onError');
  }

  _onExitFullscreen() {
    this._performPropCallback('onExitFullscreen');
  }

  _onEnterFullscreen() {
    this._performPropCallback('onEnterFullscreen');
  }

  _renderTopRow() {}

  _renderMiddleRow() {}

  _renderBottomRow() {}

  _renderSeekbarRow() {}

  render() {
    return (
      <View style={this._theme.container}>
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

        {!this.state.error && !this.state.isLoading && (
          <View style={this._theme.controls}>
            <SafeAreaView style={this._theme.controls}>
              {this._renderTopRow()}

              {this._renderMiddleRow()}

              {this._renderBottomRow()}

              {this._renderSeekbar()}
            </SafeAreaView>
          </View>
        )}

        {this.state.error && <Error error={this.state.error} />}

        {this.state.isLoading && (
          <Loader theme={this._theme} scene={this.props.loaderView} />
        )}
      </View>
    );
  }
}

export default VideoPlayer;

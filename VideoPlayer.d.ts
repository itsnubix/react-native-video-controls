import {Component} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Video, {LoadError, VideoProperties} from 'react-native-video';

interface DuckNavigator {
  pop: () => void;
}

interface VideoPlayerProperties extends VideoProperties {
  /** If true, clicking the fullscreen button will toggle the <Video /> component between cover/contain, set to false if you want to customize fullscreen behaviour */
  toggleResizeModeOnFullscreen?: boolean;
  /** The amountof time (in milliseconds) to animate the controls in and out. */
  controlAnimationTiming?: number;
  /** Tapping twice within this amount of time in milliseconds is considered a double tap. Single taps will not be actioned until this time has expired. */
  doubleTapTime?: number;
  /** Hide controls after X amount of time in milliseconds */
  controlTimeout?: number;
  /** If > 0, enable live scrubbing when moving the seek bar. The provided value is the minimum time step of the scrubbing in milliseconds. */
  scrubbing?: number;
  /** Show or hide the controls on first render */
  showOnStart?: boolean;
  /** React Native StyleSheet object that is appended to the <Video> component */
  videoStyle?: ViewStyle;
  /** When using the default React Native navigator and do not override the onBack function, you'll need to pass the navigator to the VideoPlayer for it to function */
  navigator?: DuckNavigator;
  /** Fill/handle colour of the seekbar */
  seekColor?: string;
  /** React Native StyleSheet object that is appended to the video's parent */
  style?: StyleProp<ViewStyle>;
  /** If true, single tapping anywhere on the video (other than a control) toggles between playing and paused. */
  tapAnywhereToPause?: boolean;
  /** Fired when the video enters fullscreen after the fullscreen button is pressed */
  onEnterFullscreen?: () => void;
  /** Fired when the video exits fullscreen after the fullscreen button is pressed */
  onExitFullscreen?: () => void;
  /** Fired when the controls disappear */
  onHideControls?: () => void;
  /** Fired when the controls appear */
  onShowControls?: () => void;
  /** Fired when an error is encountered when loading the video */
  onError?: (error: LoadError) => void;
  /** Fired when the video is paused after the play/pause button is pressed */
  onPause?: () => void;
  /** Fired when the video begins playing after the play/pause button is pressed */
  onPlay?: () => void;
  /** Function fired when back button is pressed, override if using custom navigation */
  onBack?: () => void;
  /** Fired when the video is complete */
  onEnd?: () => void;
  /** Hide the fullscreen button */
  disableFullscreen?: boolean;
  /** Hide the play/pause toggle */
  disablePlayPause?: boolean;
  /** Hide the seekbar */
  disableSeekbar?: boolean;
  /** Hide the Volume control */
  disableVolume?: boolean;
  /** Hide the timer */
  disableTimer?: boolean;
  /** Hide the back button */
  disableBack?: boolean;
}

export default class VideoPlayer extends Component<VideoPlayerProperties> {
  /**
   * Seek to a time in the video.
   *
   * @param {number} time time to seek to in ms
   */
  seekTo(time?: number): void;
  /**
   * Exposing player object for the ref.
   */
  player: {
    /**
     * The ref of underlying Video coomponent from
     * 'react-native-video'.
     * Can be used for various imperative tasks.
     */
    ref: Video;
  };
}

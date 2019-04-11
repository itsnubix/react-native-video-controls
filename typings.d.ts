import { Component } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { VideoProperties } from 'react-native-video';

export interface VideoPlayerProps extends VideoProperties {
  toggleResizeModeOnFullscreen?: boolean;
  controlTimeout?: number;
  showOnStart?: boolean;
  videoStyle?: StyleProp<ViewStyle>;
  navigator?: any;
  seekColor?: string;
  style?: StyleProp<ViewStyle>;
  // Events
  onEnterFullscreen?: () => void;
  onExitFullscreen?: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  onBack?: () => void;
  onEnd?: () => void;
  // Controls
  disableFullscreen?: boolean;
  disablePlayPause?: boolean;
  disableSeekbar?: boolean;
  disableVolume?: boolean;
  disableTimer?: boolean;
  disableBack?: boolean;
}

declare class VideoPlayer extends Component<VideoPlayerProps, {}> {}

export default VideoPlayer;

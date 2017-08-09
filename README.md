# react-native-video-controls
Controls for the React Native `<Video>` component at [react-native-video](https://github.com/react-native-community/react-native-video). For support with RN 0.38.x or lower use version 1.0.x.

## Features
This package contains a simple set of GUI controls that work with the [react-native-video](https://github.com/react-native-community/react-native-video) `<Video>` component. This includes a back button, volume bar, fullscreen toggle, play/pause toggle, seekbar, title, error handling and timer toggle that can switch between time remaining and current time when tapped.

![How it looks](https://s3-us-west-2.amazonaws.com/nubix.ca/github/example.gif)

By default the `<VideoPlayer>` accepts a navigator property from React's built-in `<Navigator>` which pops the current scene off the stack when tapped. Alternatively you can provide your own onBack prop to the component to override this functionality. You should also provide your own onEnd prop to the component so it knows what to do when a video ends playback.

By default, tapping the screen anywhere will show the player controls. After 10s the controls disappear. Double tapping will toggle fullscreen.

## Installation
Run `npm install --save react-native-video react-native-video-controls`

Then run `react-native link react-native-video`

If you're using RN < 39 run `npm install --save react-native-video-controls@1.0.1`. Note this version includes `react-native-video` as a normal dependency instead of a peer-dependency.

## Usage
The `<VideoPlayer>` component follows the API of the `<Video>` component at [react-native-video](https://github.com/react-native-community/react-native-video). It also takes a number of additional props which are outlined in the [API](#api) section.

For basic operation the `<VideoPlayer>` component requires a video source and a navigator property. The default back button functionality in the component relies on using the built-in `<Navigator>` functionality in React Native and pops the current scene off the stack. This can be overridden if desired, see the [API](#api) for more details.

```javascript
// At the top where our imports are...
import VideoPlayer from 'react-native-video-controls';


// in the component's render() function
<VideoPlayer
    source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
    navigator={ this.props.navigator }
/>

```

## API
The `<VideoPlayer>` component can take a number of inputs to customize it as needed. They are outlined below:

```javascript
<VideoPlayer

    // react-native-video props
    // Pass any prop that the <Video> element may accept

    // settings
    controlTimeout={ 15000 }         // hide controls after ms of inactivity.
    navigator={ navigator }          // prop from React Native <Navigator> component
    seekColor={ '#FFF' }             // fill/handle colour of the seekbar
    videoStyle={ {} }                // Style appended to <Video> component
    style={ {} }                     // Style appended to <View> container

    // event callbacks
    onError={ () => {} }             // Fired when an error is encountered on load
    onBack={ () => {} }              // Function fired when back button is pressed.
    onEnd={ () => {} }               // Fired when the video is complete.

/>
```

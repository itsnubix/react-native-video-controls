## 0.9.5 (15-11-2016)

### Bug fixes
[Tapping controls doesn't reset control hide timeout](https://github.com/itsnubix/react-native-video-controls/issues/1):

  - add resets to panhandlers for volume/seek areas
  - add resets to renderControl function onPress params.

[Control backgrounds should be gradients](https://github.com/itsnubix/react-native-video-controls/issues/2)

  - Changed vignette assets to be more subtle.
  - Added stretch to resizeMode

[Volume track bar is visible through volume icon](https://github.com/itsnubix/react-native-video-controls/issues/3)

  - Rebuilt volume area to be four parts. Container (ctrls max width), track (right side of icon), fill (left side of icon) and the handle (icon).
  - Added calculation to measure fill bar width and then subtract that from the width and assign to track bar on right side of icon.
  - Long story short, the icon now masks the volume bar.

[Clean up file structure](https://github.com/itsnubix/react-native-video-controls/issues/5)

### Features:

- Added loading icon when buffering movie
- Add error handling, ref: [Issue #4](https://github.com/itsnubix/react-native-video-controls/issues/4)

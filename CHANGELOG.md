## 0.9.7 (21-11-2016)

  - Aesthetic changes made with regards to spacing in the bottom control group
  - Tightened up space in the upper group as well.
  - Changed control timeout to 15s by default. Allow the ability to overwrite. See API.

## 0.9.6 (15-11-2016)

### Bug fixes

[Clean up file Structure](https://github.com/itsnubix/react-native-video-controls/issues/5):

  - cleaned up deps and files included.

## 0.9.5 (14-11-2016)

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

### Features

- Added loading icon when buffering movie
- Add error handling, ref: [Issue #4](https://github.com/itsnubix/react-native-video-controls/issues/4)

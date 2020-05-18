## 2.5.1 (17-05-2020)

[#177](https://github.com/itsnubix/react-native-video-controls/pull/177)

## 2.5.0 (16-05-2020)

Linting

Add show/hide callbacks [#164](https://github.com/itsnubix/react-native-video-controls/issues/164)

Add ability to set controlAnimationTiming [#172](https://github.com/itsnubix/react-native-video-controls/issues/172)

Fix for useNativeDriver animations [#178](https://github.com/itsnubix/react-native-video-controls/issues/178)

## 2.4.0 (??-??-2020)

At some point this got bumped to 2.4.0... ¯\\\_(ツ)\_/¯

## 2.3.0 (07-11-2019)

Fix for notched phone [#144](https://github.com/itsnubix/react-native-video-controls/issues/144)

Fix initialized seekerWidth [#143](https://github.com/itsnubix/react-native-video-controls/pull/143)

Increase lodash version [#157](https://github.com/itsnubix/react-native-video-controls/pull/157)

## 2.2.2 (22-03-2018)

Update the readme

## 2.2.1 (22-03-2018)

Fix for [#86](https://github.com/itsnubix/react-native-video-controls/issues/86)

- Added `toggleResizeModeOnFullscreen` prop which defaults to `true`

## 2.2.0 (14-03-2018)

Added in new event hooks for users to take advantage of... These are: onPlay, onPause, onEnterFullscreen and onExitFullscreen. Shout out to **@dashracer** and **@Gregoirevda**.

## 2.1.0 (23-02-2018)

Added in `disablePlayPause` and `showOnStart` props. Shout out to **@afilp** and **@batusai513**.

## 2.0.2 (11-01-2018)

Fix for [#67](https://github.com/itsnubix/react-native-video-controls/issues/67)

- Changed renderNullControl to return empty `<View/>`

## 2.0.1 (12-12-2017)

Fix for [#58](https://github.com/itsnubix/react-native-video-controls/issues/58)

## 2.0.0 (02-11-2017)

Update peer deps and version up.

## 1.5.1 (01-11-2017)

- [Fixed deprecation of Image tag containing children](https://github.com/itsnubix/react-native-video-controls/issues/55)

## 1.5.0 (27-10-2017)

- [Added ability to remove controls](https://github.com/itsnubix/react-native-video-controls/pull/50)
- [Added ability to pass props](https://github.com/itsnubix/react-native-video-controls/pull/52)

## 1.4.1 (30-08-2017)

Bug fixes. Updated `react-native-video` to ^2.0.0 in the peer deps and `react-native` to 47.2. Changed default title font size to 14.

[#42](https://github.com/itsnubix/react-native-video-controls/issues/42)

- Related to a number of things...hitbox size, zIndex, overflow for whatever reason. Seekbar layout has been rebuilt and tested in both iOS and Android.

[#46](https://github.com/itsnubix/react-native-video-controls/issues/46)

- Props were being assigned twice. Removing second assignment has resolved the issue.

## 1.4.0 (09-08-2017)

Distilled down some merge requests and found a simple solution to a seekbar issue reported. Sometimes you just gotta give your elements a little more space. Let this be a lesson not to rush out push requests between meetings...I think this warrants a larger version change...you can now pass any prop to the `<VideoPlayer>` element and it'll pass those to `react-native-video`. API changes quite a lot because of that but shouldn't break.

## 1.3.1 (09-08-2017)

[#35](https://github.com/itsnubix/react-native-video-controls/pull/35)

- Fix flex issue with Android

[#38](https://github.com/itsnubix/react-native-video-controls/pull/38)

- Added additional RN Video params to opts call

## 1.3.0 (17-07-2017)

[#30](https://github.com/itsnubix/react-native-video-controls/issues/30)

- Add `react-native-video` as a peer-dependency

## 1.2.1 (29-06-2017)

[#26](https://github.com/itsnubix/react-native-video-controls/issues/26)

- Floor time values to prevent wrong time being displayed.

## 1.2.0 (20-03-2017)

[#14](https://github.com/itsnubix/react-native-video-controls/issues/14)

- Remove ability for loading events to be altered

[#19](https://github.com/itsnubix/react-native-video-controls/issues/19)

- Updated requirements to RN 0.42.x and RN Video 1.0.0

## 1.1.1 (23-12-2016)

Restore playInBackground and playWhenInactive

## 1.1.0 (23-12-2016)

Updated to work with react-native ^0.39.2.

### Bug fixes

[fix loadAnimation infinity loop](https://github.com/itsnubix/react-native-video-controls/pull/13)

- added if statement to loadAnimation function to prevent loop

[Crashes with New version of react-native-video](https://github.com/itsnubix/react-native-video-controls/issues/12)

- using latest github version of `react-native-video` to fix multiple issues with RN 39

## 1.0.1 (29-11-2016)

### Features

Add ability to set seeker bar colour

### Bug fixes

[When seeking sometimes seek handle hops back to original position](https://github.com/itsnubix/react-native-video-controls/issues/9)

## 1.0.0 (29-11-2016)

Bump to 1.0.0 as all major issues are fixed and API has changed slightly.

## 0.9.8 (28-11-2016)

### Bug fixes

[Seeking before onLoad triggers onEnd](https://github.com/itsnubix/react-native-video-controls/issues/8)

- modified pan handler to also look for if loading state which is set to false on init and changed when onLoad fired.

[setState being called when window off screen](https://github.com/itsnubix/react-native-video-controls/issues/7)

- added componentWillUnmount function to clear controlTimeout
- Note that if using react router componentWillUnmount will not fire unless you configure it to. See [this ticket](https://github.com/aksonov/react-native-router-flux/issues/131)

[If title is too long it runs off the page.](https://github.com/itsnubix/react-native-video-controls/issues/6)

- added flex 0.6 to size and restricted number of lines to 1. If it exceeds you'll get tail ellipsis

## 0.9.7 (21-11-2016)

### Changes

- Aesthetic changes made with regards to spacing in the bottom control group
- Tightened up space in the upper group as well.

### Features

- Changed control timeout to 15s by default. Allow the ability to overwrite. See API.
- Added ability to add container and video styling

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

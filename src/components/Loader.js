import React from 'react';
import {View} from 'react-native';

const Loader = ({event, theme, scene}) => (
  <View style={theme.loaderContainer}>{scene}</View>
);

export {Loader};

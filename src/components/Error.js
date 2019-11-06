import {Image, Text, View} from 'react-native';

import React from 'react';

const Error = ({error, theme, image}) => (
  <View style={theme.errorContainer}>
    <Image source={image} />
    <Text style={theme.errorText}>Video unavailable</Text>
  </View>
);

export {Error};

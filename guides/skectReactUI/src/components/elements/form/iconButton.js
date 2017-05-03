// Importing the necessary dependencies
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-sketchapp';
import designSystem from '../../../designSystem';
import type { DesignSystem } from '../../../designSystem';

// Element design, including an editable "txt"
type P = {
  txt: string,
  children?: any,
};
type AvatarP = {
  url: string,
};
const Icon = ({ url }: AvatarP): React$Element<any> => (
  <Image source={url} style={} />
);

const RegularButton = ({txt, children}: P) => (
  <View style={{
    alignSelf: 'stretch',
    backgroundColor:  designSystem.colors.DarkSlateGray,
    borderRadius: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    padding: 15,
    shadowColor:  designSystem.colors.BlackGlass,
    shadowOffset: { height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    justifyContent:'center'
  }}>
  <Image source='https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg' width= '26' height= '26' />
    <Text style={ designSystem.fonts.ButtonText }>
      {txt}
    </Text>
  </View>
);

// Here we export the element as "regularButton"
export default RegularButton;

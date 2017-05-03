/* @flow */
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-sketchapp';
import { colors, fonts, spacing } from '../designSystem';
import type { Button } from '../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Haus,
    padding: 20,
    width: 260,
  },
  icon: {
    height: 20,
    resizeMode: 'contain',
  },
  title: fonts['Title 2'],
  subtitle: fonts['Title 3'],
  body: fonts.Body,
});

type IconP = {
  url: string,
};
const Icon = ({ url }: IconP): React$Element<any> => (
  <Image source={url} style={styles.icon} />
);

type TextP = { children?: string };
const Title = ({ children }: TextP): React$Element<any> => (
  <Text style={styles.title}>
    {children}
  </Text>
);




const IconButton = (props: IconButtonP): React$Element<any> => (
  <View style={styles.container}>
    <Icon url={props.button.icon_image_url} />
    <View style={{ marginBottom: spacing }}>
      <Title>{props.button.name}</Title>
    </View>
  </View>
);

export default IconButton;

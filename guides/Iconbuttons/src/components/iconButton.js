/* @flow */
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-sketchapp';
import { colors, fonts, spacing, btnColors } from '../designSystem';
import type { Button } from '../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DarkSlateGray,
    borderRadius: 25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'center',
    shadowColor: colors.BlackGlass,
    shadowOffset: { height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: 250,
  },
  icon: {
    height: 20,
    width: 20,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  title: fonts['Title 1'],
  body: fonts.Body,
});

type IconP = { url: string };
const Icon = ({ url }: IconP): React$Element<any> => <Image source={url} style={styles.icon} />;

type TextP = { children?: string };
const Title = ({ children }: TextP): React$Element<any> => (
  <Text style={styles.title}>
    {children}
  </Text>
);

const IconButton = (props: IconButtonP): React$Element<any> => (
  <View style={styles.container}>
    <View>
      <Title>{props.button.name}</Title>
    </View>
    <Icon url={props.button.icon_image_url} />
  </View>
);

export default IconButton;

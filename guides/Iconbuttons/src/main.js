import React from 'react';
import PropTypes from 'prop-types';
import { render, Text, View } from 'react-sketchapp';
import type { Button } from './types';
import { fonts, spacing, colors } from './designSystem';
import IconButton from './components/iconButton';
import Space from './components/Space';
import chroma from 'chroma-js';

const textColor = (hex) => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 4) {
    return '#FFF';
  }
  return chroma(hex).darken(3).hex();
};

const Swatch = ({ name, hex }) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 96,
      width: 96,
      margin: 4,
      backgroundColor: hex,
      padding: 8,
    }}
  >
    <Text name="Swatch Name" style={{ color: textColor(hex), fontWeight: 'bold' }}>
      {name}
    </Text>
    <Text name="Swatch Hex" style={{ color: textColor(hex) }}>
      {hex}
    </Text>
  </View>
);

const Color = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Swatch.propTypes = Color;

const Document = ({ colors }) => (
  <View
    name="Swatches"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (96 + 8) * 4,
    }}
  >
    {Object.keys(colors).map(color => <Swatch name={color} hex={colors[color]} key={color} />)}
  </View>
);

Document.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

const Page = ({ buttons }: { buttons: Array<Button> }) => (
  <View>
    <Text style={fonts['Title 2']}>Buttons</Text>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: buttons.length * 400,
      }}
    >
      {buttons.map(button => (
        <Space key={buttons.screen_name} h={spacing} v={spacing}>
          <IconButton button={button} />
        </Space>
      ))}
    </View>
  </View>
);

export default (context) => {
  const DATA = [
    {
      screen_name: 'Continue actuator',
      name: 'Continue',
      icon_image_url: 'https://s3.invisionapp-cdn.com/storage.invisionapp.com/assets/thumbnails/29856829-1_758_758.png?response-cache-control=max-age%3D2419200&x-amz-meta-av=1&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1496275200&Signature=qZX3La7bOQE9VYlrkKkOsWpk7y8%3D',
    },
    {
      screen_name: 'Retry',
      name: 'Retry',
      icon_image_url: 'https://s3.invisionapp-cdn.com/storage.invisionapp.com/assets/thumbnails/29856925-1_758_758.png?response-cache-control=max-age%3D2419200&x-amz-meta-av=1&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1496275200&Signature=erHr9R0DkAsBFs7Na5gpdSp7ybE%3D',
    },
    {
      screen_name: 'Check actuator',
      name: 'Check',
      icon_image_url: 'https://s3.invisionapp-cdn.com/storage.invisionapp.com/assets/thumbnails/29856925-1_758_758.png?response-cache-control=max-age%3D2419200&x-amz-meta-av=1&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1496275200&Signature=erHr9R0DkAsBFs7Na5gpdSp7ybE%3D',
    },
  ];

  render(<Page buttons={DATA} />, context.document.currentPage());
  // render(<Document colors={colors} />, context.document.currentPage());
};

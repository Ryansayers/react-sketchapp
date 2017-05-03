import React from 'react';
import { render, Text, View } from 'react-sketchapp';
import type { Button } from './types';
import { fonts, spacing } from './designSystem';
import IconButton from './components/iconButton';
import Space from './components/Space';

const Page = ({ buttons }: { buttons: Array<Button> }) => (
  <View>
    <Text style={fonts['Title 1']}>Buttons</Text>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: buttons.length * 300,
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
      name: 'Max Stoiber',
      icon_image_url: 'https://projects.invisionapp.com/assets/10871925/29856808/FA238A3517C73B3A15002DC3903E232485E4C932ADF58DF677016E4DD7784979/preview?w=758',
    },
    {
      name: '- ̗̀Jackie ̖́-',
      icon_image_url: 'https://pbs.twimg.com/profile_images/756488692135526400/JUCawBiW_400x400.jpg',
    },
    {
      name: 'kerning man',
      icon_image_url: 'https://pbs.twimg.com/profile_images/833785170285178881/loBb32g3.jpg',
    },
  ];

  render(<Page buttons={DATA} />, context.document.currentPage());
}

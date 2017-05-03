

/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View } from 'react-sketchapp';
import type { User } from './types';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';
import RegularButton from './components/elements/form/regularButton';
import IconButton from './components/elements/form/iconButton';

import Label from './components/Label';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';

const Document = ({ system }: { system: DesignSystem }) => (
  <View>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 4 }}>
      <Label>
      Reallyenglish Mobile styleguide
      </Label>
    </View>

    <Section title="Type Styles">
      {Object.keys(system.fonts).map(name => (
        <TypeSpecimen name={name} style={TextStyles.get(name)} />
      ))}
    </Section>

    <Section title="Color Palette">
    </Section>
    <Section title="Buttons"></Section>
    <RegularButton txt="Confirm Login"></RegularButton>
    <IconButton txt="Confirm Login"></IconButton>

  </View>
);

export default (context: any) => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    designSystem.fonts,
  );
  render(<Document system={designSystem} />, context.document.currentPage());
}

// Importing dependencies
import processColor from './processColor';
import type { Color } from './processColor';

// Defyining Colors
export const colors = {
  DarkGray: '#9B9B9B',
  DarkSlateGray: '#333',
  DimGray: '#666',
  DodgerBlue: '#0099FF',
  FireBrick: '#C10008',
  Khaki: '#FDC987',
  LightGoldenRodYellow: '#FCFAD4',
  LightGray: '#D7D7D7',
  LightSeaGreen: '#3DCB99',
  LightSkyBlue: '#65C1FF',
  MediumAquaMarine: '#8FCAB9',
  MediumSeaGreen: '#44DB5E',
  Plum: '#E095B1',
  Salmon: '#E86C68',
  SeaGreen1: '#0BA74F',
  SeaGreen2: '#279B4B',
  SkyBlue: '#7ABAEA',
  White: '#FFF',
  BlackGlass: 'rgba(0, 0, 0, 0.35)',
  WhiteSmoke: '#F1F1F1',
};

// Defyining Fonts styles and variables
const typeSizes = [80, 48, 36, 24, 20, 16];

export const spacing = 16;

const fontFamilies = {
  display: 'Helvetica',
  body: 'Georgia',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};

const shadows = {

}

export const fonts = {
  Headline: {
    color: colors.Night,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 80,
  },
  'Title 1': {
    color: colors.Night,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48,
  },
  'Title 2': {
    color: colors.Night,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  'Title 3': {
    color: colors.Night,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  Body: {
    color: colors.Night,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24,
  },
  Placeholder: {
    color: colors.GrayStronger,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 40,
  },
  ButtonText: {
    color: colors.White,
    fontWeight: 'bold',
  }
};

// Exporting
export default {
  colors: Object.keys(colors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: processColor(colors[name]),
    }),
    {},
  ),
  fonts,
  spacing,
  colors,
};

export type DesignSystem = {
  fonts: any,
  buttons: any,
  colors: { [key: string]: Color },
};

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

const typeSizes = [80, 48, 36, 24, 22, 16];

export const btnColors = ['#E86C68', '#333', '#444'];

export const spacing = 5;

const fontFamilies = {
  display: 'Proxima Nova',
  body: 'Georgia',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};

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
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
    color: colors.White,
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
};

export default {
  colors,
  fonts,
  spacing,
};

export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: string }
};

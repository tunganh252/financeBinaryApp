import { Dimensions } from 'react-native'
import icons from '../icons'
const { width, height } = Dimensions.get('window')

export const STYLES = {
  shadow: {
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  },
}

export const COLORS = {
  // base colors

  primary: '#f59d37',
  secondary: '#f8ac59',

  blueDark: '#1b2945',
  blueBlack: '#1a1e30',
  blueLight: '#1f69c0',
  lightGrey: '#1a1e30',

  baseGreen: '#24C16B',
  darkGreen: '#0C381F',

  green: '#66D59A',
  lightGreen: '#E6FEF0',

  lime: '#00BA63',
  emerald: '#2BC978',

  red: '#FF4134',
  lightRed: '#FFF1F0',

  purple: '#6B3CE9',
  lightpurple: '#F3EFFF',

  yellow: '#FFC664',
  lightyellow: '#FFF9EC',

  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#FCFBFC',
  gray: '#C1C3C5',
  grayTransparent: '#636a77',
  darkgray: '#C3C6C7',
  pink: '#ff4d6d',
  pinkBlack: '#d14b63',
  transparent: 'transparent',
}

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  small: 10,

  // app dimensions
  width,
  height,
  icons: {
    small: 32,
    medium: 40,
    large: 60,
  },
}

export const FONTS = {
  largeTitle: { fontFamily: 'RobotoRegular', fontSize: SIZES.largeTitle, lineHeight: 55 },
  h1: { fontFamily: 'RobotoBlack', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'RobotoBold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'RobotoBold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'RobotoBold', fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: 'RobotoBold', fontSize: SIZES.h5 },
  h6: { fontFamily: 'RobotoBold', fontSize: SIZES.h6 },
  body1: { fontFamily: 'RobotoRegular', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: 'RobotoRegular', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: 'RobotoRegular', fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: 'RobotoRegular', fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: 'RobotoRegular', fontSize: SIZES.body5, lineHeight: 22 },
  small: { fontFamily: 'RobotoRegular', fontSize: SIZES.small, lineHeight: 22 },
  medium: { fontFamily: 'RobotoMedium', fontSize: SIZES.body3 },
}

const appTheme = { COLORS, SIZES, FONTS, STYLES }

export default appTheme

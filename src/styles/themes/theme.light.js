import { THEME_LIGHT } from '../../static/constants/themes';
import * as C from '../../static/constants/colors';

export const themeLight = {
  name: THEME_LIGHT,

  background: C.WHITE,

  // button
  buttonBackground: C.PRIM,
  buttonBorder: C.ORCHID,
  buttonColor: C.PLUM,

  buttonBackgroundHover: C.PLUM,
  buttonBorderHover: C.PLUM,
  buttonColorHover: C.WHITE,

  // title
  title: C.PLUM,
  titleBackground: C.PRIM,

  // menu link
  link: C.PLUM,
  active: C.ORCHID,

  // header toggle
  toggleBackground: C.PRIM,
  toggleBorder: C.ORCHID,
  toggleFill: C.BOUQUET,

  toggleBackgroundHover: C.ORCHID,
  toggleFillHover: C.PLUM,

  toggleActiveBackground: C.BOUQUET,
  toggleActiveFill: C.PRIM,
  toggleActiveBorder: C.PLUM,

  // text and header
  header: C.PLUM,
  text: C.DIESEL
};

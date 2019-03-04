import { THEME_DARK } from '../../static/constants/themes';
import * as C from '../../static/constants/colors';

export const themeDark = {
  name: THEME_DARK,

  background: C.COAL_MINE,

  // button
  buttonBackground: C.TUNDORA,
  buttonBorder: C.TUNDORA,
  buttonColor: C.WILD_SAND,

  buttonBackgroundHover: C.GRAY,
  buttonBorderHover: C.GRAY,
  buttonColorHover: C.WHITE,

  // title
  title: C.CRIMSON,
  titleBackground: C.MINE_SHAFT,

  // menu link
  link: C.SILVER,
  active: C.WHITE,

  // header toggle
  toggleBackground: C.TUNDORA,
  toggleBorder: C.DOVE,
  toggleFill: C.SILVER,

  toggleBackgroundHover: C.DOVE,
  toggleFillHover: C.WILD_SAND,

  toggleActiveBackground: C.SILVER,
  toggleActiveFill: C.TUNDORA,
  toggleActiveBorder: C.SILVER,

  // text and header
  header: C.GRAY,
  text: C.WILD_SAND
};

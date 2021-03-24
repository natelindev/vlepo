import { atom } from 'recoil';
import { defaultTheme } from 'src/shared/theme';

export const themeState = atom({
  key: 'theme',
  default: defaultTheme,
});

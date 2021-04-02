import '@emotion/react';

import { defaultTheme } from 'src/shared/theme';

type ThemeType = typeof defaultTheme;
declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

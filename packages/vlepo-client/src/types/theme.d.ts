import '@emotion/react';

import { defaultTheme } from 'src/shared/theme';

type ThemeType = typeof defaultTheme;
declare module '@emotion/react' {
  // needed for interface merging
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}

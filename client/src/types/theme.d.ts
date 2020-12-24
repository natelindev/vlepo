import '@emotion/react';

import type { BorderWidth } from '../components/constants';
declare module '@emotion/react' {
  export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    primaryFontFamily: string;
    secondaryFontFamily: string;
    borderWidth: BorderWidth;
    zIndex: ZIndex;
  }

  export interface BorderWidth {
    button: string;
    card: string;
  }

  export interface ZIndex {
    button: string;
  }
}

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    primaryFontFamily: string;
    secondaryFontFamily: string;
    borderWidth: BorderWidth;
    ZIndex: ZIndex;
  }

  export interface BorderWidth {
    button: string;
    card: string;
  }

  export interface ZIndex {
    button: string;
  }
}

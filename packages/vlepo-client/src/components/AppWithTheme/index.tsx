import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from 'src/atoms/theme';
import { globalStyles } from 'src/shared/styles';

import { ThemeProvider } from '@emotion/react';

type AppWithThemeProps = {
  children: React.ReactElement;
};
const AppWithTheme = (props: AppWithThemeProps) => {
  const { children } = props;
  const theme = useRecoilValue(themeState);
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      {children}
    </ThemeProvider>
  );
};

export default AppWithTheme;

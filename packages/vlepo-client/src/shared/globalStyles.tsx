import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={(theme) => css`
      html,
      body {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        text-align: left;
        font-family: ${theme.fonts.content};
      }
      *,
      ::after,
      ::before {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
      }
      *:focus {
        outline: none;
      }
      #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
      }

      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover,
      textarea:-webkit-autofill:focus,
      select:-webkit-autofill,
      select:-webkit-autofill:hover,
      select:-webkit-autofill:focus {
        appearance: none;
        color: ${theme.colors.background} !important;
        background-color: ${theme.colors.background} !important;
      }

      ::selection {
        color: ${theme.colors.whiteText};
        background: ${theme.colors.selection};
      }
    `}
  />
);

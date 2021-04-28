import { shared } from './shared';

export const darkTheme = {
  name: 'dark',
  colors: {
    accent: '#440a67',
    background: '#18191a',
    backgroundSecondary: '#242526',
    backgroundMuted: '#303031',
    backgroundDarker: '#111111',
    error: '#ff3232',
    highlight: '#454546',
    muted: '#b1b3b8',
    primary: '#151965',
    secondary: '#126e82',
    text: '#e5e6eb',
    link: '#007bff',
    navbar: 'rgba(36,38,38,0.8)',
    whiteText: '#e5e6eb',
    blackText: '#18191a',
    textTransparent: 'rgba(255, 255, 255, 0.8)',
    bgTransparent: 'rgba(0, 0, 0, 0.8)',
    selection: '#007bff',
  },
  shadows: {
    Tag: '0 1px 2px rgba(0, 0, 0, 0.2)',
    Navbar: '0 0.1rem 0.1rem hsla(0,0%,100%,0.1)',
    Card: '0 1px 2px rgba(0, 0, 0, 0.2)',
    OauthButton: '0 0 7px hsla(0,0%,100%,0.1)',
    Input: '0 0 7px rgba(50, 50, 255, 0.3)',
    Dropdown: '0 1px 4px 0 hsla(0,0%,100%,0.1)',
  },
  ...shared,
};

import { shared } from './shared';

export const lightTheme = {
  name: 'light',
  colors: {
    accent: '#9932ff',
    background: '#fcfcfc',
    backgroundSecondary: '#ffffff',
    backgroundMuted: '#f0f2f5',
    backgroundDarker: '#b1b3b8',
    error: '#ff3232',
    highlight: '#e4e6ea',
    muted: '#65676b',
    primary: '#3232ff',
    secondary: '#5cc6ee',
    text: '#050505',
    link: '#007bff',
    navbar: 'rgba(255,255,255,0.8)',
    whiteText: '#fff',
    blackText: '#18191a',
    textTransparent: 'rgba(0, 0, 0, 0.8)',
    bgTransparent: 'rgba(255, 255, 255, 0.8)',
    selection: '#007bff',
  },
  shadows: {
    Tag: '0 1px 2px rgba(0, 0, 0, 0.2)',
    Navbar: '0 0.1rem 0.1rem hsla(0,0%,20%,0.1)',
    Card: '0 1px 2px rgba(0, 0, 0, 0.2)',
    OauthButton: '0 0 7px hsla(0,0%,100%,0.1)',
    Input: '0 0 7px rgba(50, 50, 255, 0.3)',
    Dropdown: '0 1px 4px 0 hsla(0,0%,100%,0.1)',
  },
  filter: {
    headerImage: 'brightness(70%) saturate(110%)',
    cardImage: 'brightness(90%) saturate(105%)',
  },
  ...shared,
};

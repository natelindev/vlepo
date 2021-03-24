export const defaultTheme = {
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    accent: '#9932ff',
    background: '#000000',
    backgroundSecondary: '#111111',
    backgroundMuted: '#333333',
    error: '#ff3232',
    highlight: '#4B4C53',
    muted: '#f2f2f2',
    primary: '#3232FF',
    secondary: '#5CC6EE',
    text: '#ffffff',
    link: '#3299ff',
  },
  fonts: {
    content:
      'Titillium, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading:
      'Economica, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  fontWeights: {
    black: 800,
    bold: 700,
    extraLight: 200,
    light: 300,
    regular: 400,
    semiBold: 600,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  lineHeights: {
    content: 1.5,
    heading: 1.125,
  },
  radii: {
    default: '4px',
  },
  shadows: {
    Navbar: 'inset 0 -1px 0 0 hsla(0,0%,100%,0.1)',
    Card: '0 0 5px rgba(0, 0, 0, .125)',
    Input: '0 0 5px rgba(50, 50, 255, 0.3)',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    h1: {
      fontSize: 5,
      variant: 'text.heading',
    },
    h2: {
      fontSize: 4,
      variant: 'text.heading',
    },
    h3: {
      fontSize: 3,
      variant: 'text.heading',
    },
    h4: {
      fontSize: 2,
      variant: 'text.heading',
    },
    h5: {
      fontSize: 1,
      variant: 'text.heading',
    },
    h6: {
      fontSize: 0,
      variant: 'text.heading',
    },
    pre: {
      code: {
        color: 'inherit',
      },
      fontFamily: 'monospace',
      overflowX: 'auto',
    },
    root: {
      fontFamily: 'content',
      fontWeight: 'content',
      lineHeight: 'content',
    },
    table: {
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%',
    },
    td: {
      borderBottomStyle: 'solid',
      textAlign: 'left',
    },
    th: {
      borderBottomStyle: 'solid',
      textAlign: 'left',
    },
  },
  zIndices: {
    CardLink: 1,
    DropDownMenu: 4,
    GradientButton: 1,
    ModalContainer: 5000,
    Navbar: 3,
    ScrollToTop: 1,
    Tags: 2,
  },
};

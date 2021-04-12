export const shared = {
  breakpoints: ['40em', '52em', '64em'],
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
    Navbar: '0 0.1rem 0.1rem hsla(0,0%,100%,0.1)',
    Card: '0 1px 2px rgba(0, 0, 0, 0.2)',
    OauthButton: '0 0 7px hsla(0,0%,100%,0.1)',
    Input: '0 0 7px rgba(50, 50, 255, 0.3)',
    Dropdown: '0 1px 4px 0 hsla(0,0%,100%,0.1)',
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
    GradientButton: 1,
    ScrollToTop: 1,
    Badge: 1,
    Tags: 2,
    Navbar: 3,
    ProgressBar: 4,
    DropDownMenu: 4,
    ModalContainer: 999,
    Toast: 1000,
  },
};

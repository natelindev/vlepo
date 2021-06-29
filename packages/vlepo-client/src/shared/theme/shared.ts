export const shared = {
  breakpoints: ['40em', '52em', '64em', '76em'],
  fonts: {
    content:
      'Roboto, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading:
      'Poppins, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 18, 24, 32, 48, 64, 96, 128],
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
    default: 4,
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
    PlaceHolder: 3,
    Navbar: 4,
    ProgressBar: 5,
    DropDownMenu: 5,
    HoverShare: 6,
    ModalContainer: 999,
    Toast: 1000,
  },
  heights: {
    navbar: '3.5rem',
  },
};

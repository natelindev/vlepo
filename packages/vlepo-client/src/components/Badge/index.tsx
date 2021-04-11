import { margin, MarginProps, variant, width, WidthProps } from 'styled-system';

import styled from '@emotion/styled';

type BadgeProp = MarginProps & {
  variant: 'primary' | 'secondary' | 'accent';
};

const Badge = styled.div<BadgeProp & WidthProps>`
  display: inline-block;
  padding: 0.25em 0.4em;
  height: auto;
  font-size: 75%;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 1;
  color: ${(props) => props.theme.colors.whiteText};
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${margin}
  ${width}
  ${variant({
    variants: {
      primary: {
        bg: 'primary',
      },
      secondary: {
        bg: 'secondary',
      },
      accent: {
        bg: 'accent',
      },
    },
  })}
`;

export default Badge;

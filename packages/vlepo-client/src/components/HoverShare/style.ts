import { a } from 'react-spring';

import styled from '@emotion/styled';

import { BaseScrollToTop } from '../ScrollToTop';

export const ShareToggler = styled(BaseScrollToTop)`
  bottom: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShareContainer = styled(a.div)`
  margin-top: 2rem;
  position: fixed;
  right: 0;
  bottom: 5.75rem;
  display: flex;

  max-width: 2.2rem;

  flex-direction: column;
  margin-left: 1.75rem;
  margin-right: auto;

  *:focus {
    border: none;
    outline: none;
  }

  svg {
    border-radius: ${(props) => `${props.theme.radii.default}px`};
  }

  z-index: ${(props) => props.theme.zIndices.HoverShare};
`;

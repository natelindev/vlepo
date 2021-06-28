import Typist from 'react-typist';
import { fontSize, FontSizeProps, margin, MarginProps } from 'styled-system';

import styled from '@emotion/styled';

export const SloganContainer = styled(Typist)<FontSizeProps & MarginProps>`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
  margin-left: auto;
  margin-right: auto;
  ${fontSize}
  ${margin}
  color: ${(props) => props.theme.colors.text};
`;

export const Slogan = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;

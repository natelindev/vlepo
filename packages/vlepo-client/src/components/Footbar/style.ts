import { flexbox, FlexboxProps, margin, MarginProps } from 'styled-system';

import styled from '@emotion/styled';

export const BaseFootbar = styled.div<FlexboxProps>`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  margin-bottom: 2rem;
  ${flexbox}
`;

export const CenteredText = styled.div<MarginProps>`
  color: ${(props) => props.theme.colors.muted};
  display: flex;
  justify-content: center;
  ${margin}
`;

export const LoveIcon = styled.div`
  margin-left: 0.2rem;
`;

export const BottomText = styled.div`
  color: ${(props) => props.theme.colors.muted};
`;

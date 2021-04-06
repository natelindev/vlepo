import { flexbox, FlexboxProps, margin, MarginProps, width, WidthProps } from 'styled-system';

import styled from '@emotion/styled';

export const Header = styled.header`
  flex: none;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  flex: 1 0 auto;
  width: 100%;
  overflow-y: hidden;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Footer = styled.footer`
  flex: none;
  border-top: 1px solid ${(props) => props.theme.colors.backgroundMuted};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

export const Row = styled.div<WidthProps & MarginProps & FlexboxProps>`
  ${width}
  ${margin}
  ${flexbox}
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div<MarginProps & WidthProps & FlexboxProps>`
  ${margin}
  ${width}
  ${flexbox}
  display: flex;
`;

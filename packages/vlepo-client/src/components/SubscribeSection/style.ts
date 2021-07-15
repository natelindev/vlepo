import {
  height,
  HeightProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  width,
  WidthProps,
} from 'styled-system';

import styled from '@emotion/styled';

type BaseSubscribeSectionProps = WidthProps & HeightProps & MarginProps & PaddingProps;
export const BaseSubscribeSection = styled.div<BaseSubscribeSectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  box-shadow: ${(props) => props.theme.shadows.Card};
  border-radius: ${(props) => props.theme.radii.default};
  ${width}
  ${height}
   ${margin}
   ${padding};
`;

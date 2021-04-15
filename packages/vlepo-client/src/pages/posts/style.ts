import Image from 'next/image';
import { H1 } from 'src/components/Typography';
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

export const Header = styled.div`
  color: ${(props) => props.theme.colors.whiteText};
  width: 100%;
`;

export const Title = styled(H1)`
  font-size: '36px';
  font-weight: 600;
  text-align: center;
`;

export const Back = styled.div`
  display: flex;
  margin-right: auto;
  cursor: pointer;
`;

export const ArticleBody = styled.article<WidthProps & MarginProps & PaddingProps>`
  ${width}
  ${margin}
  ${padding}
`;

export const Body = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

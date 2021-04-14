import Image from 'next/image';
import { H1 } from 'src/components/Typography';

import styled from '@emotion/styled';

export const Header = styled.div`
  color: ${(props) => props.theme.colors.whiteText};
  max-height: 30rem;
  width: 100%;
  > div {
    max-height: 30rem;
  }
`;

export const FullWidthImage = styled(Image)`
  object-fit: cover;
  filter: brightness(60%) saturate(180%);
`;

export const Title = styled(H1)`
  font-size: '36px';
  font-weight: 600;
  text-align: center;
`;

export const Back = styled.div`
  margin-right: auto;
`;

export const ArticleBody = styled.article`
  margin-left: 10rem;
  margin-right: 10rem;
`;

export const Body = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

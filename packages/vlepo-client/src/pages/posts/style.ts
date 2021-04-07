import Image from 'next/image';

import styled from '@emotion/styled';

export const Header = styled.div`
  max-height: 30rem;
  width: 100%;
  > div {
    max-height: 30rem;
  }
`;

export const FullWidthImage = styled(Image)`
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 2.75rem;
`;

export const ArticleBody = styled.article`
  margin-left: 10rem;
  margin-right: 10rem;
`;

export const Body = styled.div`
  display: flex;
`;

export const Author = styled.div`
  font-size: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

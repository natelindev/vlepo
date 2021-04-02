import Image from 'next/image';
import { Row } from 'src/components/Layout/style';

import styled from '@emotion/styled';

import Card from '../Card';

export const Abstract = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  word-break: break-all;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ArticleCardTitle = styled.h1`
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0.5rem;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const ArticleDate = styled.div`
  margin-right: auto;
`;

export const ArticleCardFooter = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
`;

export const AuthorProfileImageContainer = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  margin-right: 0.5rem;
`;

export const AuthorName = styled(Row)`
  font-size: 0.9rem;
`;

export const AuthorProfileImage = styled(Image)`
  object-fit: contain;
`;

export const AuthorSection = styled(Row)`
  justify-content: flex-start;
  align-items: center;
`;

export const BaseArticleCard = styled(Card)`
  border-radius: ${(props) => props.theme.radii.default};
  box-shadow: ${(props) => props.theme.shadows.Card};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;
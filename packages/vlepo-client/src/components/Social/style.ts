import { margin, MarginProps } from 'styled-system';

import styled from '@emotion/styled';

export const SocialLink = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  color: ${(props) => props.color};
`;

export const SocialLinkWrapper = styled.div<MarginProps>`
  display: flex;
  align-items: center;
  transition: all 0.4s ease-out;
  > ${SocialLink} {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
  ${margin}
`;

export const SocialSvg = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
`;

export const SocialGroupInnerCircle = styled.circle`
  fill: transparent;
  transition: all 0.2s;

  ${SocialLink}:hover & {
    fill: currentColor;
    transition: all 0.45s;
  }

  ${SocialSvg}:hover & {
    fill: currentColor;
    transition: all 0.45s;
  }
`;

export const SocialGroupOutline = styled.circle`
  stroke: ${(props) => props.theme.colors.text};
  transform-origin: 50% 50%;
  transition: all 0.2s;

  ${SocialLink}:hover & {
    stroke: currentColor;
    transform: scale(1.1);
    transition: all 0.45s;
  }

  ${SocialSvg}:hover & {
    stroke: currentColor;
    transform: scale(1.1);
    transition: all 0.45s;
  }
`;

export const SocialGroupIcon = styled.path`
  fill: ${(props) => props.theme.colors.text};
  ${SocialSvg}:hover & {
    fill: ${(props) => props.fill};
  }
  transition: all 0.45s;
`;

import React from 'react';

import styled from '@emotion/styled';

export const AnimatedLink = styled.a`
  position: relative;
  color: ${(props) => props.theme.colors.link};
  text-decoration: none !important;

  &:hover {
    color: ${(props) => props.theme.colors.link};
    &:before {
      visibility: visible;
      text-decoration: none;
      transform: scaleX(1);
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: ${(props) => props.theme.colors.link};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
`;

export const AnimatedExternalLink = (props: React.ComponentProps<typeof AnimatedLink>) => {
  return <AnimatedLink target="_blank" rel="noopener noreferrer" {...props} />;
};

export const OverlayLink = styled.a`
  font-size: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${(props) => props.theme.zIndices.CardLink};
`;

export const OverlayExternalLink = (props: React.ComponentProps<typeof OverlayLink>) => {
  return <OverlayLink target="_blank" rel="noopener noreferrer" {...props} />;
};

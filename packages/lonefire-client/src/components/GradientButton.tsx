import Link from 'next/link';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from './base';

export interface GradientButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  link?: string;
  colorA: string;
  colorB: string;
}

const isBright = (hexColor: string) => {
  const [r, g, b] = [0, 2, 4].map((p) => parseInt(hexColor.substr(p, 2), 16));
  return (r * 299 + g * 587 + b * 114) / 1000 >= 128;
};

const BaseGradientButton = styled(Button)`
  position: relative;
  border: none;
  transition: opacity linear 0.3s;

  &::before {
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    transition: opacity linear 0.3s;
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  &:focus,
  &:active,
  &:not(:disabled):not(.disabled):active:focus {
    outline: none;
    box-shadow: none;
  }
`;

const GradientButtonContent = styled.div`
  position: relative;
  z-index: 1;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const GradientButton: React.FC<GradientButtonProps> = (props: GradientButtonProps) => {
  const { colorA, colorB, children, link, ...rest } = props;
  return (
    <BaseGradientButton
      css={css`
        background-image: linear-gradient(45deg, ${colorA} 10%, ${colorB} 90%);
        color: ${isBright(colorA) && isBright(colorB) ? '#000000' : '#ffffff'};
        &::before {
          background-image: linear-gradient(45deg, ${colorA} 35%, ${colorB} 75%);
        }
      `}
      {...rest}
    >
      <GradientButtonContent>
        {link ? <Link href={link}>{children}</Link> : children}
      </GradientButtonContent>
    </BaseGradientButton>
  );
};

export default GradientButton;

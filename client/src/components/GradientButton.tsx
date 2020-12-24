import './GradientButton.scoped.scss';

import Link from 'next/link';
import React from 'react';

import { css } from '@emotion/react';

import { Button } from './basic';

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

const GradientButton: React.FC<GradientButtonProps> = (props: GradientButtonProps) => {
  const { colorA, colorB, children, className, link, ...rest } = props;
  return (
    <Button
      className={`${className ?? ''} gradient-button`}
      css={css`
        background-image: linear-gradient(45deg, ${colorA} 10%, ${colorB} 90%);
        color: ${isBright(colorA) && isBright(colorB) ? '#000000' : '#ffffff'};
        &::before {
          background-image: linear-gradient(45deg, ${colorA} 35%, ${colorB} 75%);
        }
      `}
      {...rest}
    >
      <div className="btn-content">{link ? <Link href={link}>{children}</Link> : children}</div>
    </Button>
  );
};

export default GradientButton;

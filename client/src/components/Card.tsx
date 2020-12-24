import './Card.scoped.scss';

import Link from 'next/link';
import React from 'react';
import { useHoverIntent } from 'react-use-hoverintent';

import { css } from '@emotion/react';

import { Card } from './basic';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  hoverEffect?: 'bubba' | undefined | null | '';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  lr?: boolean;
  width?: string;
  height?: string;
  colorA?: string;
  colorB?: string;
  href?: string;
}

export default React.forwardRef((props: CardProps, ref: React.Ref<HTMLDivElement | null>) => {
  const { children, className, lr, hoverEffect, width, height, href, ...rest } = props;
  const [isHovering, intentRef] = useHoverIntent<HTMLDivElement>({ ref });

  return (
    <Card
      className={`${className ?? ''}${hoverEffect ? ` card-${hoverEffect}` : ''}${lr ? ' lr' : ''}${
        isHovering ? ' temp' : ' active'
      }`}
      css={css`
        max-width: ${width};
        max-height: ${height};
      `}
      {...rest}
      ref={intentRef}
    >
      {children}
      {href ? (
        <Link
          href={href}
          css={css`
            font-size: 0;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
          `}
        >
          Some text
        </Link>
      ) : null}
    </Card>
  );
});

import Link from 'next/link';
import React from 'react';
import { useHoverIntent } from 'react-use-hoverintent';

import styled from '@emotion/styled';

import { Card as BaseCard } from './base';
import { ZIndex } from './ZIndex';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: unknown;
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

const Card = styled(BaseCard)<{ width?: string; height?: string }>`
  max-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
`;

const OverlayLink = styled.a`
  font-size: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${ZIndex.CardLink};
`;

export default React.forwardRef((props: CardProps, ref: React.Ref<HTMLDivElement | null>) => {
  const { children, className, lr, hoverEffect, width, height, href, ...rest } = props;
  const [isHovering, intentRef] = useHoverIntent<HTMLDivElement>({ ref });

  return (
    <Card height={height} width={width} {...rest} ref={intentRef} className={className}>
      {children}
      {href ? (
        <Link href={href} passHref>
          <OverlayLink />
        </Link>
      ) : null}
    </Card>
  );
});

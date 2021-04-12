import Link from 'next/link';
import React from 'react';

import { ConstrainedCard, OverlayLink } from './style';

export type CardProps = {
  [key: string]: unknown;
  children?: React.ReactNode;
  lr?: boolean;
  colorA?: string;
  colorB?: string;
  href?: string;
} & React.ComponentProps<typeof ConstrainedCard>;

const Card = React.forwardRef((props: CardProps, ref: React.Ref<HTMLDivElement>) => {
  const { children, href, ...rest } = props;
  return (
    <ConstrainedCard ref={ref} {...rest}>
      {children}
      {href ? (
        <Link href={href} passHref>
          <OverlayLink />
        </Link>
      ) : null}
    </ConstrainedCard>
  );
});

Card.displayName = 'Card';
export default Card;

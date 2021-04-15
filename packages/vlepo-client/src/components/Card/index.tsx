import Link from 'next/link';
import React from 'react';

import { BaseCard, OverlayLink } from './style';

export type CardProps = {
  children?: React.ReactNode;
  colorA?: string;
  colorB?: string;
  href?: string;
} & React.ComponentProps<typeof BaseCard>;

const Card = React.forwardRef((props: CardProps, ref: React.Ref<HTMLDivElement>) => {
  const { children, href, ...rest } = props;
  return (
    <BaseCard ref={ref} {...rest}>
      {children}
      {href ? (
        <Link href={href} passHref>
          <OverlayLink />
        </Link>
      ) : null}
    </BaseCard>
  );
});

Card.displayName = 'Card';
export default Card;

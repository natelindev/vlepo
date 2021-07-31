import Link from 'next/link';
import React from 'react';

import { OverlayExternalLink, OverlayLink } from '../Link';
import { BaseCard } from './style';

export type CardProps = {
  children?: React.ReactNode;
  colorA?: string;
  colorB?: string;
  href?: string | null;
  external?: boolean;
  ariaLabel?: string;
} & React.ComponentProps<typeof BaseCard>;

const Card = React.forwardRef((props: CardProps, ref: React.Ref<HTMLDivElement>) => {
  const { children, href, external = false, ariaLabel, ...rest } = props;
  return (
    <BaseCard ref={ref} {...rest}>
      {children}
      {href ? (
        <Link href={href} passHref>
          {external ? (
            <OverlayExternalLink aria-label={ariaLabel} />
          ) : (
            <OverlayLink aria-label={ariaLabel} />
          )}
        </Link>
      ) : null}
    </BaseCard>
  );
});

Card.displayName = 'Card';
export default Card;

import Link from 'next/link';
import React from 'react';

import { ConstrainedCard, OverlayLink } from './style';

// import { useHoverIntent } from 'react-use-hoverintent';

export type CardProps = {
  [key: string]: unknown;
  hoverEffect?: 'bubba' | undefined | null | '';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  lr?: boolean;
  colorA?: string;
  colorB?: string;
  href?: string;
} & typeof ConstrainedCard;

const Card = React.forwardRef((props: CardProps, _ref: React.Ref<HTMLDivElement | null>) => {
  const { children, className, href, ...rest } = props;
  // const [isHovering, intentRef] = useHoverIntent<HTMLDivElement>({ ref });

  return (
    <ConstrainedCard {...rest} className={className}>
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

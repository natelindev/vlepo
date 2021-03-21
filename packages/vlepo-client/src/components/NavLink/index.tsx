import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { BaseNavLink } from './style';

type NavLinkProps = {
  href?: string;
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export default function NavLink(props: NavLinkProps): React.ReactElement {
  const { href, children, ...rest } = props;
  const router = useRouter();
  return href ? (
    <Link href={href} passHref>
      <BaseNavLink active={router.pathname === href} {...rest}>
        {children}
      </BaseNavLink>
    </Link>
  ) : (
    <BaseNavLink active={router.pathname === href} {...rest}>
      {children}
    </BaseNavLink>
  );
}

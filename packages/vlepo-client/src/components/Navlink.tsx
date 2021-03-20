import Link from 'next/link';
import React from 'react';

import styled from '@emotion/styled';

type NavLinkProps = {
  href?: string;
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const BaseNavLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #007bff;
  background-color: transparent;
`;

export default function NavLink(props: NavLinkProps): React.ReactElement {
  const { href = '', children, ...rest } = props;
  return (
    <Link href={href} passHref>
      <BaseNavLink {...rest}>{children}</BaseNavLink>
    </Link>
  );
}

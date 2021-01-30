import Link from 'next/link';
import React from 'react';

import styled from '@emotion/styled';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const BaseNavLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #007bff;
  background-color: transparent;
`;

export default function NavLink(props: NavLinkProps): React.ReactElement {
  const { href, children } = props;
  return (
    <Link href={href} passHref>
      <BaseNavLink>{children}</BaseNavLink>
    </Link>
  );
}

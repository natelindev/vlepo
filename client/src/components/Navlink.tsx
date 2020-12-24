import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLink(props: NavLinkProps): React.ReactElement {
  const { to, children } = props;
  return <Link href={to}>{children}</Link>;
}

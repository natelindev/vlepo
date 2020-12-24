import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLink(props: NavLinkProps): React.ReactElement {
  const { to, children } = props;
  return (
    <Link className="nav-link" to={to}>
      {children}
    </Link>
  );
}

import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import styled from '@emotion/styled';

type NavLinkProps = {
  href?: string;
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

type BaseNavLinkProps = {
  active: boolean;
};

const BaseNavLink = styled.a<BaseNavLinkProps>`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  color: #007bff;
  background-color: transparent;
  border-radius: ${(props) => (props.active ? '0px' : '0.4rem')};
  transition: 0.1s background-color ease-in;
  ${(props) =>
    props.active
      ? ''
      : `&:hover {
    background-color: #f2f2f2;
  }`}
  box-shadow: ${(props) => (props.active ? '0 2px 0 0 #007bff' : 'none')};
`;

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

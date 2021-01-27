import Link from 'next/link';
import React, { useState } from 'react';

import styled from '@emotion/styled';

import GradientButton from './GradientButton';
import Logo from './Logo';
import NavLink from './Navlink';

// import SearchBar from './SearchBar';

const BaseNavbar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-flow: row nowrap;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  background-color: #f8f9fa;
  height: 4rem;
`;

const NavBrand = styled.a`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
`;

const NavbarCollapse = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
`;

const NavbarNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

const NavItem = styled.li`
  text-decoration: none;
`;

const Dropdown = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #007bff;
  background-color: transparent;
  margin-top: auto;
  margin-bottom: auto;
`;

const DropdownToggle = styled.div`
  white-space: nowrap;

  &::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }

  &:empty::after {
    margin-left: 0;
  }
`;

const NavLogo = styled(Logo)`
  margin-left: 1rem;
`;

const LoginButton = styled(GradientButton)`
  margin-left: auto;
  margin-right: 1rem;
  height: 100%;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;

  &[x-placement^='top'],
  &[x-placement^='right'],
  &[x-placement^='bottom'],
  &[x-placement^='left'] {
    right: auto;
    bottom: auto;
  }

  .show {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <BaseNavbar>
      <NavLogo />
      <Link href="/" passHref>
        <NavBrand href="/">Nathaniel&#39;s Blog</NavBrand>
      </Link>
      <NavbarCollapse>
        <NavbarNav>
          <NavLink href="/portfolio">portfolio</NavLink>
          <NavLink href="/papers">papers</NavLink>
          <NavLink href="/about">about</NavLink>
          <Dropdown>
            <DropdownToggle>More</DropdownToggle>
            <DropdownMenu>
              <Link href="/notes" passHref>
                <NavItem>Notes</NavItem>
              </Link>
              <Link href="/friends">
                <NavItem>friends</NavItem>
              </Link>
              <Link href="/messageBoard">
                <NavItem>MessageBoard</NavItem>
              </Link>
              <Link href="/timeline">
                <NavItem>Timeline</NavItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </NavbarNav>
      </NavbarCollapse>
      <NavbarCollapse>
        <NavbarNav>
          {/* <SearchBar /> */}
          <LoginButton link="/login" colorA="#5CC6EE" colorB="#3232FF">
            Login
          </LoginButton>
        </NavbarNav>
      </NavbarCollapse>
      {/* <NavbarToggler className="animated--toggler" /> */}
    </BaseNavbar>
  );
};

export default Navbar;

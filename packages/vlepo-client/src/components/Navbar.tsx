import Link from 'next/link';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentUserState } from 'src/atoms/user';

import styled from '@emotion/styled';

import Avatar from './Avatar';
import GradientButton from './GradientButton';
import Logo from './Logo';
import LoginModal from './Modals/LoginModal';
import NavLink from './Navlink';
import SearchBar from './SearchBar';
import { ZIndex } from './ZIndex';

const BaseNavbar = styled.nav`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-flow: row nowrap;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: saturate(180%) blur(5px);
  height: 3.5rem;
  z-index: ${ZIndex.Navbar};
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

const LeftNavCollapse = styled(NavbarCollapse)`
  flex-grow: 0;
  flex-basis: auto;
`;

const RightNavCollapse = styled(NavbarCollapse)`
  flex-grow: 0;
`;

const NavbarNav = styled.div`
  display: flex;
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
  margin-right: 0.3rem;
  margin-top: 0.3rem;
`;

const NavSearchBar = styled(SearchBar)`
  margin-left: auto;
  margin-right: 0.5rem;
`;

const LoginButton = styled(GradientButton)`
  margin-right: 1rem;
  height: 100%;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: ${ZIndex.DropDownMenu};
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

const NavbarAvatar = styled(Avatar)`
  margin-top: 0.1rem;
  margin-left: 0.3rem;
  margin-right: 1rem;
`;

const Navbar: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const currentUser = useRecoilValue(currentUserState);
  return (
    <BaseNavbar>
      <NavLogo size="50px" />
      <Link href="/" passHref>
        <NavBrand href="/">Nathaniel&#39;s Blog</NavBrand>
      </Link>
      <LeftNavCollapse>
        <NavbarNav>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/papers">Papers</NavLink>
          <NavLink href="/about">About</NavLink>
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
      </LeftNavCollapse>
      <RightNavCollapse>
        <NavbarNav>
          <NavSearchBar />
          {currentUser ? (
            <NavbarAvatar
              size={32}
              imageUrl={currentUser.profileImageUrl ?? '/images/avatar/default-1.svg'}
            />
          ) : (
            <LoginButton onClick={() => setShowLoginModal(true)} colorA="#5CC6EE" colorB="#3232FF">
              Login
            </LoginButton>
          )}
        </NavbarNav>
      </RightNavCollapse>
      {/* <NavbarToggler className="animated--toggler" /> */}
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </BaseNavbar>
  );
};

export default Navbar;

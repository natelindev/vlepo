import Link from 'next/link';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentUserState } from 'src/atoms/user';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { OAuthConsts } from '@vlepo/shared';

import { deleteCookie } from '../hooks/useCookie';
import Avatar from './Avatar';
import Dropdown from './Dropdown';
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

const NavbarAvatar = styled(Avatar)`
  & > div {
    border-radius: 50%;
  }
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1.25rem;
  margin-right: 1.75rem;
`;

const Navbar: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
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
          <Dropdown
            css={css`
              margin-top: 8px;
            `}
          >
            <NavLink href="">More</NavLink>
            <NavLink href="/thoughts">
              <NavItem>Thoughts</NavItem>
            </NavLink>
            <NavLink href="/friends">
              <NavItem>Friends</NavItem>
            </NavLink>
            <NavLink href="/messageBoard">
              <NavItem>MessageBoard</NavItem>
            </NavLink>
            <NavLink href="/tags">
              <NavItem>Tags</NavItem>
            </NavLink>
          </Dropdown>
        </NavbarNav>
      </LeftNavCollapse>
      <RightNavCollapse>
        <NavbarNav>
          <NavSearchBar />
          {currentUser ? (
            <Dropdown
              position="right"
              css={css`
                margin-top: 12px;
              `}
            >
              <NavbarAvatar
                size={32}
                imageUrl={currentUser.profileImageUrl ?? '/images/avatar/bot.svg'}
              />
              <NavLink href={`/${currentUser.id}/profile`}>
                <NavItem>Profile</NavItem>
              </NavLink>
              <NavLink href={`/${currentUser.id}/settings`}>
                <NavItem>Settings</NavItem>
              </NavLink>
              {currentUser.roles.includes(OAuthConsts.roles.admin.value) && (
                <NavLink href="/admin">
                  <NavItem>Admin</NavItem>
                </NavLink>
              )}
              <NavLink>
                <NavItem>Theme</NavItem>
              </NavLink>
              <NavLink
                onClick={() => {
                  deleteCookie('idToken');
                  deleteCookie('accessToken');
                  deleteCookie('idToken.sig');
                  deleteCookie('accessToken.sig');
                  setCurrentUser(undefined);
                }}
              >
                <NavItem>Logout</NavItem>
              </NavLink>
            </Dropdown>
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
